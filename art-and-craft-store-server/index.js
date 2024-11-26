const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("CarftAndArtDB");
        const allArtAndCraft = database.collection("artAndCraft")
        const sixCraftItems = database.collection("mainSixCategories");


        app.get('/six-craft-items', async (req, res) => {
            const query = sixCraftItems.find();
            const result = await query.toArray();
            res.send(result)
        })

        app.get('/all-art-and-craft-items', async (req, res) => {
            const query = allArtAndCraft.find();
            const result = await query.toArray();
            res.send(result)
        })


        // mainSixCategories

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', async (req, res) => {
    res.send("Carft and Art DB")
})

app.listen(port, () => {
    console.log(`Open this Port by ${port}`)
})
