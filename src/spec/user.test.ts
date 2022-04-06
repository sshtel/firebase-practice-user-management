// import * as admin from 'firebase-admin'

import * as chai from 'chai'
import * as firestore from '../repository/firestore'

import * as userProc from '../processor/user'

const expect = chai.expect;

firestore.initFirebaseAdmin()

beforeEach(() => {
    process.env = Object.assign(process.env, {
        FIRESTORE_EMULATOR_HOST: '127.0.0.1:8888'
    })
})

describe('Users collection CRUD', () => {
    
    it('should create, get, update user', async () => {
        const userId = await userProc.createUser({
            name: "Steve",
            email: "sshtel@gmail.com",
            phoneNumber: "3333"
        })

        const result = await userProc.getUser(userId);
        expect(result.name).to.equal('Steve')
        expect(result.email).to.equal('sshtel@gmail.com')
        expect(result.phoneNumber).to.equal('3333')

        await userProc.updateUser(userId, {
            name: 'Steve',
            email: 'sshtel@yahoo.com',
            phoneNumber: '5555'
        })

        const updatedResult = await userProc.getUser(userId);
        expect(updatedResult.name).to.equal('Steve')
        expect(updatedResult.email).to.equal('sshtel@yahoo.com')
        expect(updatedResult.phoneNumber).to.equal('5555')

    });

    it('should create, get, delete user', async () => {
        const userId = await userProc.createUser({
            name: "Steve",
            email: "sshtel@gmail.com",
            phoneNumber: "3333"
        })

        const result = await userProc.getUser(userId);
        expect(result.name).to.equal('Steve')
        expect(result.email).to.equal('sshtel@gmail.com')
        expect(result.phoneNumber).to.equal('3333')

        await userProc.deleteUser(userId)

    });

});

