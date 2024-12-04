import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarftAndArtDetails = () => {
    const [carftAndArtItem, setCarftAndArtItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
<<<<<<< HEAD
        fetch(`http://localhost:5000/all-art-and-craft-items/${id}`)
=======
        fetch(`https://art-and-craft-store-server-eta.vercel.app/all-art-and-craft-items/${id}`)
>>>>>>> 586c8d4271cf5f1ee19fce23641b3436f1c79f5c
            .then(res => res.json())
            .then(data => setCarftAndArtItem(data))
    }, [id])

    
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center py-14 min-h-screen">
                    <div className="relative w-full">
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale!</span>
                        <img src={carftAndArtItem?.image} />
                    </div>
                    <div className="p-8 w-full">
                        <h1 className="text-[40px] font-normal text-[#3e454c] font-yan">{carftAndArtItem?.item_name}</h1>
                        <p className="text-sm flex gap-1 items-center text-gray-500">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>

                            </span>
                            <span className="ml-2 text-gray-600 text-base font-raj font-normal">{carftAndArtItem?.rating}rating</span>

                        </p>
                        <div className="flex items-center mt-2 font-yan">
                            <span className="text-2xl font-bold text-green-600">${carftAndArtItem?.price}</span>
                            <span className="ml-2 text-sm text-gray-400 line-through">$438.75</span>
                        </div>
                        <p className="mt-3 text-base font-normal text-gray-500 font-raj">
                            {carftAndArtItem?.short_description}
                        </p>
                        <div className="mt-4">
                            <span className="block text-center bg-gray-300 text-gray-600 text-xl font-semibold py-2 rounded font-yan">{carftAndArtItem?.stockStatus}</span>
                        </div>
                        <div className="mt-4 text-base text-gray-400 font-normal font-raj">
                            <p><span className="font-bold">Customization: </span>{carftAndArtItem?.customization}</p>
                            <p><span className="font-bold">Processing Time: </span>{carftAndArtItem?.processing_time}</p>
                            <p><span className="font-bold">Subcategory Name: </span>{carftAndArtItem?.subcategory_Name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarftAndArtDetails;