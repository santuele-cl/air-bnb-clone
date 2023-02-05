import Card from './Card.jsx';
import data from './data.js';

const Cards = () => {
    // /*
    const cardsJSX = data.map(datum => {
        const {img, name, country, description, price, rating, totalReviewee, availability} = datum;
        return (
            <Card 
                img={img}
                name={name}
                country={country}
                description={description}
                price={price}
                rating={rating}
                totalReviewee={totalReviewee}
                availability={availability}
            />
        )
                
    })
    console.log(cardsJSX)
    // */
    /* 
        I am expecting an array of JSX e.g.
        [ 
            <Card img="" name="" ... />, 
            <Card img="" name="" ... />
        ] 
    */
    return (
        <div className="wrapper">
            <div className="cards mb-16">
                {cardsJSX}
            </div>

        </div>
    )
} 

export default Cards;