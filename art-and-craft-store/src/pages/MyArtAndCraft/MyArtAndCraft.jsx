import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CarftAndArtCard from "../../componets/CaftAndArtCard/CarftAndArtCard";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> 586c8d4271cf5f1ee19fce23641b3436f1c79f5c

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])
<<<<<<< HEAD

    useEffect(() => {
        axios.get(`http://localhost:5000/all-art-and-craft-items?email=${user?.email}`)
        .then(res => {
            const data = res.data;
            setMyItems(data)
        })
        .catch(error => {
            console.log(error)
        })

        // fetch(``)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMyItems(data)
        //     })
    }, [user?.email])
=======
    const email = user?.email;

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-eta.vercel.app/all-art-and-craft-items/email/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })
    }, [email])
>>>>>>> 586c8d4271cf5f1ee19fce23641b3436f1c79f5c


    return (
        <section>
            <div className="container mx-auto">
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-14 px-4">
                    {
<<<<<<< HEAD
                        myItems.map((myItem) => <CarftAndArtCard
                            key={myItem._id}
                            myOwnItem={true}
                            myItems={myItems}
                            setMyItems={setMyItems}
                            artAndCraftItem={myItem}
=======
                        myItems.map((myItem) => <CarftAndArtCard 
                        key={myItem._id} 
                        myOwnItem={true} 
                        myItems={myItems}
                        setMyItems={setMyItems}
                        artAndCraftItem={myItem} 
>>>>>>> 586c8d4271cf5f1ee19fce23641b3436f1c79f5c

                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyArtAndCraft;