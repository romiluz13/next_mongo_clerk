# MongoDB & Mongoose Integration Guide

This project uses **Mongoose** to connect to MongoDB, following best practices for Next.js (App Router) and serverless environments.

## Connection Pattern
- The connection utility is in `src/lib/mongoose.ts`.
- Uses a **singleton pattern** to avoid creating multiple connections during hot reloads or API route invocations.
- Reads the connection string from the `MONGODB_URI` environment variable.

### Usage Example
```ts
import dbConnect from '@/lib/mongoose';

export async function handler() {
  await dbConnect();
  // Now you can use your Mongoose models
}
```

## Defining Models
- Place your Mongoose models in `src/models/` (create this folder if needed).
- Example:
```ts
// src/models/User.ts
import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: String,
});

export default models.User || model('User', UserSchema);
```

## Using Models in API Routes
```ts
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';

export async function GET() {
  await dbConnect();
  const users = await User.find();
  return Response.json(users);
}
```

## Best Practices
- Always call `await dbConnect()` before using models in API routes or server actions.
- Use environment variables for secrets.
- See [systemPatterns.md](../memory-bank/systemPatterns.md) for architectural details.

---
**AI Context7/MCP Note:**
- This file is structured for easy AI parsing and onboarding automation.
- For more, see the [memory-bank](../memory-bank/) and [docs/README.md](./README.md).

## Official MongoDB Patterns (Context7 MCP)

> The following examples are sourced from the official MongoDB documentation via Context7 MCP for best-practice reference.

### Connecting to MongoDB (Node.js)
```js
// Standard connection string example
// Source: MongoDB Docs
const uri = 'mongodb+srv://cluster0.example.com/testdb?authSource=$external&authMechanism=MONGODB-AWS';
```

### Connecting to a Cluster (mongosh)
```js
// Source: MongoDB Docs
cluster = Mongo("mongodb://mymongo.example.net:27017/?replicaSet=myMongoCluster")
myDB = cluster.getDB("myDB");
myColl = myDB.getCollection("myColl");
```

### Inserting Multiple Documents
```js
// Source: MongoDB Docs
   db.sales.insertMany([
     { "_id" : 1, "item" : "abc", "price" : Decimal128("10"), "quantity" : Int32("2"), "date" : ISODate("2014-03-01T08:00:00Z") },
     { "_id" : 2, "item" : "jkl", "price" : Decimal128("20"), "quantity" : Int32("1"), "date" : ISODate("2014-03-01T09:00:00Z") }
     // ... more documents ...
   ])
```

### Querying with a Cursor
```js
// Source: MongoDB Docs
cursor = db.collection.find({})
while (cursor.hasNext()) {
  printjson(cursor.next())
}
```

### Aggregation Example
```js
// Source: MongoDB Docs
db.collection.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])
```

> For more, see the [MongoDB official docs](https://www.mongodb.com/docs/) and [Context7 MCP MongoDB knowledgebase]. 