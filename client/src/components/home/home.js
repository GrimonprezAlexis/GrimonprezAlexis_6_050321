import React, { useState, useEffect } from "react";
import TagsNavigation from './TagsNavigation';
import PhotographerList from './PhotographerList';
import './home.scss';

export default function Home() {

  const [photographers, setPhotographers] = useState([]);
  const [photographersTags, setPhotographersTags] = useState([]);

    useEffect(() => {
        fetchPhotographers();
        fetchPhotographersTags();
    }, []);

    const fetchPhotographers = async () => {
        const response = await fetch('api/photographers');
        const data = await response.json();
        setPhotographers(data);
    }

    const fetchPhotographersTags = async () => {
        const response = await fetch('api/photographers/tags');
        const data = await response.json();
       setPhotographersTags(data);
    }

    const handleFilterByTag = (e) => {
        e.preventDefault();
        const selectedTag = e.target.textContent.slice(1).toLowerCase();
        console.log('Your selected tag is: ', e.target.textContent);

        const photographersFiltered = photographers.filter(photographer => { 
            return photographer.tags.indexOf(selectedTag) > -1; 
        });
        setPhotographers(photographersFiltered);
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
                    photographers.map(( p, index ) => (
                        <PhotographerList  photographer={p} key={index}/> 
                    ))
                }
            </main>
        </>
    )
}