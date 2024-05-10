import './App.css'
import { AnotherButton } from './components/AnotherButton.tsx';

const variants: Array<'primary' | 'secondary'> = [
  'primary',
  'secondary',
  'primary',
  'secondary',
  'secondary'
];

function App() {

  return (
    <>
      <div>
        <h1 className=" bg-green">Using Class Variance Authority (CVA)</h1>
      </div>
      <div className="flex">
        {variants.map((variantName, index) => (
          <div key={variantName + index} className="pr-4">
            <AnotherButton variant={variantName}>
              {variantName}
            </AnotherButton>
          </div>

        ))
        }
      </div >
    </>
  )
}

export default App
