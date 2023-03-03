import "dotenv/config.js";
import { MongoClient } from "mongodb";
import "../../config/database.js";

const uri = process.env.MONGO_LINK;

const categories = [
    {
        name: "shonen",
        detail:
            "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "63f66f8daea87ce097984ac9",
    },
    {
        name: "manhwa",
        detail:
            "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "63f66f8daea87ce097984ac9",
    },
    {
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "63f66f8daea87ce097984ac9",
    },
    {
        name: "dc",
        detail: "American superhero comics",
        admin_id: "",
    },
    {
        name: "shojo",
        detail:
            "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: "",
    },
    {
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: "",
    },
];

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async () => {
    try {
        await client.connect();
        console.log("Conectado correctamente a la base de datos");

        const database = client.db();
        const collection = database.collection("categories");

        const result = await collection.insertMany(categories)
        console.log( 'result.insertedCount'  + 'documentos insertados en la colección') 
    }catch (err) {

        console.log(err.stack);
    } finally {
        await client.close();
        console.log("Desconectado de la base de datos");
    }
})();
