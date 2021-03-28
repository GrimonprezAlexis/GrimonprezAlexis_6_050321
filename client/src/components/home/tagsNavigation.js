import React from 'react'

const TagsNavigation = ({ tags, handleFilterByTag, clickedItem }) => {
    return (
        <>
        <nav role="navigation" aria-label="Photographer_categories" aria-labelledby="Photographer_categories" id="Photographer_categories">
            <div className="header__navigation__list">
                {tags.map((tag,index) => {
                    return (
                        <button key={index}  onClick={handleFilterByTag} id={`tag_${tag}`}  aria-describedby={`tag_${tag}`}
                            className="button button-group"  type="button"  aria-labelledby={`tag_${tag}`}
                             className={index === clickedItem ? 'is-checked' : null}
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