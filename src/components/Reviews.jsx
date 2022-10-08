import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NotFound from './NotFound';

const Reviews = () => {
  const id = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async id => {
      try {
        const review = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=335e18ee033f463b61f137f6ef07bd65&language=en-US&page=1`
        );
        setReviews(review.data.results);
      } catch {
        console.log('error');
      } finally {
        console.log('success');
      }
    };
    getReviews(id);
  }, [id]);

  if (reviews.length === 0) {
    return <NotFound />;
  }
  return (
    <div>
      <h1>Reviews:</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.author}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
