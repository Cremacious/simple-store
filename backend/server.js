import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

const app = express();
app.use(express.json());


app.use('/api/products', productRoutes);

app.listen(process.env.PORT , () => {
  connectDB();
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
