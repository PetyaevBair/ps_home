import './App.css'
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Para from './components/Para/Para';
import Input from './components/Input/Input';
import NavBar from './components/NavBar/NavBar';

function App() {

  function buttonClick (e) {
    console.log(e.target.innerText);
  };

  return (
    <>
      <NavBar/>
      <div className='general-info'>
        <div className='general-part'>
          <Title text={'Поиск'}/>
          <Para text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} fontSize={20}/>
        </div>
        <Input text={'Введите название'} isShowLogo={true} imgSrc={'/search_icon.svg'}/>
        <Button text={'Искать'} onClick={buttonClick}/>
      </div>
    </>
  )
}

export default App
