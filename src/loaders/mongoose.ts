import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '@/config';

export default async (): Promise<Db> => {
  console.log(JSON.stringify(config));

  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  return connection.connection.db;
};
