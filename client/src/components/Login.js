import React from 'react'
import { ReactComponent as GithubIcon } from "../svg/githubIcon.svg";

export const Login = () => {
    return (
        <div className='login-page'>
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome to GitHubClone</h2>
                    <p>Please Log In with your GitHub Credentials</p>
                </div>
                <a href="http://localhost:3002/auth/github"><button>Login with GitHub <GithubIcon /></button></a>
            </div>
        </div>
    )
}
