
| Question | Query |
|-|-|
| Create a database called 'my_first_db'. | use my_first_db |
| Create students collection. | db.my_first_db.createCollection("students") |
|Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}) | db.my_first_db.insert({name: Peter, home_state: California, lucky_number: 42, birthday: {month: 12, day: 17, year: 1991}}) |
|Create 5 students with the appropriate info. | |
|Get all students.| db.students.find() |
|Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).| db.students.find({'home_state': 'California'}) |
|Get all students whose lucky number is:| |
|greater than 3| db.students.find({'luck_number': {$gt: 3}})|
|less than or equal to 10| db.students.find({'luck_number': {$lte: 10}})|
|between 1 and 9 (inclusive)| db.students.find({'luck_number': {$gte: 1, $lte: 9}}) |
|Add a field to each student collection called 'interests' that is an ARRAY. | | It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.| |
|Add some unique interests for each particular student into each of their interest arrays.| |
|Add the interest 'taxes' into someone's interest array.| |
|Remove the 'taxes' interest you just added.| |
|Remove all students who are from California.| |
|Remove a student by name. | |
|Remove a student whose lucky number is greater than 5 (JUST ONE)| |
|Add a field to each student collection called 'number_of_belts' and set it to 0.| |
|Increment this field by 1 for all students in Washington (Seattle Dojo).| |
|Rename the 'number_of_belts' field to 'belts_earned'| |
|Remove the 'lucky_number' field.| |
|Add a 'updated_on' field, and set the value as the current date.| |