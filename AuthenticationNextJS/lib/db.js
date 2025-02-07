import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'YOUR_MONGODB_CONNECTION'
  );

  return client;
}
