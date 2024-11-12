import { useEffect, useState } from "react";
import Card from "./Card";
import { backgroundimage } from "./constant";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Restaurants from "./Restaurants";

const Home = () => {

    const [restaurantData, setRestaurantData] = useState([]);

    const getRestaurantDetail = async () => {
        const data = await fetch("https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFav[…]ndorTagsCSV=FEATURED,&filtertags=FEATURED&search_by=restaurant");
        // await return promise
        const jsonData = await data.json(); 
        setRestaurantData(jsonData);
    };

    useEffect(() => {
        // getRestaurantDetail();  //API calling
    },[]
    );

    return (
        <div>
            <div className="relative">

                <img src={backgroundimage} className="h-[800px] w-full" alt="Error" />
                
                <div className="absolute top-0 left-0 right-0 bottom-0  flex flex-col justify-center items-center">
                    <p className="text-[30px]">Order food from the widest range of restaurants.</p>
                    <div>
                        <input className="outline-none p-2 w-[500px] mt-4" type="text" placeholder="Restaurants or cuisine" />
                        <button className="bg-yellow-300 py-2 px-8">Find Restaurents</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center p-4 my-4 text-[20px]">
                <p className=" font-bold ">Featured Restaurants</p>
                <Link to='restaurants' className="flex items-center">
                    <p>View All</p>
                    <FaArrowRight className="ml-2"/>
                </Link>
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-center my-8">
                {restaurantData.map((data) => (
                    <Card key = {data.Id} propData = {data} />
                ))} 
            </div>

           

        </div>
    );
};

export default Home;