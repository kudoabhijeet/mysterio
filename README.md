# Mysterio Backend
Backend for Mysterio Web Application. 

## Developer Guide
### API Endpoints

`POST api/upload`

Request
```
{
    "hint" : "% hint for a question %",
    "imageURL:" : "% generated url from cdn %",
    "correctScore" : 45
}
```

Response (201)
```
{
    "status": "success",
    "data": {
        "hint": "Hello World",
        "imageURL": "url for content",
        "correctScore": 1234,
        "id": 4
    }
}
```
`GET api/all`

Successful Response (`CODE: 200`) 

Get all questions, from the database.

```
{
    "status": "success",
    "score": 4936,
    "data": [
        {
            "hint": "Hello World",
            "imageURL": "url for content",
            "correctScore": 1234
        }
    ]
}
```


### Database & Schema

Database Details

- Database of choice : PostgreSQL v13
- Provider : Heroku PostgreSQL Add-on
- Localhost : 
    - `user: mysterio`
    - `pass: mysterio`
    - `port: default`

Schema
- Questions
```
1. id : number
2. hint : string
3. imageURL: string
4. correctScore: number
```

