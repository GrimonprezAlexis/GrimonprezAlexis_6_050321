import React, { useState, useEffect } from "react";
import TagsNavigation from './TagsNavigation';
import PhotographerList from './PhotographerList';
import './home.scss';

export default function Home() {

  const [photographers, setPhotographers] = useState([]);
  const [photographersTags, setPhotographersTags] = useState([]);
  const [photographersFiltered, setSearchPhotographers] = useState([]);


    useEffect(() => {
        fetchPhotographers();
        fetchPhotographersTags();
    }, []);

    //Get the photographers from API
    const fetchPhotographers = async () => {
        const response = await fetch('api/photographers');
        const data = await response.json();
        setPhotographers(data);
        setSearchPhotographers(data);
    }

    //Get all tags rather than list photographers
    const fetchPhotographersTags = async () => {
        const response = await fetch('api/photographers/tags');
        const data = await response.json();
       setPhotographersTags(data);
    }

    //Filter photographer by selectedTag
    const handleFilterByTag = (e) => {
        e.preventDefault();
        const selectedTag = e.target.textContent.slice(1).toLowerCase();
        const wantedPhotographers = photographers.filter(photographer => { 
            return photographer.tags.indexOf(selectedTag) > -1; 
        });
        setSearchPhotographers(wantedPhotographers);
    }


    return (
        <>
            <header className="container header" role="banner">
                <a href={`${window.location.origin}/index.html`}>
                    <img src={`${window.location.origin}/img/logo.png`}  alt="Fisheye Home page" className="header__logo"/>
                </a>
                <TagsNavigation tags={photographersTags} handleFilterByTag={handleFilterByTag} />
                <h1 className="header__title">Nos photographes</h1>
            </header>
            <main className="container__main">
                {
                    photographersFiltered.map(( p, index ) => (
                        <PhotographerList  photographer={p} key={index}/> 
                    ))
                }
            </main>
        </>
    )
}