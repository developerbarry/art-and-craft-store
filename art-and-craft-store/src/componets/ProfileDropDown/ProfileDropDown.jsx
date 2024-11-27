import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ProfileDropDown = () => {
    const { user } = useContext(AuthContext)
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <div className='absolute right-14 md:right-14 lg:right-6 h-8'>
            <button
                onClick={() => setProfileOpen(!profileOpen)}

                className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 md:me-0 focus:ring-4 focus:ring-gray-100 border w-[123px] relative" type="button">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 me-2 rounded-full" src={user?.photoURL} alt="user photo" />
                {user?.displayName}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div
                onClick={() => setProfileOpen(false)}
                className={`${profileOpen ? 'inline-block fixed inset-0 cursor-pointer' : 'hidden'}`}></div>  {/* I'm not sure, is that right way or wrong */}

            <div className={`z-10 ${profileOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-2 top-10 dark:bg-gray-700`}>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">Pro User</div>
                    <div className="truncate">{user?.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>

        </div>
    );
};

export default ProfileDropDown;