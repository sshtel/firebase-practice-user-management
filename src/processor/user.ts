import { User } from '../model/user'
import * as firestore from '../repository/firestore'

export const getUser = async (userId: string): Promise<User> => {
    const result: FirebaseFirestore.DocumentSnapshot = await firestore.db().collection('users').doc(userId).get()
    
    return {
        name: result.get('name'),
        email: result.get('email'),
        phoneNumber: result.get('phone_number')
    } as User
}

export const createUser = async (user: User): Promise<string> => {
    const res = await firestore.db().collection('users').add({
        name: user.name,
        email: user.email,
        phone_number: user.phoneNumber
    });
    
    return res.id
}


export const updateUser = async (userId: string, user: User) => {
    await firestore.db().collection('users').doc(userId).set({
        name: user.name,
        email: user.email,
        phone_number: user.phoneNumber
    });

}

export const deleteUser = async (userId: string) => {
    await firestore.db().collection('users').doc(userId).delete()
}
