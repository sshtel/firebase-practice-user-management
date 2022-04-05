## Notion Link

https://www.notion.so/onloop/Engineering-Coding-Task-NodeJS-Express-acffb30479d5411ca2dcd4476b0ccb78


## OnLoop Tech Stack

Welcome to OnLoop's Coding trial! Congrats you have made it to the next round! Here at OnLoop, we aim to build a less biased and more productive workplace culture through the habit of reflection, feedback, and learning.

Our app is built on the **Flutter framework** and **NodeJS Express**. This task is a **NodeJS Express task** and you will find the details below:

## Backend API Development Challenge

OnLoop's backend is based on a NodeJS Express server where we develop and deploy APIs that are called from our Mobile and Web App to perform several actions initiated by the user. All user and product-specific data is stored in a NoSQL database (document-based database) - specifically **Firestore** (Firebase product).

The task has 2 basic components (details below):

- Create a simple CRUD app using NodeJS Express server and expose 4 API endpoints for each of create, read, update and delete operations.
- Write a custom API in the same NodeJS Express server to fetch data from a 3rd party API and store it in Firestore.

### **Task 1:** Create a simple CRUD app using NodeJS Express server and expose 4 API endpoints for each of create, read, update and delete operations

You can create a Firebase Project for free under your personal Gmail account. You will need the Firestore emulator from the set of [Firebase emulators](https://firebase.google.com/docs/emulator-suite) to be able to write tests for your API endpoints.

For the actual APIs, you can just create a ‘users’ collection in [Firestore](https://firebase.google.com/docs/firestore) and create, read, update and delete documents using the 4 API endpoints in that collection. You can assume each document has 3 attributes:

1. Name of user
2. Email of user
3. Phone number of user

Once your API endpoints are ready, you can start your NodeJS Express server and invoke your APIs using a tool like Postman. **All these operations should be tested by writing tests using chai and mocha frameworks and writing the data to the Firestore emulator.**

For example: after creating a new user document, your emulator should look like this:

![image_1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4815b52f-6514-4c76-9a53-20b312c0c758/image_1.png)

### **Task 2:** Write a custom API in the same NodeJS Express server to fetch data from a 3rd party API and store it in Firestore

As part of this task, you need to use the [LinkPreview API](https://www.linkpreview.net/). Go to the website and sign up for a free account. This API helps fetch relevant information for a link in a JSON object format. Check out the gif below:

![image_6.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b5d3288-04ff-44ba-9adf-68800a0a3b91/image_6.gif)

You will need to call this API from your NodeJS Express server project using the API specifications [here](https://www.linkpreview.net/docs/). Essentially, you need to write a custom API that takes in the following parameters:

1. `url` - Link for which information needs to be fetched
2. `user_id` - User ID of a user from your Firestore database
3. `tags[]` - An array of Tags (a **Tag** is just an object with a couple of parameters) and creates the data structure in your Firestore emulator as shown in the screenshots below.

The attributes returned by the LinkPreview API (`title`, `description`, `url` and `image`) will need to be **augmented with 2 extra parameters**:

1. `created_at` (timestamp) - date and time at which this data was added to the database
2. `status` (string) - indicator to show whether the document has been 'read' or 'unread'

Similar to Task 1, you need to write tests to validate the data on the Firestore.

The expected data structure after your function has been completed is shown below:

![image_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0300b100-d71d-4318-a5ff-4b9cbd364ca8/image_2.png)

![image_3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a432e38-1dd9-4354-b920-3f2293c8c18b/image_3.png)

## Guidelines

You can use either **Typescript** or **Javascript** for the task.

You will be evaluated on the following:

- Task completion
- Code quality and solution design
- Adequate documentation using comments and good naming conventions

## Code Submission

Once you have completed the challenge, please submit your code by uploading the files to a Github repo and make the link available to us. Please also add the following details as part of the readme document:

- Steps to run the code
- Tasks that were completed
- Assumptions and reasons for any technical decisions made