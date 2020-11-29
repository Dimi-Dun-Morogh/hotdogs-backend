> Node/Express.js PostgreSQL api
should start on localhost:3003 or can be tested via link below

|        | https://hotdogswtf.herokuapp.com/api/hotdogs |                                                                                                    |
|--------|----------------------------------------------|----------------------------------------------------------------------------------------------------|
| GET    | /api/hotdogs                                 | returns array of all hotdogs                                                                       |
| POST   | /api/hotdogs                                 | will create a hotdog in db {name,  title, description, image} all fields required except for image |
| PUT    | /api/hotdogs/:id                             | update hotdog's info, fields required as above                                                     |
| DELETE | /api/hotdogs/:id                             | delete hotdog by id                                                                                |