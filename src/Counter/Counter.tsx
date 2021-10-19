import { Text } from 'Text/Text'
import { useState } from 'react';

function Counter() {
    const [value, setValue] = useState<number>(3);
    const handlerClick = () => {
        // value++;
        // console.log(value);
        setValue(6);
    }
    
    return <div>
        {<button onClick={handlerClick}>Click me</button> }
    <Text>{value}</Text>
    </div>
}

export { Counter };