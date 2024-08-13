import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State variabl or reactjs variable-superpower varible
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    // Normal js variable

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9578269&lng=77.5981177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    };

    if(listOfRestaurants.length==0){
        return <Shimmer/>
    }
        
    return (
        <div className="body">
            <div className="filter"><button className="filter-btn" onClick={() => {
                //filter logic;

                const filterresLists = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                setlistOfRestaurants(filterresLists);
            }}
            >Top rated restaurant</button></div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;
