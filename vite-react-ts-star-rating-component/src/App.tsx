import { useState } from 'react';
import './App.css'
import StarRating from './components/StarRating.tsx';
import ControlledComponent from './components/ControlledComponent.tsx';
import UnControlledComponent from './components/UnControlledComponent.tsx';

const initialArray = new Array(5).fill(false);

function App() {
  // TODO: this logic could be simpler and we can remove the use of the arrays
  // as we know all the rates are dependent on the current hovered/clicked element
  // which means that we just need to check if the rest of the elements are lower than the
  // current index and we can use a simple integer to track the hover and the clicked element
  const [starRatingValues, setStarRatingValues] = useState(initialArray)
  const [hoverStarValues, setHoverStarValues] = useState(initialArray);

  const formatNewValues = (existingValues: boolean[], index: number, value: boolean) => {
    const newValues = existingValues.concat([]);
    const howManyWereActive = newValues.filter((element) => element === true).length;

    if (howManyWereActive > index + 1) {
      newValues.fill(false, index + 1);
    } else {
      newValues.fill(!value, 0, index + 1);
    }

    return newValues;
  }

  const onSetStarRatingValues = (index: number, value: boolean) => {
    const newValues = formatNewValues(starRatingValues, index, value);
    setStarRatingValues(newValues);
  }

  const onSetHoverStar = (index: number, value: boolean) => {
    const newValues = formatNewValues(hoverStarValues, index, value);
    setHoverStarValues(newValues);
  }

  const onResetHoverValue = () => {
    setHoverStarValues(initialArray);
  }

  return (
    <>
      <h1>Star Rating Component</h1>
      {starRatingValues.map((starValue, index) =>
        <StarRating
          onMouseEnter={() => onSetHoverStar(index, starValue)}
          onMouseLeave={() => onResetHoverValue()}
          onClick={() => onSetStarRatingValues(index, starValue)}
          key={index}
          hoverValue={hoverStarValues[index]}
          starValue={starValue} />
      )}
      <ControlledComponent />
      <UnControlledComponent />
    </>
  )
}

export default App
