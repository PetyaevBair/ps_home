import './App.css'
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Para from './components/Para/Para';
import Input from './components/Input/Input';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import CardMovieList from './components/CardMovieList/CardMovieList';

const INITIAL_DATA = {
  movies: [
    {
      id: 1,
      name: 'Black Widow',
      src: 'black-widow.svg'
    },
    {
      id: 2,
      name: 'Shang Chi',
      src: 'shang-chi.svg'
    },
    {
      id: 3,
      name: 'Loki',
      src: 'loki.svg'
    },
    {
      id: 4,
      name: 'How I Met Your Mother',
      src: 'how-i-met-mother.svg'
    },
    {
      id: 5,
      name: 'Money Heist',
      src: 'money-heist.svg'
    },
    {
      id: 6,
      name: 'Friends',
      src: 'friends.svg'
    },
    {
      id: 7,
      name: 'The Big Bang Theory',
      src: 'big-bang-theory.svg'
    },
    {
      id: 8,
      name: 'Two And a Half Men',
      src: 'two-half-man.svg'
    }
  ]
};

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
          <Para text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} fontSize={'20'}/>
        </div>
        <div className='search-panel'>
          <Input text={'Введите название'} isShowLogo={true} imgSrc={'/search_icon.svg'}/>
          <Button text={'Искать'} onClick={buttonClick}/>
        </div>
        <CardMovieList movies={INITIAL_DATA.movies}/>
      </div>
    </>
  )
}

export default App
