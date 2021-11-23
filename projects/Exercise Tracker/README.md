I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.
I can get an JSON of all users by getting api/exercise/users with the same info as when creating a user.
I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will be the user object also with the exercise fields added.
I can retrieve a JSON with the full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).
I can retrieve a JSON with part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)
To search for the log of exercises from a certain userId type the URL address would look like this http://localhost:3000/api/exercise/log?userId=217333
I can retrieve a log with the user id from begining to ending date and will show complete log of those dates for that user with all exercises.
Example http://localhost:3000/api/exercise/otherlog?userId=6009a7cc3bdc24966c79020d&from=2021-01-01T00:00:00.000Z&to=2021-01-03T00:00:00.000Z
I had assistance from Developer James with this application and had help clearing out and restarting my database from Mr.Valdez.