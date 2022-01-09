import React, { useState, useEffect } from 'react'

export const Repos = () => {

    const [starredRepos, setStarredRepos] = useState([])

        const getUserRepos = () => {
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
                .then((data) => setStarredRepos(data.repos))
                .catch((err) => {
                    console.log(err)
                })
        }


    return (
        <div className='repos-page'>
            <button onClick={getUserRepos}>Get Repos</button>
            {starredRepos && <div className='repos-container'>
                    {starredRepos.map((repos) => {
                        return <div className='repos-card'>
                            <div className="owner">
                                <img src={repos.owner.avatar_url} alt="" />
                                <h3>Author: {repos.owner.login}</h3>
                            </div>
                            <p>Name: {repos.name}</p>
                            <h5>Views: {repos.watchers}</h5>
                        </div>
                    })}
                </div>}
        </div>
    )
}
