import { useEffect, useState } from "react";


export const useUserVerify = (user) => {
    console.log(user);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        if (user) {
            console.log(user.email);
            fetch(`https://furniture-server.vercel.app/users/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("indicator", data);

                    if (data.userRole === 'Buyer') {
                        setIsBuyer(true)
                    }
                    if (data.userRole === 'Seller') {
                        setIsSeller(true)
                    }
                    if (data.userRole === "Admin") {

                        setIsAdmin(true)
                    }
                    setIsUserLoading(false);
                })
        }
    }, [user]);
    console.log(isSeller, isBuyer, isAdmin);

    return [isSeller, isBuyer, isAdmin, isUserLoading]

}