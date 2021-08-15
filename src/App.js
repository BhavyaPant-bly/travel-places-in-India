import React, { useState } from "react";
import "./styles.css";

var TravelDestinations = {
  Beaches:
    "India having the longest stretch of coastline exhibits some serene beautiful beaches",
  "Hill Stations":
    "India has abundant hill stations spread all over the country that makes for a tranquil and picturesque destination for tourists",
  "Food Delight":
    "Some exotic places in India which are a paradise for Foodies",
  "Nature & Culture":
    "India is rich and diverse, filled with lush green forests, scenic lakes, and vast stretches of wilderness.",
  Historical: "These reflect the splendid heritage and culture of the country.",
  Religious:
    "India is a spiritual land of different religions. Religious places are a must to visit"
};
var beaches = {
  "Varkala, Kerala": ["Best Spectacular Setting", "5/5"],
  "Palolem, South Goa": ["Best Picturesque Beach", "5/5"],
  "Anjuna, North Goa": ["Best for Party People and Backpackers", "4/5"],
  "Baga, North Goa": ["Best for chilling Out", "4/5"],
  Pondicherry: ["Best for Culture", "4/5"],
  " Tarkarli, Maharashtra": ["Best for Scuba Diving and Snorkeling", "3/5"],
  "Lakshadweep Islands": ["Most Pristine and Surreal Beaches", "3/5"],
  "Andaman and Nicobar": ["Secluded Blue seas and Virgin Islands", "3/5"],
  "Gokarna, Karnataka": ["Best Goa Substitute", "3/5"]
};
var hillStations = {
  "Manali, Himachal": ["Lovers Paradise", "5/5"],
  "Leh Ladakh, Jammu and Kashmir": [
    "phantasmagoric and fabulous landscapes",
    "5/5"
  ],
  "Gangtok, Sikkim": [
    "mesmerising prismatic beauty and beautiful winding hill roads",
    "5/5"
  ],
  "Srinagar, Jammu and Kashmir": ["plethora of gorgeous scenic vistas", "5/5"],
  "Auli, Uttrakhand": ["skiing Destination Of India", "4/5"],
  Mussoorie: ["known for The Cloud’s End and The Mall", "4/5"],
  "Ooty, Tamil Nadu": ["Queen of the Hills", "4/5"],
  "Munnar, Kerela": [
    "Tea estates, exotic lush greenery and craggy peaks",
    "3/5"
  ]
};
var FoodDelight = {
  "Jaipur, Rajasthan": [
    "a city of authentic Rajasthani food , grandeur and magnificence",
    "5/5"
  ],
  Hyderabad: [" Famous for Hyderabadi Biriyani", "5/5"],
  "Amritsar, Punjab": ["a delight for all desi food lovers", "5/5"],

  Delhi: ["Authentic cuisines, Regional fusions", "5/5"],
  Goa: ["Famous for its Sea food", "4/5"],
  "Kolkatta, West Bengal": [
    "Famous Bengali cuisines, fishes and deserts like sondesh and rosogulla",
    "5/5"
  ],
  "Mumbai, Maharashtra": [
    "Famous for mouth-watering street foods like Vada pao",
    "4/5"
  ],
  "Lucknow, Uttar Pradesh": [
    "Famous for Mughlai and Awadhi cuisines and their world famous kebabs",
    "4/5"
  ],
  Sikkim: [
    "Famous for its variety of momos (dumplings), Thukpa(Noodle soup) and Phagshapa(Pork fat)",
    "4/5"
  ]
};

var NaturendCulture = {
  "Tamil Nadu": [
    "Wondrous temples, Carnatic music celebrations and gorgeous architecture ",
    "5/5"
  ],
  Mysore: ["Palaces galore, myriad of museums and galleries", "4/5"],
  Hampi: [
    "a world heritage site for housing the ruins of the ancient Vijaynagar kingdom",
    "4/5"
  ],
  "Khajuraho, Madhya Pradesh": [
    "temples with sensuous postures and  promoting eroticism",
    "4/5"
  ],
  "Kaziranga National Park": [
    " most picturesque wildlife sanctuaries in India ",
    "4/5"
  ],
  "Jim Corbett National Park": [
    "India's oldest and most popular National Park",
    "4/5"
  ],
  Thekkady: ["Famous for Asian Elephants, Tigers, Gaurs, Sambars", "3/5"]
};

var HistoricaL = {
  "Taj Mahal, Agra": [
    "The ultimate epitome of love with white marble structure ",
    "5/5"
  ],
  "Agra Fort, Uttar Pradesh": [
    "Built entirely of red sandstone, provides a sense of the rich history of the Mughal era",
    "4/5"
  ],
  "Red Fort, Delhi": [
    "also known as Qila-e-Mubarak, famous Historical as well as a Protest site",
    "5/5"
  ],
  "Hawa Mahal, Jaipur": [
    " A honeycomb of a beehive with its 953 intricate windows famously known as ‘Palace of Winds’",
    "4/5"
  ],
  "Sanchi Stupa, Madhya Pradesh": [
    "One of the most religious centers of Buddhism ",
    "4/5"
  ],
  "Fatehpuri Sikri, Uttar Pradesh": [
    "A well planned royal city with carved columns and decorated pillars",
    "4/5"
  ]
};

var ReligiouS = {
  "Vaishno Devi, Uttarakhand": [
    "One of the most visited places of worship in India",
    "5/5"
  ],
  "Ajmer Sharif Dargah, Uttar Pradesh": [
    "With intricate detailing of Mughal architecture, a place of astounding religious beliefs",
    "5/5"
  ],
  " Amarnath Caves, Jammu Kashmir": [
    "Situated in the beautiful abode of Jammu and Kashmir this place is a haven for the pilgrims",
    "5/5"
  ],
  "Golden Temple, Amritsar": [
    "A Majestic Gurudwara of utmost importance to sikhs with a beautiful lake",
    "5/5"
  ],
  "Tirupati Balaji": [
    "Located in the Tirumala Hills and houses an 8-feet tall idol of Lord Venkateshwara",
    "5/5"
  ],
  "Jagannath Temple": [
    "An extremely sacred place to the Hindus, it is one of the Char Dhams in the country",
    "5/5"
  ]
};
var Travel = Object.keys(TravelDestinations);
var beach = Object.keys(beaches);
var hills = Object.keys(hillStations);
var food = Object.keys(FoodDelight);
var nature = Object.keys(FoodDelight);
var historical = Object.keys(HistoricaL);
var religious = Object.keys(ReligiouS);

var typesofdestination = {
  Beaches: beaches,
  "Hill Stations": hillStations,
  "Food Delight": FoodDelight,
  "Nature & Culture": NaturendCulture,
  Historical: HistoricaL,
  Religious: ReligiouS
};

export default function App() {
  var [Intro, Type] = useState("");

  var [listing, listofdestinations] = useState([]);

  var [description, Place] = useState([]);

  function DescriptionPlaces(item) {
    Type((Intro = TravelDestinations[item]));
    type = typesofdestination[item];
    listofdestinations(
      (listing = Object.keys(type).map((value) => {
        return value;
      }))
    );
    Place(
      (description = Object.keys(type).map((value) => {
        return type[value];
      }))
    );
  }

  return (
    <div className="App">
      <div className="heading">Travel Places in India</div>

      <h1>CATEGORIES:</h1>
      {Travel.map((item) => {
        return (
          <button
            style={{ fontSize: "1.5rem", margin: "3px" }}
            key={item}
            onClick={() => DescriptionPlaces(item)}
          >
            {item}
          </button>
        );
      })}
      <h1 className="container-center">{Intro}</h1>
      <ul>
        {Object.keys(listing).map((item) => {
          return (
            <li>
              <hr />
              <h1> {listing[item]}:</h1>
              <h2>{description[item][0]}</h2>
              <h2>Ratings:{description[item][1]}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
