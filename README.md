### coding-challenge-backend and coding-challenge-frontend

## How to run (Same setup for frontend and backend)

1. Go to the project folder
2. npm install
3. npm start

you can run it locally or you can test this url as well.
Bankend live link for testing-
```http
https://coding-challenge-backend1.herokuapp.com/users/
```
frontend live link for testing-
```http
https://coding-challenge-frontend1.herokuapp.com
```

api doc: -



#### get all user 

url : `GET` https://coding-challenge-backend1.herokuapp.com/users/

```javascript
header : {

}
body : {

}
ouutput : {
{
    "users": [
        {
            "id": "2oalfWqIWcJCb2p5ZPHS",
            "registeredAt": "2021-10-12T18:29:56.508Z",
            "surveys": [],
            "name": "Stephen Murphy",
            "gender": "male",
            "email": "Stephen.Murphy@test.com",
            "dateOfBirth": "1984-12-19T13:35:06.356Z"
        },
        {
            "id": "5GuNFsUHGkhRabawqMfj",
            "email": "bhupendra.b@test.com",
            "gender": "male",
            "registeredAt": "2021-02-10T13:35:06.356Z",
            "dateOfBirth": "2001-02-01T13:35:06.356Z",
            "name": "Bhupendra Banothe",
            "surveys": null
        },
        {
            "id": "DH5XciDacU0QW39alyTX",
            "registeredAt": "2021-01-08T13:35:06.356Z",
            "name": "Jack Deer",
            "surveys": [
                "Beer Poll"
            ],
            "dateOfBirth": "1995-02-01T13:35:06.356Z",
            "gender": "Male",
            "email": "jack.deer@test.com"
        },
        {
            "id": "Utb4tyRcwErQ8rKxMn6g",
            "dateOfBirth": "2021-12-09T00:00:00.000Z",
            "name": "bb",
            "surveys": null,
            "gender": "m",
            "registeredAt": "2021-10-12T22:10:51.245Z",
            "email": "nn@gmail.com"
        },
        {
            "id": "YDnK1UIHslQfLaFkLYQB",
            "registeredAt": "2019-07-24T13:35:06.356Z",
            "surveys": [
                "Chocolate Survey"
            ],
            "dateOfBirth": "1956-12-01T13:35:06.356Z",
            "gender": "Female",
            "name": "Mary Hamil",
            "email": ""
        },
        {
            "id": "bADkqaY7WZvTbSOCgyzI",
            "gender": "m",
            "email": "mm@gmail.com",
            "name": "mm1212",
            "registeredAt": "2021-10-12T22:12:02.717Z",
            "surveys": null,
            "dateOfBirth": "2021-12-22T00:00:00.000Z"
        },
        {
            "id": "fN9ojbnopwZHG4rpDTKU",
            "gender": "male",
            "dateOfBirth": "2021-12-04T00:00:00.000Z",
            "surveys": null,
            "name": "aa",
            "email": "aa@gmmail.com",
            "registeredAt": "2021-10-12T22:07:59.353Z"
        },
        {
            "id": "hTM8e7fp9KE2PLSMAC0j",
            "gender": "Male",
            "surveys": [
                "Chocolate Survey",
                "Beer Poll",
                "Climate Action Questionnaire"
            ],
            "name": "John Doe",
            "registeredAt": "2021-02-09T13:35:06.356Z",
            "email": "john.doe@test.com",
            "dateOfBirth": "2000-01-09T13:35:06.356Z"
        },
        {
            "id": "ote4gIEGI8S79BMVWtzm",
            "surveys": null,
            "email": "Jane.doe@test.com",
            "dateOfBirth": "2001-02-01T13:35:06.356Z",
            "registeredAt": "2021-10-12T18:50:05.756Z",
            "name": "Jane Doe1",
            "gender": "female"
        }
    ]
}
}
```


#### create user 

url : `POST` https://coding-challenge-backend1.herokuapp.com/users/
```javascript
 header : {

}
body : {  
    "name": "test 2",
    "email": "test1@test.com",
    "dateOfBirth": "12/10/1997",
    "surveys": null,
    "gender": "female"
}

ouutput : {
  "message": "Yee! User Created"
}
```


#### Update user 

url : `PUT` https://coding-challenge-backend1.herokuapp.com/users/:uid
```javascript
header : {

}
body : {  
    "name": "test 2",
    "email": "test1@test.com",
    "dateOfBirth": "12/10/1997",
    "surveys": null,
    "gender": "female"
}

ouutput : {
  "message": "Yee! User Updated"
}
```



#### Delete user 

url : `Delete` https://coding-challenge-backend1.herokuapp.com/users/:uid
```javascript
header : {

}
body : {  
}

ouutput : {
  "message": "Yee! User deleted"
}
```



