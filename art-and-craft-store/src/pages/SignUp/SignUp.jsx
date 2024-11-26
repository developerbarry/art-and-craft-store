import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const { createNewUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        const confirmPassword = form.get('confirm-password');

        const newUser = { name, email, photoURL, password, confirmPassword }
        console.log(newUser)

        createNewUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Created Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }).catch(() => {
                    Swal.fire({
                        title: 'error!',
                        text: 'Something is Wrong!',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                })

                console.log(user)


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })

    }
    return (
        <section>
            <div className="container mx-auto">
                <div className="py-10">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border mx-auto">
                        <h2 className="text-4xl font-yan font-bold text-center text-gray-800 mb-6">Create an Account</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-xl text-gray-700 font-semibold mb-2 font-yan">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-raj text-base" placeholder="Enter your name" required />

                                <p className="text-red-500 text-sm mt-2 hidden" id="usernameError">Name is required.</p>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-xl font-yan">Email</label>
                                <input type="email" name="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-raj text-base" placeholder="Enter your email" required />

                                <p className="text-red-500 text-sm mt-2 hidden" id="emailError">Please enter a valid email.</p>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="phtoURL" className="block text-gray-700 font-semibold mb-2 text-xl font-yan">Photo URL</label>
                                <input type="text" name="photoURL" id="photoURL" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-raj text-base" placeholder="Enter your Photo URL" required />

                                <p className="text-red-500 text-sm mt-2 hidden" id="emailError">Please enter a valid email.</p>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-xl font-yan">Password</label>
                                <input type="password" name="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-raj text-base" placeholder="Enter your password" required />

                                <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">Password is required.</p>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirm-password" className="block text-gray-700 font-semibold mb-2 font-yan text-xl">Confirm Password</label>
                                <input type="password" name="confirm-password" id="confirm-password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-raj text-base" placeholder="Confirm your password" required />

                                <p className="text-red-500 text-sm mt-2 hidden" id="confirmPasswordError">Passwords do not match.</p>

                            </div>
                            <button type="submit" className="w-full bg-[#0eb2e7] hover:bg-[#1195bf] text-white py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-yan text-lg">Register</button>
                        </form>
                        <p className="text-center text-gray-600 mt-4 font-yan text-lg">Already have an account? <Link to={'/sign-in'} className="text-blue-500 font-semibold">Sign In</Link></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignUp;