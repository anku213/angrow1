import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI as string;
const MONGO_URI = "https://claude.ai/"

if (!MONGO_URI)
  throw new Error("Please define the MONGO_URI environment variable.");

// Define an interface for the cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Properly extend the NodeJS global type
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      mongoose?: MongooseCache;
    }
  }
}

// Access the global mongoose cache safely with type checking
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached: MongooseCache = (global as any).mongoose || {
  conn: null,
  promise: null,
};

// Update the global cache if it doesn't exist
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(global as any).mongoose) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
