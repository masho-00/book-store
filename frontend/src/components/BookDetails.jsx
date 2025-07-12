// frontend/src/components/BookDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
const API_BASE_URL = `https://solid-space-capybara-x54rr7jrgw9gh4jw-5555.app.github.dev`; // Use Codespace Backend URL dynamically
  useEffect(() => {

    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (!book) {
    return (
      <>
      <Loading />
      </>
    )
  }

  return (
    <div className='p-4 '>
       <Link to="/" className="inline-block ml-2 border-2 border-sky-400 hover:text-white hover:bg-sky-500 transition-colors p-2">Back to List</Link>
    <div className="container mx-auto py-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2">Author: {book.author}</p>
      <p className="text-gray-700 mb-4">{book.description}</p>
      <p className="text-lg font-semibold">Price: ${book.price}</p>
      <img src={book.imageUrl || "https://via.placeholder.com/300"} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <Link to={`/edit/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mr-2">
        Edit
      </Link>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block">
        Delete
      </button>
     
   </div>
   </div>
  );
};

export default BookDetails;