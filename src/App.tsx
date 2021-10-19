import { Button, BGColors } from './Button/Button';
import { Text } from './Text/Text';
import { Counter } from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <Button label='Hello!!!' bgColor={BGColors.alizarin}/>
      <Button label='Hello!!!' bgColor={BGColors.emerald}/>
      <Button label='Hello!!!' bgColor={BGColors.concrete}/>
      <Counter></Counter>
    </div>
  );
}

export default App;
