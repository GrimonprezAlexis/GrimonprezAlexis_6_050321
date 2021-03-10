import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import '../home/Home.scss'; 
import './PhotographerDetail.scss';


const PhotographerDetail = ({ match }) => {
    const [photographer, setPhotographer] = useState([]);
    const [medias, setMedias] = useState([]);


    //replace componentDidMonth
    useEffect(() => {
        fetchPhotographerById();
        fetchMediaByPhotographerId();
    }, []);

    //Get the photographer by ID from API
    const fetchPhotographerById = async () => {
        const response = await fetch(`api/photographers/${match.params.id}`);
        const data = await response.json();
        setPhotographer(data);
    };

    //Get the medias by ID from API
    const fetchMediaByPhotographerId = async () => {
        const response = await fetch(`api/photographers/${match.params.id}/medias`);
        const data = await response.json();
        setMedias(data);
    };



    return (
        <>
        <header className="container" role="banner" id="header__photographer">
            <Link to={`/`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="Fisheye Home page" className="header__logo"/>
            </Link>
        </header>

        <main>
        {photographer.map((p, index) => {
            return (
                <div className="main__photographer" key={`p-${index}`}>
                    <div className="">
                        <h1>{p.nom}</h1>
                        <p className="main__photographer__localisation">{p.ville}, {p.country || p.pays}</p>
                        <p className="main__photographer__tagline">{p.tagline}</p>
                        <ul className="main__photographer__tag">
                            {p.tags.map((tag, index) => {
                                return (
                                    <li key={index}><span aria-hidden="false">{`#${tag}`}</span></li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="main__photographer__button">
                        <button tabIndex="0">Contactez-moi</button>
                    </div>
                    <div className="photographer__img__link">
                        <img src={`${window.location.origin}/img/Photographers_ID_Photos/${p.portrait}`} alt={p.nom} />
                    </div>
                </div>
            )
        })}
        <div className="listbox__container">
            <label htmlFor="order" className="listbox__label">Trier par</label>
            <select name="order" id="order" className="listbox__select"
                tabIndex="0"  aria-activedescendant="order"
                aria-labelledby="Order by" aria-label="Order by">
                <option value="" disabled="disabled"></option>
                <option value="date">Date</option>
                <option value="" disabled="disabled" className="white">─────────</option>
                <option value="popularity">Popularité</option>
                <option value="" disabled="disabled" className="white">─────────</option>
                <option value="title">Titre</option>
                <option value="" disabled="disabled"></option>
            </select>
        </div>

        <section className="galerie">
        {medias.map((media, index) => {
            return (
                <>
                <div className="galerie__item" key={`galerie-${index}`}>
                    {media.image ? 
                        <img src={`${window.location.origin}/img/${media.photographerName}/${media.image}`}></img>
                        : <video controls>
                            <source src={`${window.location.origin}/img/${media.photographerName}/${media.video}`} type="video/mp4"></source>
                        </video>                    
                    }
                    <div className="galerie__detail">
                        <div className="galerie__detail-text">
                            <p className="galerie__detail__text">Arc-en-cie</p>
                            <div className="galerie__detail__price-like">
                                <p className="galerie__detail__price">{`${media.prix}`}</p>
                                <p className="galerie__detail__like">{`${media.aime}`}</p>
                                <img src={`${window.location.origin}/img/like.png`}></img>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
        })}
        </section>
        </main>


        </>
    );
}
export default PhotographerDetail;