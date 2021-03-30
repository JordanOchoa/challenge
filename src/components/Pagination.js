import './Pagination.css';

const Pagination = ({goPrevUrl, goNextUrl}) => {
    return (
        <div className="buttonContainer">
            <button onClick={goPrevUrl} className="paginationButton">Previous</button>
            <button onClick={goNextUrl} className="paginationButton">Next</button>
        </div>
    )
}

export default Pagination