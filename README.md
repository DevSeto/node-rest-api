# REST API example application


data base configuration the `config/http.js` file.


## Initial Install  
    sudo apt-get install nodejs
    sudo apt-get install npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node

## Install
    git clone https://github.com/{{Username}}/node-rest-api.git
    cd node-rest-api
    sudo npm install
    change `config/http.js` config

## Run the app

    npm start

# REST API

The REST API to the example app is described below.

## User Sign up

### Request

`post /api/v1/auth/signup`

    curl -X POST \
      /api/v1/auth/signup \
      -H 'Content-Type: application/json' \
      -H 'Postman-Token: 9df64fa6-ed7e-4e92-a3df-612775f54b8e' \
      -H 'cache-control: no-cache' \
      -d '{
        "email":"",
        "password":"",
        "phone":""
    }'
    
### Response

     {
         "user": {
             "guid": "5550ad0d-9048-4193-99f3-7794185323ed",
             "loggedtime": "2019-10-07T12:15:09.931Z",
             "email": "email@gmail.com",
             "password": "e10adc3949ba59abbe56e057f20f883e",
             "phone": "+32184515",
             "updatedAt": "2019-10-07T12:15:09.931Z",
             "createdAt": "2019-10-07T12:15:09.931Z"
         },
         "token": "eyJhbGcOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiNTU1MGFkMGQtOTA0OC00MTkzLTk5ZjMtNzc5NDE4NTMyM2VkIiwibG9nZ2VkdGltZSI6IjIwMTktMTAtMDdUMTI6MTU6MDkuOTMxWiIsImVtYWlsIjoicG94d2QyZTNlb2RzQHBveG9zLmNvbSIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJwaG9uZSI6IjEyMzEzMjMzMjQyMzMxMjMiLCJ1cGRhdGVkQXQiOiIyMDE5LTEwLTA3VDEyOjE1OjA5LjkzMVoiLCJjcmVhdGVkQXQiOiIyMDE5LTEwLTA3VDEyOjE1OjA5LjkzMVoiLCJpYXQiOjE1NzA0NTA1MDksImV4cCI6MTU3MDQ1MTk0OX0.n3D6zI9bKY2Lu0IBhi5W08CVDvBen2AAj7wrWWitGQM"
     }

## User Sign in

### Request

`POST /api/v1/auth/signin`

       curl -X POST \
         /api/v1/auth/signin \
         -H 'Content-Type: application/json' \
         -H 'Postman-Token: 2f9b51d3-4d12-42d0-bf19-297c59296e6c' \
         -H 'cache-control: no-cache' \
         -d '{
        "email":"email@gmail.com" ||  "phone": "+32184515" ,
        "password":"123456"
       }'

### Response

     {
         "user": {
             "guid": "5550ad0d-9048-4193-99f3-7794185323ed",
             "loggedtime": "2019-10-07T12:15:09.931Z",
             "email": "email@gmail.com",
             "password": "e10adc3949ba59abbe56e057f20f883e",
             "phone": "+32184515",
             "updatedAt": "2019-10-07T12:15:09.931Z",
             "createdAt": "2019-10-07T12:15:09.931Z"
         },
         "token": "eyJhbGcOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiNTU1MGFkMGQtOTA0OC00MTkzLTk5ZjMtNzc5NDE4NTMyM2VkIiwibG9nZ2VkdGltZSI6IjIwMTktMTAtMDdUMTI6MTU6MDkuOTMxWiIsImVtYWlsIjoicG94d2QyZTNlb2RzQHBveG9zLmNvbSIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJwaG9uZSI6IjEyMzEzMjMzMjQyMzMxMjMiLCJ1cGRhdGVkQXQiOiIyMDE5LTEwLTA3VDEyOjE1OjA5LjkzMVoiLCJjcmVhdGVkQXQiOiIyMDE5LTEwLTA3VDEyOjE1OjA5LjkzMVoiLCJpYXQiOjE1NzA0NTA1MDksImV4cCI6MTU3MDQ1MTk0OX0.n3D6zI9bKY2Lu0IBhi5W08CVDvBen2AAj7wrWWitGQM"
     }

## Get user info

### Request

`GET /api/v1/users/info`

       curl -X GET \
       /api/v1/users/info \
      -H 'Content-Type: application/json' \
      -H 'Postman-Token: c15068f3-47eb-4944-ae7b-39528b13e9d3' \
      -H 'cache-control: no-cache' \
      -H 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiMjU3MWY3MzEtN2ZkNC00NTQyLWIzZDktN2YxMDE4OTFjMDI4IiwibG9nZ2VkdGltZSI6IjIwMTktMTAtMDdUMTE6MjQ6MjguMDAwWiIsImVtYWlsIjoicG94d2QyZTNvZHNAcG94b3MuY29tIiwicGhvbmUiOiIxMjMxMzMzMjQyMzMxMjMiLCJwYXNzd29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIiwiY3JlYXRlZEF0IjoiMjAxOS0xMC0wN1QxMDo0MTowMS4wMDBaIiwidXBkYXRlZEF0IjoiMjAxOS0xMC0wN1QxMToyNDoyOC4wMDBaIiwiaWF0IjoxNTcwNDQ3NDY4LCJleHAiOjE1NzA0NDg5MDh9.8PkgSVIQ060WV19dXnLvevy2HOA_PtvO8opBNd7ypJo'
### Response

      {
          "userId": "2571f731-7fd4-4542-b3d9-7f101891c028"
      }

## Get pings from the server to the google

### Request

`GET api/v1/users/latency`

      curl -X GET \
         /api/v1/users/latency \
        -H 'Content-Type: application/json' \
        -H 'Postman-Token: b29d2ad4-5b5d-4bb6-9ea2-a1db2d15877f' \
        -H 'cache-control: no-cache' \
        -H 'token: '

### Response

    {
        "success": true,
        "result": {
            "pid": 2105,
            "destination": "173.194.73.101",
            "hop": [
                {
                    "hop": 1,
                    "ip": "192.168.0.1",
                    "rtt1": "0.261 ms"
                },
                {
                    "hop": 2,
                    "ip": "192.168.137.1",
                    "rtt1": "0.825 ms"
                },
             ...
            ]
        }
    }

## User Logout

### Request

`Get /api/v1/users/logout`

    curl -X GET \
      /api/v1/users/logout \
      -H 'Content-Type: application/json' \
      -H 'Postman-Token: 2efcc0bd-8c4b-41b2-817f-9bb3783938bb' \
      -H 'cache-control: no-cache' \
      -H 'token: '

### Response

     {    
        "success": true,
     }

