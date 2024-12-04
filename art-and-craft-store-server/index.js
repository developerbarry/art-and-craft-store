const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USRE}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }

            if (req.query?.sub_category) {
                query.sub_category = req.query.sub_category;
            }

            const cursor = allArtAndCraft.find(query);
            const result = await cursor.toArray();
            res.send(result)

        })

        app.get('/all-art-and-craft-items/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await allArtAndCraft.findOne(query);
            res.send(result)
        })


        app.post('/all-art-and-craft-items', async (req, res) => {
            const item = req.body;
            const result = await allArtAndCraft.insertOne(item);
            res.send(result)
        })

        app.put('/all-art-and-craft-items/:id', async (req, res) => {
            const id = req.params.id;
            const item = req.body;
            console.log(id, item)
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    image: item?.image,
                    item_name: item?.item_name,
                    subcategory_Name: item?.subcategory_Name,
                    short_description: item?.short_description,
                    price: item?.price,
                    rating: item?.rating,
                    customization: item?.customization,
                    processing_time: item?.processing_time,
                    stockStatus: item?.stockStatus
                }
            }

            const result = await allArtAndCraft.updateOne(filter, updateDoc, options);
            res.send(result)
        })


        app.delete('/all-art-and-craft-items/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await allArtAndCraft.deleteOne(query);
            res.send(result)
        })



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
