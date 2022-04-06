import * as express from 'express'
import { LinkPreviewServiceFetchRequest } from '../model/link-preveiw';
import * as procLinkPreview from '../processor/link-preview';
export const linkPreviewRouter = express.Router();

linkPreviewRouter.route('/fetch').post( async (req, res, next) => {
    const response = await procLinkPreview.fetchSite({
        url: req.body.url
    } as LinkPreviewServiceFetchRequest)
    res.json({ status: 'ok', fetchData: response })
})


linkPreviewRouter.route('/fetch-and-store').post( async (req, res, next) => {
    const response = await procLinkPreview.fetchSiteAndStoreToFirestore(
        req.body.user_id,
        {
            url: req.body.url
        } as LinkPreviewServiceFetchRequest)
    res.json(response)
})
