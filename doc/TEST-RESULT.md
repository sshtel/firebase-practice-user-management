## Run server with FireStore


```
$ yarn test
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./credentials/onloop-coding-task-firebase-adminsdk-5n37k-a33a23cd4f.json  LINK_PREVIEW_API_KEY=e5f6314ee63f6d0e39068fd971f979d1  yarn dev                 
```
[<img src="https://raw.githubusercontent.com/sshtel/onloop-coding-task/main/doc/fetch-and-store-firestore-test.png?token=GHSAT0AAAAAABTH43HCODO7GF3MLCKVEXT2YSP3G6Q">](github.com/sshtel)




## Emulator and Spec Test ##


```
$ yarn test


  Link Preview Test
    ✔ should fetch site (417ms)
    ✔ should fetch site for specific fields (301ms)
    ✔ should fetch site and store into FireStore (717ms)

  Users collection CRUD
    ✔ should create, get, update user (49ms)
    ✔ should create, get, delete user


  5 passing (2s)


```

### User created
[<img src="https://github.com/sshtel/onloop-coding-task/blob/e3ae87bee14745d03153a814e11a7725765e097b/doc/fetch-and-store-emulator-user.png?raw=true">](github.com/sshtel)


### Learn Content
[<img src="https://github.com/sshtel/onloop-coding-task/blob/main/doc/fetch-and-store-emulator-learn_content.png?raw=true">](github.com/sshtel)


