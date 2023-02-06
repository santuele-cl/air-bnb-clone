import Card from './Card.jsx';
import data from './data.js';

const Cards = () => {
    const cardsJSX = data.map(datum => {
        return (
            <Card
                key={datum.id}
                {...datum}
            />
        )
    })

    return (
        <div className="wrapper">
            <div className="cards mb-16">
                {cardsJSX}
            </div>
        </div>
    )
} 

export default Cards;