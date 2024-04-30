# React TypeScript Star rating component
## Running the app
```
npm install
npm run dev
```

![image](rating-react-component.jpg)

# Lessons learned here about the logic

## Using for loop
This was my original approach for the star rating component
```javascript
const initialArray = new Array(5).fill(false);

function App() {
  const [starRatingValues, setStarRatingValues] = useState(initialArray)

  const onSetStarRatingValues = (index: number, value: boolean) => {
    const newValues = starRatingValues.concat([]);
    const howManyWereActive = newValues.filter((element) => element === true).length;

    if (howManyWereActive > index + 1) {
      for (let i = index + 1; i <= newValues.length - 1; i++) {
        newValues[i] = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        newValues[i] = !value;
      }
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
```

## And more specifically
```javascript
    if (howManyWereActive > index + 1) {
      for (let i = index + 1; i <= newValues.length - 1; i++) {
        newValues[i] = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        newValues[i] = !value;
      }
    }
```


## Using modern JS 
### Using Array.fill
```javascript
    if (howManyWereActive > index + 1) {
      newValues.fill(false, index + 1);
    } else {
      newValues.fill(!value, 0, index + 1);
    }
```

Here is the documentation about using fill
```javascript
fill(value)
fill(value, start)
fill(value, start, end)
```

### Using map
Here we are basically assigning the result of the new map into the variable so we can override it completely and in the case that some values are not matching then we are returning the current value so we don't affect them
```js
    if (howManyWereActive > index + 1) {
      newValues = newValues.map((element, idx) => {
        return idx > index ? false : element;
      })
    } else {
      newValues = newValues.map((element, idx) => {
        return idx < index + 1 ? !value : element;
      })
    }
```
