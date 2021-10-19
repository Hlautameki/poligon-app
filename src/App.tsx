import { Button, BGColors } from './Button/Button';

function App() {
  return (
    <div className="App">
      <Button label='Hello!!!' bgColor={BGColors.alizarin}/>
      <Button label='Hello!!!' bgColor={BGColors.emerald}/>
      <Button label='Hello!!!' bgColor={BGColors.concrete}/>
    </div>
  );
}

export default App;
