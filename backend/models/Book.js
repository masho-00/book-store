
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
