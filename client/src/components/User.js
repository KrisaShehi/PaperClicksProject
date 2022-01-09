import React, { useState, useEffect } from 'react'
import { Repos } from './Repos'

export const User = ({ user }) => {

    return (
            <div className="user-page">
                <div className="user-card">
                    <img src={user.img} alt="" />
                    <div className="user-info">
                        <h3>Name: {user.name}</h3>
                        <p>Bio: {user.bio}</p>
                    </div>
                    <a href="http://localhost:3002/api/logout"><button>Log Out</button></a>
                </div>
                <Repos repos={user.repos} />
            </div>
    )
}
