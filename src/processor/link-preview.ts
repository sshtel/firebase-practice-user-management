import {
    LinkPreviewAppResponse,
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

export const fetchSiteAndStoreToFirestore = async (userId: string, req: LinkPreviewServiceFetchRequest): Promise<LinkPreviewAppResponse> => {
    let fetchData;
    try {
        fetchData = await fetchSite(req);
    } catch (e) {
        console.error(e)
        return { status: LinkPreviewAppResponseStatus[LinkPreviewAppResponseStatus.unread] }
    }
       

    try {
        await firestore.db().collection('link-preview').add({
            title: fetchData.title || '',
            url: fetchData.url || '',
            description: fetchData.description || '',
            image: fetchData.image || ''
        });
    } catch (e) {
        console.error(e)
        return { status: LinkPreviewAppResponseStatus[LinkPreviewAppResponseStatus.unread] }
    }

    return {
        title: fetchData.title,
        description: fetchData.description,
        url: fetchData.url,
        image: fetchData.image,
        created_at: +(new Date()),
        status: LinkPreviewAppResponseStatus[LinkPreviewAppResponseStatus.read]
    }

}