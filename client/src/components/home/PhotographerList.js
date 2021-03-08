//Return photographer list
//The list can be render filtered by tag
const PhotographerList = props => {
    return (
        <>
        <main className="container__main">
        {props.photographers.map((photographer, index) => {
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
                <ul className="photographer__tag">
                    {photographer.tags.map((tag,index) => {
                        return (
                            <li key={index}>
                                <a href="todo.html" title={`Tag ${tag}`} aria-label={`Tag ${tag}`}>
                                <span aria-hidden="false">{`#${tag}`}</span></a>
                            </li>
                        );
                    })}
                </ul>
            </div>    
            );               
        })} 
        </main>
        </>
    )
}

export default PhotographerList;