import { useEffect, useState } from "react";
import CarftAndArtCard from "../../componets/CaftAndArtCard/CarftAndArtCard";

const AllArtAndCraftList = () => {

    const [artAndCraftItems, setArtAndCraftItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pricingType, setPricingType] = useState("All");
    const skeletonItems = new Array(8).fill(null);

    const handlePricingChange = (event) => {
        setPricingType(event.target.value);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/all-art-and-craft-items')
            .then(res => res.json())
            .then(data => {

                setArtAndCraftItems(data);
                setIsLoading(false);
            })
    }, [])


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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-14 px-4">

                        {
                            isLoading ? (

                                skeletonItems.map((_, index) => (
                                    <div key={index} className="flex flex-col rounded shadow-md w-full animate-pulse h-96">
                                        <div className="h-48 rounded-t dark:bg-gray-300"></div>
                                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                                            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                                            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                                            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                                        </div>
                                    </div>
                                ))

                            ) :

                                (
                                    artAndCraftItems.map((artAndCraftItem) => <CarftAndArtCard key={artAndCraftItem._id} artAndCraftItem={artAndCraftItem} />)
                                )

                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllArtAndCraftList;


// min-h-[calc(100vh-100px)]