import { MongoClient } from 'mongodb';

declare global {
    var _mongo: Promise<MongoClient>;
}

const url =
    'mongodb+srv://noonoo:wkwk12@forum.cj1jwy6.mongodb.net/forum?retryWrites=true&w=majority';

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url).connect();
}

export { connectDB };
