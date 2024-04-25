const express = require('express');
const cors= require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app =express();
const port =process.env.PORT ||5000;
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Simple CRUD is Running")
})
// sifatict26
//lTaZ75BrfXUeZhM9


const uri = "mongodb+srv://sifatict26:lTaZ75BrfXUeZhM9@cluster0.qvotocy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    app.post('/users',async(req,res)=>{
      const user=req.body;
      console.log("New User",user);
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

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})