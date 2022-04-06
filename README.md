# onloop-coding-task

## How to run ##

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

- Method: POST
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
- GET
- Parameter: userId (response from create user)

```
curl -X GET localhost:8080/user/:userId
```

### Patch User
- Patch
- Header: Content-Type: application/json
- Request Body
```

```

```
curl -X PATCH  -d '{ "userId": "S4U30xNxrlXcgreCabnx",  "name": "Steve Song", "email": "sshtel@gmail.com", "phone_number": "12341234"}' -H "Content-Type: application/json" localhost:8080/user
```