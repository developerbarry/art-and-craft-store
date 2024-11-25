
const CarftItemCard = () => {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxwZXJzb258ZW58MHwwfHx8MTcxMDUxNjkwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Landscape Painting</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Capture the serene beauty of nature with breathtaking landscape paintings that bring the outdoors into your space, filled with vibrant colors and stunning vistas.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0eb2e7] rounded-lg hover:bg-[#48A2D4] focus:ring-4 focus:outline-none focus:ring-blue-300">
                    View All
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

    );
};

export default CarftItemCard;