import React from 'react'

const TagsNavigation = ({ tags, handleFilterByTag }) => {
    return (
        <>
        <nav role="navigation" aria-label="photographer categories">
            <div className="header__navigation__list">
                {tags.map((tag,index) => {
                    return (
                        <button key={index}  onClick={handleFilterByTag}
                            className="button button-group"  type="button" 
                            role="navigation" tabIndex="0"><span aria-hidden="false">{`#${tag}`}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
        </>
    )
}

export default TagsNavigation;