import { useEffect, useState } from "react";
import CarftAndArtCard from "../../componets/CaftAndArtCard/CarftAndArtCard";

const AllArtAndCraftList = () => {

    const [artAndCraftItems, setArtAndCraftItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const skeletonItems = new Array(8).fill(null);



    useEffect(() => {
        setIsLoading(true);
<<<<<<< HEAD
        fetch('http://localhost:5000/all-art-and-craft-items')
=======
        fetch('https://art-and-craft-store-server-eta.vercel.app/all-art-and-craft-items')
>>>>>>> 586c8d4271cf5f1ee19fce23641b3436f1c79f5c
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
                    <div className="text-center px-10 md:px-20 lg:px-40">
                        <h1 className="text-[40px] font-yan text-[#3e454c]">Explore the World of Art & Craft</h1>
                        <p className="font-raj text-base font-normal mb-5">Unleash your creativity and discover a curated collection of exquisite art and craft items. From breathtaking paintings to intricate handmade creations, our selection showcases the beauty of artistic expression and craftsmanship. Whether you&apos;re looking for inspiration, decoration, or a unique gift, you&apos;ll find pieces that bring imagination to life and add a touch of elegance to any space.</p>
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