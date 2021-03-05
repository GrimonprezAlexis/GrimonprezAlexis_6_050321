import React, { Component } from 'react';

//Return header with list of tags
class HomeHeader extends Component {
    constructor(props){
        super(props)
        this.handleFilterByTag = this.handleFilterByTag.bind(this)
    }

    handleFilterByTag(event) {
        event.preventDefault();
        console.log(event.target.textContent);
        console.log('clicked', this.props);
    }

    render(){
        //const {tag} = this.props;
        return (
            <header className="container header" role="banner">
                <a href={`${window.location.origin}/index.html`}>
                    <img 
                        src={`${window.location.origin}/img/logo.png`} 
                        alt="Fisheye Home page" 
                        className="header__logo"/>
                </a>
                <nav role="navigation" aria-label="photographer categories">
                    <div className="header__navigation__list">
                        {this.props.tags.map((tag,index) => {
                            return (
                                <button 
                                    className="button button-group" 
                                    type="button" 
                                    role="navigation" 
                                    tabIndex="0" 
                                    key={index} 
                                    onClick={this.handleFilterByTag}>
                                        <span aria-hidden="false">{`#${tag}`}</span>
                                </button>
                            );
                        })}
                    </div>
                </nav>
                <h1 className="header__title">Nos photographes</h1>
            </header>
        );

    }
}

export default HomeHeader;