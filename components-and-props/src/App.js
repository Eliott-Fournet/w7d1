import React from 'react'
import Profile from './Profile';

const App = () => {
    const user = {
        name: 'Alice',
        email: 'alice@gmail.com',
        picture: 'https://bit.ly/2zVs57p'
    }
    return (
        <div>
            <Profile data={user} />
        </div>
    )
}

export default App;