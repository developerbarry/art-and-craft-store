import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext)
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/all-art-and-craft-items/email/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [email])


    return (
        <section>
            <div className="container mx-auto">
                <h1>this is my craft and Art</h1>
            </div>
        </section>
    );
};

export default MyArtAndCraft;