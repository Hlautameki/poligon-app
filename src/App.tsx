import { Button, BGColors } from './Button/Button';
import { Text } from './Text/Text';

function App() {
  return (
    <div className="App">
      <Button label='Hello!!!' bgColor={BGColors.alizarin}/>
      <Button label='Hello!!!' bgColor={BGColors.emerald}/>
      <Button label='Hello!!!' bgColor={BGColors.concrete}/>
      <Text>Dzisiaj jest wtorek</Text>
    </div>
  );
}

export default App;
