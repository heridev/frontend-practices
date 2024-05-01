import { useRef, useState } from 'react';

function UnControlledComponent() {
  const ref = useRef(null);
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ref.current?.value);
    event.preventDefault();
  }

  return (
    <div>
      <h3> Uncontrolled component</h3>
      <p>Input value: {value}</p>
      <input placeholder="uncontrolled component"
        type="text" ref={ref} onChange={onChange} />
    </div>
  )
}

export default UnControlledComponent;
