
const AddCraftItem = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="bg-white border border-4 rounded-lg shadow relative m-10">

                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-[40px] font-normal font-yan text-[#3e454c]">
                            Add Craft Item
                        </h3>

                    </div>

                    <div className="p-6 space-y-6">
                        <form>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Name</label>
                                    <input type="text" name="product-name" id="product-name" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 font-raj" placeholder="Apple Imac 27”" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="image" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Image URL</label>
                                    <input type="text" name="image" id="image" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Image URL" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Category</label>
                                    <input type="text" name="category" id="category" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Category Name" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Price</label>
                                    <input type="number" name="price" id="price" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="rating" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Rating</label>
                                    <input type="text" name="rating" id="rating" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Rating" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="processing-time" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Processing Time</label>
                                    <input type="text" name="processing-time" id="processing-time" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter Processing Time" required="" />
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="product-details" className="block mb-2 text-xl font-normal font-yan text-[#3e454c]">Product Details</label>
                                    <textarea id="product-details" rows="6" className="border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                                </div>

                                <div className="space-y-6 mb-9 col-span-full">
                                    <div className="flex items-center space-x-6">
                                        <span className="text-xl font-normal font-yan text-[#3e454c]">Stock Status</span>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="stockStatus" value="In stock" className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500" />
                                            <span className="text-[#2A2F43] font-raj sm:text-base">In stock</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="stockStatus" value="Made to Order" className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                            <span className="text-[#2A2F43] font-raj sm:text-base">Made to Order</span>
                                        </label>
                                    </div>


                                    <div className="flex items-center space-x-6">
                                        <span className="text-xl font-normal font-yan text-[#3e454c]">Customization</span>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="customization" value="Yes" className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                            <span className="text-[#2A2F43] font-raj sm:text-base">Yes</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="customization" value="No" className="w-4 h-4 text-gray-400 border-gray-300 focus:ring-gray-400"/>
                                            <span className="text-[#2A2F43] font-raj sm:text-base">No</span>
                                        </label>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center font-yan" type="submit">Save all</button>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default AddCraftItem;