# MongoDB

```bash
brew install Mongodb
cd /
sudo mkdir data
cd data
sudo mkdir db
mongod
```

## MySQL Database Schema == MongoDB Database (db)

| Command | Outcome | Example | 
|---|---|---|
|show dbs | Show all databases available on our current MongoDB server|
| db | Show current database selected |
| use DB_NAME | Change to another database | use message_board_db |
| db.dropDatabase() | Delete database | use message_board_db db.dropDatabase() |

## SQL: Tables == MongoDB: Collections

| Command | Output | Example | 
|-|-|-|
| show collections | View all collections in a MongoDB |
| db.createCollection("COLLECTION_NAME") | Create a new collection in the current database | db.createCollection("ninjas") |
| db.COLLECTION_NAME.drop() | Destroy a collection  | db.ninjas.drop() |

## SQL: Row / Record == MongoDB: Document (JSON object)

Thats it also,
really it's BSON (Binary JSON)

## CRUD

| | Pattern| Example| |
|-|-|-|-|
| CREATE | db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})  | db.ninjas.insert({name: "Trey", belt: "black", status: "awesome"}) | |
| READ | db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT}) | db.ninjas.find({name: "Trey"}).pretty() | |
| UPDATE | db.COLLECTION_NAME.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})   | db.ninjas.update({name: "Trey"}, {location: "Mountain View"}) | |
| DESTROY | db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN) | db.ninjas.remove({belt: "yellow"}) | |

## Operators 
| name |	description |
|-|-|
$gt (greater than)	|Use to query selectively on numerical-valued fields
$gte |(greater than or equal to)	Use to query selectively on numerical-valued fields
$lt |(less than)	Use to query selectively on numerical-valued fields
$lte |(less than or equal to)	Use to query selectively on numerical-valued fields
$in |(in array)	Use to find documents who have a particular value within an array.

[Mongo Doc](https://docs.mongodb.com/manual/reference/operator/)

| Operator | Effect |
|-|-|
$push	|Push to an array contained within a document.
$pop	|Removes either the first or last element from an array. EX: db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}}) Use 1 for the last item in the array, -1 for the first item.
$addToSet	|It functions just like $push.  However, $addToSet |only adds to the specified array if the value doesn't already exist (thereby preventing duplicate entries).
$pull	|Removes a specified value from an array, unlike $pop, which removes by location. Ex: db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}}) This will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.