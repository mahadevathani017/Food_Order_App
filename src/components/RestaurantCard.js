import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
        resData?.info;
    return (
        <div className="rest-card">
            <img
                className="reso-img"
                alt="reso-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} min</h4>
        </div>
    );
};

export default RestaurantCard;
