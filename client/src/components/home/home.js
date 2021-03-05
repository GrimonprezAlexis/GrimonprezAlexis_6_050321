import React, { Component } from 'react';
import FisheyeDataFR from '../../data/FisheyeDataFR.json';

import HomeHeader from '../header/header';
import TagByPhotographerId from '../tag/tag';
import './home.scss';

//Return all tags rather than photographers for build navigation tags
function getTags(){
    let arrayOfTags = [];
    FisheyeDataFR.photographes.forEach(photographer => {
        photographer.tags.forEach(tag => {
            if(arrayOfTags.indexOf(tag) === -1) {
                arrayOfTags.push(tag);
            }
        });
    });
    return arrayOfTags;
}
let listTags = getTags();


//Return header with list of tags with <HomeHeader>
//Return photographers list rather than json data with <main>
//Return tag by photographer <TagByPhotographerId>
class Home extends Component {

    render() {
        return (
            <div>
                <HomeHeader tags={listTags}></HomeHeader>
                <main className="container__main">
                {FisheyeDataFR.photographes.map((photographer, index) => {
                    return (
                    <div className="photographer" id={`photographer-${photographer.id}`} key={index}>
                        <div className="photographer__img">
                            <a href="todo.html" className="photographer__img__link">
                                <img src={`${window.location.origin}/img/Photographers_ID_Photos/${photographer.portrait}`} alt={photographer.nom} />
                                <h2>{photographer.nom}</h2>
                            </a>
                        </div>
                        <div className="photographer__text">
                            <p className="photographer__text__localisation">{photographer.ville}, {photographer.country || photographer.pays}</p>
                            <p className="photographer__text__desc">{photographer.tagline}</p>
                            <p className="photographer__text__price">{`${photographer.prix} /jour`}</p>
                        </div>
                        <TagByPhotographerId photographer={photographer}></TagByPhotographerId>

                        </div>    
                    );               
                })} 
                </main>
            </div>
        );
    }
};

export default Home;
