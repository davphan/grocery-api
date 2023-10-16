# Grocery API
Created by: David Phan

The REST API for the Grocery App. Stores information on users and user
grocery shopping data, preferences, and other information related to the
Grocery App.

## API Documentation

### User Info Requests
> `/getUsers`
> - Request Type: GET
> - Request Parameters: None
> - Request Body: None
> - Response Body:
> ```json
> {
>   {
>     "id": number,
>     "fname": string,
>     "lname": string,
>     "email": string
>   },
>   {
>     ...
>   }
> }
> ```
>
> Gets all data on all users.

> `/createUser`
> - Request Type: POST
> - Request Parameters: None
> - Request Body:
> ```json
> {
>   "fname": string,
>   "lname": string,
>   "email": string
> }
> ```
> - Response Body: None
>
> Creates a new user.

> `/deleteUser`
> - Request Type: POST
> - Request Parameters: None
> - Request Body:
> ```json
> {
>   "id": number
> }
> ```
> - Response Body: String
>
> Deletes a new user using the id of the user. Returns the name of the user if
> the user exists, returns a 400 error if user does not exist.

> `/updateUser`
> - Request Type: PUT
> - Request Parameters:
> ```json
> {
>   {
>     "id": number,
>     "fname": string,
>     "lname": string,
>     "email": string
>   },
> }
> ```
> - Request Body: None
> - Response Body: String
>
> Updates a user using the id of the user. Returns the new name of the user if
> the user exists, returns a 400 error if user does not exist.