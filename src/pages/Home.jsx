import React, { useContext } from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'
import { UserContext } from '../context/userContext';

function Home() {
    const { userId } = useContext(UserContext);
    return (
        <div>
            {userId}
            <Profile />
            <LoginButton />
            <LogoutButton />
        </div>
    )
}

export default Home