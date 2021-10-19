import { Button, BGColors } from './Components/Button/Button';
import { Text } from './Components/Text/Text';
import { Counter } from './Components/Counter/Counter';

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
