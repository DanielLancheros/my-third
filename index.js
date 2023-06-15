import { MongoClient, ObjectId } from "mongodb";
import { mongoURI } from "./secrets.js";
const dbName = "c11-practice";
const collectionName = "my-third";

// Connect to Mongo Cluster
const mongoConnect = new MongoClient(mongoURI);
await mongoConnect.connect();
const db = mongoConnect.db(dbName);

// CRUD : READ
async function readAll() {
    const readAll = await db.collection(collectionName)
        .find( {} )
        .limit (10)
        .toArray();

    return readAll;
}



// CRUD: DELETE
async function deleteOne(id) {
    const deleteOne = await db.collection(collectionName)
        .deleteOne( { _id: new ObjectId(id) });

    return deleteOne;
}

//CRUD: INSERT
async function insertOne(document) {
    const insertOne = await db.collection(collectionName)
        .insertOne(document);

    return insertOne;
}

//CRUD: UPDATE
async function updateOne(id, document) {
    const updateOne = await db.collection(collectionName)
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: document }
        );

    return updateOne;
}

//const result = await readAll();
const result = await deleteOne("648b7be0b639db4d37dcd63b");

/*const datadocument = {
    id: 6,
    name: "new document11",
    age: 200,
    isAlive: true,
    };
    */

//const result = await insertOne(datadocument);

const datadocument = {
    name: "blue onion"
};

//const result = await updateOne("648b7c4c328e598d3d4a8ea7", datadocument);

console.log(result);

mongoConnect.close();