import React from 'react'
import Picture from './Picture';
import Detail from './Detail';

const Profile = (props) => {
    console.log(props.data.email);
    return (
        <div>
            <h1>Profile</h1>
            <Picture imageUrl={props.data.picture} />
            <Detail name={props.data.name} email={props.data.email} />
        </div>
    )
}

export default Profile;