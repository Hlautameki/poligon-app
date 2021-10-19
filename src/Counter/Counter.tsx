import { Text } from 'Text/Text'
import { useState, useEffect } from 'react';

function Counter() {
  const [value, setValue] = useState<number>(3);

  useEffect(() => {
    const clock = setInterval(() => {
      setValue(value => value + 1);
    }, 1_000);

    return () => {
      // after unmounting
      clearInterval(clock);
    }
    
  }, []); // [] - array of dependencies

  // const handlerClick = () => {
  //     // value++;
  //     // console.log(value);
  //     setValue(6);
  // }
   /*{<button onClick={handlerClick}>Click me</button> }*/
  return <div>
     
  <Text>{value}</Text>
  </div>
}

export { Counter };