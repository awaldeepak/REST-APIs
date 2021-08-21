import mongoose from 'mongoose';
import { DB_URL } from './index';


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'conncetion error'));
db.once('open', () => {
    console.log('DB Connected');
});


export default db;