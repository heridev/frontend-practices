import { useState } from 'react';
import './App.css'
import StarRating from './components/StarRating.tsx';

const initialArray = new Array(5).fill(false);

function App() {
  const [starRatingValues, setStarRatingValues] = useState(initialArray)

  const onSetStarRatingValues = (index: number, value: boolean) => {
    const newValues = starRatingValues.concat([]);
    const howManyWereActive = newValues.filter((element) => element === true).length;

    if (howManyWereActive > index + 1) {
      newValues.fill(false, index + 1);
    } else {
      newValues.fill(!value, 0, index + 1);
    }

    setStarRatingValues(newValues)
  }

  return (
    <>
      <h1>Star Rating Component</h1>
      {starRatingValues.map((starValue, index) =>
        <StarRating onClick={() => onSetStarRatingValues(index, starValue)} key={index} starValue={starValue} />
      )}
    </>
  )
}

export default App
