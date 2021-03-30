import './DescriptionCard.css';

const DescriptionCard = (props) => {
    console.log(props)
    return (
        <div className="descriptionCard">
            <p className="descriptionName">{props.name}</p>
            <div className="descriptionTypes">
                {
                    props.types.map(p => <div key={p.type.name} className="typeTextContainer"><p className="typeText">{p.type.name}</p></div>)
                }
            </div>
            <div className="descriptionTextContainer">
                <p className="descriptionText">Pokedex Number:</p>
                <p className="descriptionValue">{props.id}</p>
            </div>
            <div className="spacerDetail"></div>
            <div className="descriptionTextContainer">
                <p className="descriptionText">Height:</p>
                <p className="descriptionValue">{props.height}</p>
            </div>
            <div className="spacerDetail"></div>
            <div className="descriptionTextContainer">
                <p className="descriptionText">Weight:</p>
                <p className="descriptionValue">{props.weight}</p>
            </div>
            <div className="spacerDetail"></div>
            <div className="secondaryDetailImages">
                <img src={props.front_shiny} alt="" className="shinyImg" width="100" height="100"></img>
                <img src={props.back_shiny} alt="" className="shinyImg" width="100" height="100"></img>
            </div>
        </div>
    )
}

export default DescriptionCard