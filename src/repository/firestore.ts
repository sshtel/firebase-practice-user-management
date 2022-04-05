import * as admin from 'firebase-admin'
import * as envs from '../envs'

admin.initializeApp({
    credential: admin.credential.cert(envs.firebaseServiceAccountKeyPath)
})

export const db = admin.firestore() 

