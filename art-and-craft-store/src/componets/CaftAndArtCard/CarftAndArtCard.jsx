
const CarftAndArtCard = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full">

            <img className="h-48 w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
            <div className="p-6">
                <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                    <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                        Subcategory_Name
                    </div>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">Beautiful Home in the countryside</h4>

                <div className="mt-1">
                    <span>$1,900.00</span>
                    <span className="text-gray-600 text-sm">/ wk</span>
                </div>
                <div className="mt-2 flex items-center">
                    <span className="text-teal-600 font-semibold">
                        <span className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0eb2e7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                        </span>
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                </div>
            </div>
        </div>
    );
};

export default CarftAndArtCard;