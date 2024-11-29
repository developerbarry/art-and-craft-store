import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarftAndArtCard from "../CaftAndArtCard/CarftAndArtCard";

const SubCategoryItems = () => {
    const [subcategoryDatas, setSubcategoryDatas] = useState([])
    const { subcategory } = useParams();
    console.log(subcategory)

    useEffect(() => {
        fetch(`http://localhost:5000/all-art-and-craft-items/subcategory/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSubcategoryDatas(data)
            })
    }, [subcategory])

    console.log(subcategoryDatas)

    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-14 px-4">
                    {
                        subcategoryDatas.map((subcategoryData) => <CarftAndArtCard
                            key={subcategoryData._id}
                            artAndCraftItem={subcategoryData}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default SubCategoryItems;