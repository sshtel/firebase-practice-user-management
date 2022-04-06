# onloop-coding-task

## How to run ##

- Firebase Service account key file path should be set in system environment variable FIREBASE_SERVICE_ACCOUNT_KEY_PATH

```
$ yarn install

$ FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./credentials/your-firebase-adminsdk-serviceaccount.json yarn start
```

```
$ npm install
$ npm run start
```

## How to test ##

- firebase emulator should run first
- FIRESTORE_EMULATOR_HOST: '127.0.0.1:8888' is fixed


```
$ firebase emulators:start
i  emulators: Starting emulators: firestore
i  firestore: Firestore Emulator logging to firestore-debug.log
i  ui: Emulator UI logging to ui-debug.log

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://localhost:8889                │
└─────────────────────────────────────────────────────────────┘

┌───────────┬────────────────┬─────────────────────────────────┐
│ Emulator  │ Host:Port      │ View in Emulator UI             │
├───────────┼────────────────┼─────────────────────────────────┤
│ Firestore │ 127.0.0.1:8888 │ http://localhost:8889/firestore │
└───────────┴────────────────┴─────────────────────────────────┘
  Emulator Hub running at localhost:4400
  Other reserved ports: 4500

Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
```

```
$ yarn test
```

```
$ npm run test 
```

## API spec ##

### Create User
- `POST /user`
- Header: Content-Type: application/json
- Request Body
```
{
    name: string,
    email: string,
    phone_number: string
}
```

- Response
```
{
    status: string,
    userId: string
}
```

```
curl -X POST  -d '{ "name": "Steve", "email": "sshtel@gmail.com", "phone_number": "1234"}' -H "Content-Type: application/json" localhost:8080/user
```

### Get User
- `GET /user/:userId`
- Parameter: userId (response from create user)

```
curl -X GET localhost:8080/user/:userId
```

### Patch User
- `PATCH /user/:userId`
- Header: Content-Type: application/json
- Parameter: userId (response from create user)
- Request Body

```
{
    name: string,
    email: string,
    phone_number: string
}
```

```
curl -X PATCH  -d '{ "name": "Steve Song", "email": "sshtel@gmail.com", "phone_number": "12341234"}' -H "Content-Type: application/json" localhost:8080/user/S4U30xNxrlXcgreCabnx
```

### Delete User
- `DELETE /user/:userId`
- Parameter: userId (response from create user)

```
curl -X DELETE localhost:8080/user/S4U30xNxrlXcgreCabnx
```