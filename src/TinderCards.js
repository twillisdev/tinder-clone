
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

const [people, setPeople] = useState([
    {
    name: "Elon Musk",
    url:
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
},
{
    name: "Oprah Winfrey",
    url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/800px-Oprah_in_2014.jpg",
},
{
    name: "Jeff Bezos",
    url: 
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jeff_Bezos_%28cropped%29.jpg",
},
{
    name: "Michael B. Jordan",
    url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg/800px-2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg",
},
{
    name: "Jackie Chan",
    url:
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Jackie_Chan_Berlinale_2010_%28cropped%29.jpg",
},
{
    name: "Cardi B",
    url: 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cardi_B_-_Openair_Frauenfeld_2019_02.jpg/800px-Cardi_B_-_Openair_Frauenfeld_2019_02.jpg",
},
]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);//
};
const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};


return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
    <TinderCard
    className="swipe"
    key={person.name}
    preventSwipe={["up", "down"]}
    onSwipe={(dir) => swiped(dir, person.name)}
    onCardLeftScreen={() => outOfFrame(person.name)}
    >

    <div
style={{ backgroundImage: `url(${person.url})` }}
className="card"
    >    
    
    <h3>{person.name}</h3>
    </div>
    </TinderCard> 
))}
        </div>
    </div>
    );
}

export default TinderCards;
