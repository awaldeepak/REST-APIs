import express from 'express';
import { APP_PORT } from './config';
import errorHandler from './middlewares/errorHandler';
const app = express();
import routes from './routes';
import db from './config/mongoose';


app.use(express.json());
app.use('/api', routes);



app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});