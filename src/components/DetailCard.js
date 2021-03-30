import './DetailCard.css';

const DetailCard = (props) => {
    return (
        <div className="detailCard">
            <img src={props.mainImage} alt="" className="mainImage" width="100" height="100"></img>
            <div className="secondaryImages">
                <img src={props.frontDefaultImage} alt="" className="responsive" width="100" height="100"></img>
                <img src={props.backDefaultImage} alt="" className="responsive" width="100" height="100"></img>
            </div>
        </div>
    )
}

export default DetailCard