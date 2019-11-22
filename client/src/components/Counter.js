import React, { useState } from 'react';
import { Button } from 'reactstrap';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return(
    <span style={{ marginLeft: 220 }}>
      <span style={{ marginRight: 10 }}>{counter}</span>
      <Button color="warning" onClick={increment}>Increment</Button>
    </span>
  )
}

export default Counter;