import './CardMovie.css'

export default function CardMovie({name, src}) {
    return (
        <div className='card-movie'>
            <img className="card-image" src={src} alt="Постер фильма"/>
            <div className='card-info'>
                <p className='movie-name'>
                    {name}
                </p>
                <div className='fav-add'>
                    <img className="card-image-fav" src="/like.svg" alt="Лайк"/>
                    <p className='fav-text'>В избранное</p>
                </div>
            </div>
        </div>
    );
}