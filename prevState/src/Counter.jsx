import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    first: 'Asijit',
    last: '',
  });
  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const subtract = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const updateArray = (newVal) => {
    // setValues({ ...values, last: 'Manna' });
    setValues((prev) => ({ ...prev, last: 'Manna' }));
    console.log(values);
  };

  return (
    <section>
      <h1>{count}</h1>
      <div className="row">
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </div>
      <div className="row">
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={updateArray}>hoho</button>
      </div>
    </section>
  );
}

export default Counter;
