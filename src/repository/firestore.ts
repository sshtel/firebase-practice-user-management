import * as admin from 'firebase-admin'
import * as envs from '../envs'


export const initFirebaseAdmin = () => {
    console.log('initFirebaseAdmin....')
    admin.initializeApp({
        credential: admin.credential.cert(envs.firebaseServiceAccountKeyPath)
    })
}

export const db = () => {
    return admin.firestore() 
}
