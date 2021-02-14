import React from 'react';
import { Link } from 'react-router-dom';

function CardItem ( { src, text, label, path } )
{
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt={text} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {text}
                        </h5>
                    </div>
                </Link>
                <span class="loading">Loading...</span>

            </li>
        </>
    )
}

export default CardItem;
