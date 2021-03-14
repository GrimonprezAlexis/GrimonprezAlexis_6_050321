import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import '../home/Home.scss'; 
import './PhotographerDetail.scss';

import Galerie from './Galerie';

const PhotographerDetail = ({ match }) => {
    const [photographer, setPhotographer] = useState({});
    const [tags, setTags] = useState([]);

    //replace componentDidMonth
    useEffect(() => {
        fetchPhotographerById();
    }, []);

    //Get the photographer by ID from API
    const fetchPhotographerById = async () => {
        const response = await fetch(`api/photographers/${match.params.id}`);
        const data = await response.json();
        setPhotographer(data);
        setTags(data.tags);
    };

    return (
        <>
        <header className="container" role="banner" id="header__photographer">
            <Link to={`/`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="Fisheye Home page" className="header__logo"/>
            </Link>
        </header>
        <main>
            <div className="main__photographer">
                <div className="">
                    <h1>{photographer.nom}</h1>
                    <p className="main__photographer__localisation">{photographer.ville}, {photographer.country || photographer.pays}</p>
                    <p className="main__photographer__tagline">{photographer.tagline}</p>
                    <ul className="main__photographer__tag">
                        {tags.map((tag, index) => {
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
            <Galerie photographerId={match.params.id} photographerPrice={photographer.prix}/>
        </main>
        </>
    );
}
export default PhotographerDetail;