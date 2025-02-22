import './App.css'
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Para from './components/Para/Para';

function App() {

  return (
    <>
      <Title text={'Поиск'}/>
      <Para text={'Параграф'}/>
      <Para text={'Параграф'} fontSize={20}/>
      <Button text={'Найти'}/>
    </>
  )
}

export default App
