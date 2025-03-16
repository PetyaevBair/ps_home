import './NavBar.css';

export default function NavBar() {

  return (
    <nav className='navbar-style'>
        <img className='nav-logo' src='/note.svg'/>
        <div className='item-list-style'>
          <div className='item-container'>
            <a className='item-link-style'>Поиск фильмов</a>
          </div>
          <div className='item-container'>
            <a className='item-link-style'>Мои фильмы</a>
            <img src="./my_movies.svg"/>
          </div>
          <div className='item-container'>
            <a className='item-link-style'>Войти</a>
            <img src="./logout.svg"/>
          </div>
        </div>
    </nav>
  )
};
