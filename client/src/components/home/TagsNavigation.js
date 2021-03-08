//Function access with props
const TagsNavigation = props => {
    return (
        <>
        <nav role="navigation" aria-label="photographer categories">
            <div className="header__navigation__list">
                {props.tags.map((tag,index) => {
                    return (
                        <button key={index}  onClick={props.handleFilterByTag}
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