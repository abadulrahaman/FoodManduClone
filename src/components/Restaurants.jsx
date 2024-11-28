import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

//kathmandu 27.7026754 85.3191018 1
//Bhaktapur 27.6773968 85.406957  2
//Pokhara 28.208417    83.9554362 3

const Restaurants = () => {

    const[restaurants, setRestaurants] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const [show, setShow] = useState(false);
    // console.log(query);

    const longitude = localStorage.getItem("longitude");
    const latitude = localStorage.getItem("latitude");
    const zoneId = localStorage.getItem("zoneId");

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

            <div className="p-8 flex bg-slate-100 items-center justify-between">
                <p className="text-4xl">Restaurants and stores</p>

                <div onClick={() => {
                    setShow(!show)
                }} className="flex items-center gap-2 border-2 w-fit cursor-pointer p-2">
                    Pokhara
                    <FaAngleDown />
                </div>
            </div>

            {show && ( 
                <ul className="border-2 w-fit absolute right-8 top-[170px] bg-white">
                    <li onClick={() => {
                            localStorage.setItem("latitude",27.7026754);
                            localStorage.setItem("longitude",85.3191018);
                            localStorage.setItem("zoneId",1);
                            setShow(!show)
                    }} 
                    className="p-2 cursor-pointer">
                        Kathmandu
                    </li>

                    <li onClick={() => {
                            localStorage.setItem("latitude",27.6773968);
                            localStorage.setItem("longitude",85.406957);
                            localStorage.setItem("zoneId",2);
                            setShow(!show)
                    }} 
                    className="p-2 cursor-pointer border-y-2">
                        Bhaktapur
                    </li>

                    <li onClick={() => {
                            localStorage.setItem("latitude",28.208417);
                            localStorage.setItem("longitude",83.9554362);
                            localStorage.setItem("zoneId",3);
                            setShow(!show)
                    }}  
                    
                    className="p-2 cursor-pointer ">
                        Pokhara
                    </li>
                </ul> 
            )}

            <div className="flex flex-wrap gap-4 mt-8 py-4 items-center justify-center">
                {restaurants.map((data) => (
                    <Card key = {data.Id} propData = {data}/>
                ))};
                
            </div>
            
        </div>
    );
};

export default Restaurants;