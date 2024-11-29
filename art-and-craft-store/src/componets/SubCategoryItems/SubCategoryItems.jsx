import { useParams } from "react-router-dom";

const SubCategoryItems = () => {

    const { subcategory } = useParams();
    console.log(subcategory)
    return (
        <div>
            <h1>This is Sub Category Cards</h1>
        </div>
    );
};

export default SubCategoryItems;