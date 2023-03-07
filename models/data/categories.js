import "dotenv/config.js";
import "../../config/database.js";
import Category from '../../models/Category.js'
const uri = process.env.MONGO_LINK;
const categories = [
    {
        name: "shonen",
        detail:
            "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "64028f739b42a35ac6976cac",
    },
    {
        name: "manhwa",
        detail:
            "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "64028f739b42a35ac6976cac",
    },
    {
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "64028f739b42a35ac6976cac",
    },
    {
        name: "dc",
        detail: "American superhero comics",
        admin_id: "64028f739b42a35ac6976cac",
    },
    {
        name: "shojo",
        detail:
            "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: "64028f739b42a35ac6976cac",
    },
    {
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: "64028f739b42a35ac6976cac",
    },
];

Category.insertMany(categories);