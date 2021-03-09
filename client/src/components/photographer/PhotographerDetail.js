import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import '../home/Home.scss'; 
import './PhotographerDetail.scss';


const PhotographerDetail = ({ match }) => {
    const [photographer, setPhotographer] = useState([]);

    //replace componentDidMonth
    useEffect(() => {
        fetchPhotographer();
    }, []);

    //Get the photographer by ID from API
    const fetchPhotographer = async () => {
        const response = await fetch(`api/photographers/${match.params.id}`);
        const data = await response.json();
        setPhotographer(data);
    };

    return (
        <>
        <header className="container" role="banner" id="header__photographer">
            <Link to={`/`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="Fisheye Home page" className="header__logo"/>
            </Link>
        </header>

        {photographer.map((photographer, index) => {
            return (
                <div className="main__photographer" key={`p-${index}`}>
                    <div className="">
                        <h1>{photographer.nom}</h1>
                        <p className="main__photographer__localisation">{photographer.ville}, {photographer.country || photographer.pays}</p>
                        <p className="main__photographer__tagline">{photographer.tagline}</p>
                        <ul className="main__photographer__tag">
                            {photographer.tags.map((tag, index) => {
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
                        <img src={`${window.location.origin}/img/Photographers_ID_Photos/${photographer.portrait}`} alt={photographer.nom} />
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
        </>
    );
}
export default PhotographerDetail;