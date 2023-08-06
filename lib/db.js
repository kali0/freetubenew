// lib/db.js

import { MongoClient } from 'mongodb'

const client = new MongoClient(/* uri */)
const db = client.db('my-app')

export async function saveHash(hash) {
  return db.collection('ipfs').insertOne({ hash })  
}

export async function getHashes() {
  return db.collection('ipfs').find().toArray() 
}