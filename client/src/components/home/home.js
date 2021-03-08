import React, { Component, useState } from 'react';

import TagsNavigation from './TagsNavigation';
import PhotographerList from './PhotographerList';

import './home.scss';


//Return header with list of tags with <HomeHeader>
//Return photographers list rather than json data with <main>
//Return tag by photographer <TagByPhotographerId>

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            photographers: [],
            photographersTags: [],
            selectedTag: ''
        }
        this.handleFilterByTag = this.handleFilterByTag.bind(this);
    }

    componentDidMount() {
        fetch('/api/photographers')
            .then(res => res.json())
            .then(photographers => 
                this.setState({ photographers }, () => console.log('Photographers fetched...', photographers)));

        fetch('/api/photographers/tags')
            .then(res => res.json())
            .then(photographersTags => 
                this.setState({ photographersTags }, () => console.log('Tags fetched...', photographersTags)));
    }


    handleFilterByTag(e) {
        e.preventDefault();
        this.setState({ selectedTag: e.target.textContent.slice(1).toLowerCase() });
        console.log('Your selected tag is: ', e.target.textContent);


        const photographersFiltered = photographers.filter(photographer => { 
            return photographer.tags.indexOf(this.state.selectedTag) > -1; 
        });
        this.setState({ photographers: photographersFiltered  }, () => console.log('Photographers filtered...', photographersTags)));
    }

    render() {
        const photographers = this.state.photographers;
        const photographersTags = this.state.photographersTags;

        return (
            <>
                <header className="container header" role="banner">
                    <a href={`${window.location.origin}/index.html`}>
                        <img src={`${window.location.origin}/img/logo.png`}  alt="Fisheye Home page" className="header__logo"/>
                    </a>
                    <TagsNavigation tags={photographersTags} handleFilterByTag={this.handleFilterByTag}></TagsNavigation>
                    <h1 className="header__title">Nos photographes</h1>
                </header>
                <PhotographerList photographers={photographersFiltered}></PhotographerList>
            </>
        );
    }
};

export default Home;
