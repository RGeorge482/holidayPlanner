import { MongoClient } from "mongodb";

// /api/new-locaion
// POST /api/new-location

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

  const client = await MongoClient.connect(
      "mongodb+srv://geo:geomongo351@cluster0.gzpjq.mongodb.net/locations?retryWrites=true&w=majority"
    );

    const db = client.db();

    const locationsCollection = db.collection("locations");

    const result = await locationsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Location inserted!" });
  }
}

export default handler;
