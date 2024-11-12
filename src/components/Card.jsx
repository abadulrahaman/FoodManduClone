import { IoLocation } from "react-icons/io5";
import { MdPedalBike } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";


const Card = (props) => {

    const { propData } = props;
    const {
        VendorListingWebImageName,
        Name,
        Address1,
        DeliveryDistanceStr,
        CuisineTags,
    } = propData;

    return(
        <div>
            <img className="h-56 w-96" src={VendorListingWebImageName} alt="Error" />
            <div className="flex flex-col gap-1">
                <p className="text-[20px] font-bold">{Name}</p>
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <IoLocation />
                        {Address1}
                    </div>
                    <div className="flex items-center">
                        <MdPedalBike />
                        {DeliveryDistanceStr}
                    </div>
                </div>
                <div className="flex items-center">
                    <IoFastFood />
                    {CuisineTags}
                </div>
            </div>
        </div>
    );
};

export default Card;