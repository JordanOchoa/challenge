import './Card.css';

const Card = (props) => {
    return (
        <div onClick={event => props.goDetailPage(props)} className="card">
            <p className="pokemonName">{props.pokemonName}</p>
            <p className="pokemonId">{props.data.id}</p>
            <img src={props.data.img} alt="" width="" height="" className="pokemonImage"></img>
            <div className="types">
                {
                    props.data.types.map(p => <div key={p.type.name} className="typeTextContainer"><p className="typeText">{p.type.name}</p></div>)
                }
            </div>
        </div>
    )
}

export default Card