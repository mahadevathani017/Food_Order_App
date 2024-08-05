import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


export const Body = () => {
    // Local State variabl or reactjs variable-superpower varible
    const [resLists, setresLists] = useState(resList);
    // Normal js variable

    // let resLists1 = [
    //     {
    //         info: {
    //             id: "788303",
    //             name: "Wow! Momo",
    //             cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
    //             locality: "Near Shanti Nagar Bus Stop",
    //             areaName: "Shantinagar",
    //             costForTwo: "₹300 for two",
    //             cuisines: [
    //                 "Tibetan",
    //                 "Healthy Food",
    //                 "Asian",
    //                 "Chinese",
    //                 "Snacks",
    //                 "Continental",
    //                 "Desserts",
    //                 "Beverages",
    //             ],
    //             avgRating: 4.3,
    //             parentId: "1776",
    //             avgRatingString: "4.3",
    //             totalRatingsString: "100+",
    //             sla: {
    //                 deliveryTime: 19,
    //                 lastMileTravel: 1.7,
    //                 serviceability: "SERVICEABLE",
    //                 slaString: "15-20 mins",
    //                 lastMileTravelString: "1.7 km",
    //                 iconType: "ICON_TYPE_EMPTY",
    //             },
    //             availability: {
    //                 nextCloseTime: "2024-07-28 23:00:00",
    //                 opened: true,
    //             },
    //             badges: {},
    //             isOpen: true,
    //             type: "F",
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {},
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: "50% OFF",
    //                 subHeader: "UPTO ₹100",
    //             },
    //             differentiatedUi: {
    //                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 differentiatedUiMediaDetails: {
    //                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: "--",
    //                 },
    //             },
    //             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    //         },
    //         analytics: {},
    //         cta: {
    //             link: "https://www.swiggy.com/restaurants/wow-momo-near-shanti-nagar-bus-stop-shantinagar-bangalore-788303",
    //             type: "WEBLINK",
    //         },
    //     },
    //     {
    //         info: {
    //             id: "472792",
    //             name: "Great Indian Khichdi by EatFit",
    //             cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
    //             locality: "LASKAR HOSUR ROAD",
    //             areaName: "ADUGODI",
    //             costForTwo: "₹200 for two",
    //             cuisines: [
    //                 "Home Food",
    //                 "Indian",
    //                 "Healthy Food",
    //                 "Snacks",
    //                 "Desserts",
    //                 "Rajasthani",
    //                 "South Indian",
    //                 "Maharashtrian",
    //                 "Sweets",
    //             ],
    //             avgRating: 4.5,
    //             veg: true,
    //             parentId: "319582",
    //             avgRatingString: "3.9",
    //             totalRatingsString: "1K+",
    //             sla: {
    //                 deliveryTime: 23,
    //                 lastMileTravel: 3.6,
    //                 serviceability: "SERVICEABLE",
    //                 slaString: "20-25 mins",
    //                 lastMileTravelString: "3.6 km",
    //                 iconType: "ICON_TYPE_EMPTY",
    //             },
    //             availability: {
    //                 nextCloseTime: "2024-07-29 00:00:00",
    //                 opened: true,
    //             },
    //             badges: {
    //                 imageBadges: [
    //                     {
    //                         imageId: "v1695133679/badges/Pure_Veg111.png",
    //                         description: "pureveg",
    //                     },
    //                 ],
    //                 textExtendedBadges: [
    //                     {
    //                         iconId: "guiltfree/GF_Logo_android_3x",
    //                         shortDescription: "brand",
    //                         fontColor: "#7E808C",
    //                     },
    //                 ],
    //             },
    //             isOpen: true,
    //             type: "F",
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: "pureveg",
    //                                     imageId: "v1695133679/badges/Pure_Veg111.png",
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                     textBased: {},
    //                     textExtendedBadges: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: "",
    //                                     fontColor: "#7E808C",
    //                                     iconId: "guiltfree/GF_Logo_android_3x",
    //                                     shortDescription: "brand",
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: "ITEMS",
    //                 subHeader: "AT ₹149",
    //             },
    //             differentiatedUi: {
    //                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 differentiatedUiMediaDetails: {
    //                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: "--",
    //                 },
    //             },
    //             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    //         },
    //         analytics: {},
    //         cta: {
    //             link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-laskar-hosur-road-adugodi-bangalore-472792",
    //             type: "WEBLINK",
    //         },
    //     },
    // ];
    // let resLists = [];

    return (
        <div className="body">
            <div className="filter"><button className="filter-btn" onClick={() => {
                //filter logic;

                const filterresLists = resLists.filter((res) => res.info.avgRating > 4.5);
                setresLists(filterresLists);
            }}
            >Top rated restaurant</button></div>
            <div className="res-container">
                {
                    resLists.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;
