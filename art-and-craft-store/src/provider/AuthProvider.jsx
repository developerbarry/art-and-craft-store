import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([])


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const handleOrder = (item, email) => {
        console.log(item)
        return axios.patch(`http://localhost:5000/all-art-and-craft-items/${item._id}`, { ...item, order: true })
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    axios.post('http://localhost:5000/orders', { ...item, email })
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Order Confirm Successfully!',
                                    icon: 'success',
                                    confirmButtonText: 'Ok',
                                });
                            }
                            console.log(res.data)
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }

            })
            .catch(error => {
                console.log(error)
            })


    };


    const authInfo = {
        createNewUser,
        signInUser,
        user,
        loading,
        setLoading,
        signOutUser,
        handleOrder,
        setOrders,
        orders
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;