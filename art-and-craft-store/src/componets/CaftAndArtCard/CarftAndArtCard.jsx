import PropTypes from "prop-types";


const CarftAndArtCard = ({ artAndCraftItem }) => {

    const { image, stockStatus, item_name, subcategory_Name, price, rating } = artAndCraftItem;

    return (
        
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full flex flex-col">

            <img className="h-48 w-full object-cover object-end" src={image} alt="Home in Countryside" />
            <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">{stockStatus}</span>
                    <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                        {subcategory_Name}
                    </div>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{item_name}</h4>

                <div className="mt-1">
                    <span>${price}</span>
                    <span className="text-gray-600 text-sm"></span>
                </div>
                <div className="mt-2">
                    <div className="flex items-center">
                        <span className="text-teal-600 font-semibold">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                            </span>
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">{rating} rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarftAndArtCard.propTypes = {
    artAndCraftItem: PropTypes.object
}

export default CarftAndArtCard;