import { useEffect } from "react";
import { useState } from "react";
import CarftAndArtCard from "../../componets/CaftAndArtCard/CarftAndArtCard";

const AllArtAndCraftList = () => {

    const [artAndCraftItems, setArtAndCraftItems] = useState([])
    const [pricingType, setPricingType] = useState("All");

    const handlePricingChange = (event) => {
        setPricingType(event.target.value);
    };

    useEffect(() => {
        fetch('http://localhost:5000/all-art-and-craft-items')
            .then(res => res.json())
            .then(data => setArtAndCraftItems(data))
    }, [])

    console.log(artAndCraftItems)


    return (
        <section>
            <div className="container mx-auto">
                <div className="py-14">
                    <div>
                        <form className="flex flex-col md:flex-row justify-center gap-3">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for the tool you like"
                                    className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                                >
                                    Search
                                </button>
                            </div>
                            <select
                                name="pricingType"
                                value={pricingType} // Controlled by React state
                                onChange={handlePricingChange}
                                className="w-full md:w-32 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                            >
                                <option value="All">All</option>
                                <option value="Freemium">Freemium</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </form>

                    </div>
                    <div className="grid grid-cols-4 gap-6 py-14 px-4">
                        {
                            artAndCraftItems.map((artAndCraftItem) => <CarftAndArtCard key={artAndCraftItem._id} artAndCraftItem={artAndCraftItem} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllArtAndCraftList;


// min-h-[calc(100vh-100px)]