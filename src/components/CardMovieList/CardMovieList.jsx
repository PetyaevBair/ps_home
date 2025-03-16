import './CardMovieList.css'
import CardMovie from '../CardMovie/CardMovie';

export default function CardMovieList({movies}) {

    if (movies.lenght === 0) {
        <p>Список фильмов пуст</p>;
    };

    return (
        <div className='card-movie-list'>
            {
                movies.map(movie => (
                    <CardMovie name={movie.name} src={movie.src}/>
                ))
            }
        </div>
    );
}