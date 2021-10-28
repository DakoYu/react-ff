import './Card.css';

const Card = props => {
    const {name, date, summary} = props
    return (
        <div class='card'>
            <img src={`/assets/images/${name}.jpg`} alt=''></img>
            <div className='container'>
                <h4><b>{date}</b></h4>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default Card