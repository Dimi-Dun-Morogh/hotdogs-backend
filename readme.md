|        |                    |                                                                                                    |
|--------|--------------------|----------------------------------------------------------------------------------------------------|
| GET    | /api/hotdogs       | returns array of all hotdogs                                                                       |
| GET    | /api/favorites/:id | will return hotdog by id                                                                           |
| POST   | /api/hotdogs       | will create a hotdog in db {name,  title, description, image} all fields required except for image |
| PUT    | /api/hotdogs/:id   | update hotdog's info, fields required as above                                                     |
| DELETE | /api/hotdogs/:id   | delete hotdog by id                                                                                |