import React, { useState, useEffect } from 'react'
import { User } from './User';

export const Profile = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const getUserInfo = () => {
            fetch("http://localhost:3002/user/profile/api", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true
                    },
                })
                .then((res) => {
                    if(res.status === 200) return res.json()
                    throw new Error('authentication has been failed')
                })
                .then((data) => setUser(data))
                .catch((err) => {
                    console.log(err)
                })
        }

        getUserInfo()
    }, [])

    return (
        <div>
            <User user={user} />   
        </div>
    )
}
