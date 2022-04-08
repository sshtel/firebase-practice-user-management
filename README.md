# onloop-coding-task

## How to run ##

- Firebase Service account key file path should be set in system environment variable FIREBASE_SERVICE_ACCOUNT_KEY_PATH
- Required variables
```
FIREBASE_SERVICE_ACCOUNT_KEY_PATH: Firebase service account key json file path
LINK_PREVIEW_API_KEY: Link Preveiw API Key
```


```
$ yarn install
$ FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./credentials/your-firebase-adminsdk-serviceaccount.json LINK_PREVIEW_API_KEY=YOUR-API-KEY yarn start
```

```
$ npm install
$ FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./credentials/your-firebase-adminsdk-serviceaccount.json LINK_PREVIEW_API_KEY=YOUR-API-KEY npm run start
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


### Link Preview Fetch ###
- for fetch test
- `POST /link-preview/fetch`
- Header: Content-Type: application/json
- Request Body
```
{
    url: string // target url to view using Link Preview
}
```
- Response
```
{
    status: string,
    fetchData: Object // Raw object response from Link Preview
}
```
```
$ curl -X POST  localhost:8080/link-preview/fetch -H "Content-Type: application/json" -d '{ "url": "www.google.com" }'

{"status":"ok","fetchData":{"title":"Google","description":"Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.","image":"http://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png","url":"http://www.google.com"}}%
```


### Link Preview Fetch and Store ###
- for fetch test
- `POST /link-preview/fetch-and-store`
- Header: Content-Type: application/json
- Request Body
```
{
    url: string, // target url to view using Link Preview
    user_id: string // userId of User Object in FireStore. preview data is stored within the User object
    tags: Object[] // Optional: An array of Tags
}
```
- Response
```
{
    status: string,
    fetchData: Object // Raw object response from Link Preview
}
```

```
curl -X POST  localhost:8080/link-preview/fetch-and-store -H "Content-Type: application/json" -d '{ "url": "www.farmkb.net", "user_id": "ol2yg6i27AoMM52jCCfM" }'

{"status":"unread"}
```
