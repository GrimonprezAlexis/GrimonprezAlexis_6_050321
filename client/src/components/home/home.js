import React, { Component } from 'react';
import FisheyeDataFR from '../../data/FisheyeDataFR.json';
import './home.scss';

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

class Home extends Component {
    render() {
        return ( 
            <div>
                <header className="container header" role="banner">
                    <a href={`${window.location.origin}/index.html`}><img src={`${window.location.origin}/img/logo.png`} alt="Fisheye Home page" className="header__logo"/></a>
                    <nav role="navigation" aria-label="photographer categories">
                        <div className="header__navigation__list">
                            {listTags.map((tag,index) => {
                                return (
                                    <button className="button button-group" type="button" role="presentation" tabIndex="0" key={index}>
                                        <a href={`${window.location.origin}/index.html`} title={`Tag ${tag}`} aria-label={`Tag Photographer ${tag}`}>
                                        <span aria-hidden="false">{`#${tag}`}</span></a>
                                    </button>
                                )
                            })}
                        </div>
                    </nav>
                    <h1 className="header__title">Nos photographes</h1>
                </header>
                
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
                        <ul className="photographer__tag"></ul>
                    </div>    
                    )                 
                })} 
                </main>
            </div>
        )
    }
};

export default Home;
