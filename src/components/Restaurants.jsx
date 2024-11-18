import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";


const Restaurants = () => {

    const[restaurants, setRestaurants] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    console.log(query);

    const restaurantsDetailes = async () => {
        const data = await fetch (`https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=${query}&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=12&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&search_by=restaurant`)
        const jsonData = await data.json();
        setRestaurants(jsonData);
        console.log(jsonData);
    };

    useEffect(() => {
        restaurantsDetailes();  // Api calling
    },[]
    );



    return (
        <div>

            <div className="p-8 bg">
                <p className="text-4xl">Restaurants and stores</p>
                
            </div>

            <div className="flex flex-wrap gap-4 mt-8 py-4 items-center justify-center">
                {restaurants.map((data) => (
                    <Card key = {data.Id} propData = {data}/>
                ))};
                
            </div>
            
        </div>
    );
};

export default Restaurants;