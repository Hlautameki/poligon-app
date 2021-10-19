import { Text } from 'Text/Text'


function Counter() {
    let value = 1;
    const handlerClick = () => {
        value++;
        console.log(value);
    }
    
    return <div>
        <button onClick={handlerClick}>Click me</button>
    <Text>{value}</Text>
    </div>
}

export { Counter };