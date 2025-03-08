import './NavBar.css';

export default function NavBar() {

  return (
    <nav className='navbar-style'>
        <img src='/note.svg'/>
        <div className='item-list-style'>
            <a className='item-link-style'>Поиск фильмов</a>
            <a className='item-link-style'>Мои фильмы</a>
            <a className='item-link-style'>Войти</a>
        </div>
    </nav>
  )
};
