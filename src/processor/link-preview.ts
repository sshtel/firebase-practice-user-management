import {
    LinkPreviewData,
    LinkPreviewServiceFetchRequest,
    LinkPreviewAppResponseStatus
} from "../model/link-preveiw";
import axios from 'axios'
import * as envs from '../envs/envs'
import * as firestore from '../repository/firestore'

export const fetchSite = async (req: LinkPreviewServiceFetchRequest) => {
    try {
        return (await axios.post(envs.linkPreviewRequestHostname, {
            q: req.url,
            key: envs.linkPreviewApiKey,
            fields: req.fields &&  req.fields.join(',') || undefined
        })).data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchSiteAndStoreToFirestore = async (param: {userId: string, tags?: any[], req: LinkPreviewServiceFetchRequest}): Promise<LinkPreviewData> => {
    let fetchData;
    const { userId, tags, req } = param;
    try {
        fetchData = await fetchSite(req);
    } catch (e) {
        console.error(`fetchSiteAndStoreToFirestore fetchSite failed: ${e}`)
        throw e;
    }

    let learnContentDoc;
    const object = {
        title: fetchData.title,
        description: fetchData.description,
        url: fetchData.url,
        image: fetchData.image,
        created_at: +(new Date()),
        status: LinkPreviewAppResponseStatus[LinkPreviewAppResponseStatus.unread]
    }
    try {
        learnContentDoc = await firestore.db().collection('users').doc(userId).collection('learn_content').add(object);
        // console.log(learnContentDoc.id)
    } catch (e) {
        console.error(`fetchSiteAndStoreToFirestore writing fetch Data in FireStore failed: ${e}`)
        throw e;
    }

    if (tags){
        try {
            for (const tag of tags) {
                firestore.db().collection('users').doc(userId).collection('learn_content').doc(learnContentDoc.id).collection('tags').add(tag);
            }
                    
        } catch (e) {
            console.error(`fetchSiteAndStoreToFirestore writing tag data in FireStore failed: ${e}`)
            throw e;
        }
    }

    return object;

}