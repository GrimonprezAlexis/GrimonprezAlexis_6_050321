import React, { useState, useEffect } from "react";
import _ from 'lodash';

import './Galerie.scss';

const Galerie = ({ photographerId, photographerPrice }) => {    
    const [medias, setMedias] = useState([]);
    
    //replace componentDidMonth
    useEffect(() => {
        fetchMediaByPhotographerId();
    }, []);
    
    //Get the medias by ID from API
    const fetchMediaByPhotographerId = async () => {
        const response = await fetch(`api/photographers/${photographerId}/medias`);
        const data = await response.json();
        setMedias(_.orderBy(data, 'date'));
    };
    
    const handleLike = (id) => {
        const newMedias = [...medias];

        const mediasUntouched = newMedias.filter(m => m.id !== id);
        const mediaToUpdate = _.find(newMedias, {id});
        mediaToUpdate.like++;

        mediasUntouched.push(mediaToUpdate);
        const sortedMedia = _.orderBy(mediasUntouched, 'date');

        //const sortedMedia = [mediasUntouched, mediaUpdated].sort(m => m.id);
        setMedias(sortedMedia);
    };

    let totalLikes = _.sumBy(medias, 'like');

    return (
        <>
        <section className="galerie">
            <div className="galerie__totalLikes">
                <div>
                    <p class="galerie__totalLikes__number">{totalLikes}</p>
                    <button class="galerie__detail__addLike"><img src="http://localhost:3000/img/like_black.png" alt="like" /></button>
                </div>
                <div>
                    <p>{photographerPrice} € /jour</p>
                </div>
            </div>

            {medias.map((media, index) => {
                return (
                    <>
                    <div className={`galerie__item`} key={`galerie-${index}`}>
                        {media.image 
                            ? 
                            <img src={`${window.location.origin}/img/${media.photographerName}/${media.image}`} 
                            alt={`${media.titre}`} className="galerie__item__image"></img>
                            : 
                            <video controls className="galerie__item__video">
                                <source src={`${window.location.origin}/img/${media.photographerName}/${media.video}`} type="video/mp4"></source>
                            </video>                    
                        }
                        <div className="galerie__detail">
                            <div className="galerie__detail-text">
                                <p className="galerie__detail__text">{`${media.titre}`}</p>
                                <div className="galerie__detail__price-like">
                                    <p className="galerie__detail__price">{`${media.prix}`}€</p>
                                    <p className="galerie__detail__like">{`${media.like}`}</p>
                                    <button className="galerie__detail__addLike" onClick={() => handleLike(media.id)}>
                                        <img src={`${window.location.origin}/img/like.png`} alt="like" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </section>
        </>
    );
}
export default Galerie;