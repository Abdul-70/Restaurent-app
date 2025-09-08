import RestaurentCard from "./RestaurentCard";
import restList from "../utils/mockData";
import React, { useEffect } from "react";
import { useState} from "react";


//     "id": 1,
//     "name": "Italian Delight 1",
//     "description": "Street food vibes in a comfortable setting.",
//     "cuisine": "Italian",
//     "rating": 4.7,
//     "location": "Phoenix",
//     "address": "202 Italian St, Phoenix, USA",
//     "phone": "(+1) 555-2877",
//     "opening_hours": {
//       "mon-fri": "11:00 AM - 10:00 PM",
//       "sat-sun": "12:00 PM - 11:00 PM"
//     },
//     "price_range": "$$",
//     "delivery_available": false,
//     "image": "https://example.com/restaurant_image_1.jpg"
//   },
//   {
//     "id": 2,
//     "name": "American Delight 2",
//     "description": "Great for quick bites and casual dining.",
//     "cuisine": "American",
//     "rating": 4.5,
//     "location": "Philadelphia",
//     "address": "338 American St, Philadelphia, USA",
//     "phone": "(+1) 555-2485",
//     "opening_hours": {
//       "mon-fri": "11:00 AM - 10:00 PM",
//       "sat-sun": "12:00 PM - 11:00 PM"
//     },
//     "price_range": "$",
//     "delivery_available": true,
//     "image": "https://example.com/restaurant_image_2.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Japanese Delight 3",
//     "description": "Perfect for date nights and group dinners.",
//     "cuisine": "Japanese",
//     "rating": 4.9,
//     "location": "San Jose",
//     "address": "932 Japanese St, San Jose, USA",
//     "phone": "(+1) 555-8161",
//     "opening_hours": {
//       "mon-fri": "11:00 AM - 10:00 PM",
//       "sat-sun": "12:00 PM - 11:00 PM"
//     },
//     "price_range": "$$$",
//     "delivery_available": true,
//     "image": "https://example.com/restaurant_image_3.jpg"
//   },
//   {
//     "id": 4,
//     "name": "French Delight 4",
//     "description": "Cozy ambiance and family-friendly service.",
//     "cuisine": "French",
//     "rating": 4.8,
//     "location": "San Diego",
//     "address": "891 French St, San Diego, USA",
//     "phone": "(+1) 555-3542",
//     "opening_hours": {
//       "mon-fri": "11:00 AM - 10:00 PM",
//       "sat-sun": "12:00 PM - 11:00 PM"
//     },
//     "price_range": "$$$",
//     "delivery_available": false,
//     "image": "https://example.com/restaurant_image_4.jpg"
//   },
//   {
//     "id": 5,
//     "name": "Korean Delight 5",
//     "description": "Authentic flavors with a modern touch.",
//     "cuisine": "Korean",
//     "rating": 4.6,
//     "location": "Austin",
//     "address": "849 Korean St, Austin, USA",
//     "phone": "(+1) 555-1508",
//     "opening_hours": {
//       "mon-fri": "11:00 AM - 10:00 PM",
//       "sat-sun": "12:00 PM - 11:00 PM"
//     },
//     "price_range": "$$",
//     "delivery_available": true,
//     "image": "https://example.com/restaurant_image_5.jpg"
//   }
// ]);

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] =useState(restList)

  useEffect (()=> {
    fetchData();
  }, []);

  const fetchData= async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9665806&lng=77.724865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
       console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
 
    setListOfRestaurent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };
  
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
          console.log("clicked")
         const filteredList = ListOfRestaurent.filter((res)=> res?.info?.avgRating > 4.2);
         setListOfRestaurent(filteredList)
        }} 
        > Top rated restaurants</button>
      </div>

      <div className="res-container">
        {ListOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
