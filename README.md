# onloop-coding-task

## How to run ##

- Firebase Service account key file path should be set in system environment variable FIREBASE_SERVICE_ACCOUNT_KEY_PATH

```
$ yarn install
$ yarn start
```

```
$ npm install
$ npm run start
```

## How to test ##
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