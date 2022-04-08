import * as firestore from '../repository/firestore'
import * as proc from '../processor/link-preview'
import * as userProc from '../processor/user'
import { expect } from 'chai'

try {    
    firestore.initFirebaseAdmin()
} catch (e) {
    console.log(e)
}

beforeEach(() => {
    process.env = Object.assign(process.env, {
        FIRESTORE_EMULATOR_HOST: '127.0.0.1:8888'
    })
})

describe('Link Preview Test', () => {
    
    it('should fetch site', async () => {
        const res = await proc.fetchSite({
            url: 'www.google.com'
        })
        expect(res.title).to.equal('Google')
        expect(res.url).to.equal('http://www.google.com')
    });

    it('should fetch site for specific fields', async () => {
        const res = await proc.fetchSite({
            url: 'www.google.com',
            fields: [ 'image_x', 'icon_type' ,'locale' ]
        })
        expect(res.image_x).to.exist
        expect(res.icon_type).to.exist
        expect(res.locale).to.exist
    });


    it('should fetch site and store into FireStore', async () => {
        const userId = await userProc.createUser({
            name: "Steve",
            email: "sshtel@gmail.com",
            phoneNumber: "3333"
        })

        const res = await proc.fetchSiteAndStoreToFirestore(
            userId,
            [ 
                { a: 1, b:2 },
                { c: "cc", d:"dd" }
            ],
            { url: 'www.google.com' })
        expect(res.status).to.equal('read')
        expect(res.created_at).to.exist

    });

});

