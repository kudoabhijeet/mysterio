# Mysterio Backend
Backend for Mysterio Web Application. 

## Developer Guide
### API Endpoints

`POST /upload`

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
    "status" : "success",
}
```
`GET /questions`

Successful Response (`CODE: 200`) 

Get all questions, from the database.

```
{   "status" : "success",
    "count": 15,
    "data" : {
        "id": 1,
        "hint" : "First edition of Macintosh",
        "imageURL:" : "https://kudoabhijeet.com/img1.png",
        "correctScore" : 1000
    }
}
```


### Database & Schema

Database Details

- Database of choice : PostgreSQL v13
- Provider : Heroku PostgreSQL Add-on

Schema
- Questions
```
1. id : number
2. hint : string
3. imageURL: string
4. correctScore: number
```
