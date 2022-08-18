import { useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const reviews = useOutletContext();
  const reviewList = reviews[1].results;
  console.log(reviewList);

  return (
    <div>
      <h1>Reviews:</h1>;
      <ul>
        {reviewList.map(review => (
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
