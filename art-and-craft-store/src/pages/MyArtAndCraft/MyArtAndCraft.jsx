import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CarftAndArtCard from "../../componets/CaftAndArtCard/CarftAndArtCard";

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-eta.vercel.app/all-art-and-craft-items/email/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })
    }, [email])


    return (
        <section>
            <div className="container mx-auto">
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-14 px-4">
                    {
                        myItems.map((myItem) => <CarftAndArtCard 
                        key={myItem._id} 
                        myOwnItem={true} 
                        myItems={myItems}
                        setMyItems={setMyItems}
                        artAndCraftItem={myItem} 

                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyArtAndCraft;