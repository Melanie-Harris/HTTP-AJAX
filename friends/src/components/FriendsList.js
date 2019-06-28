import React from 'react';
// import FriendsForm from './FriendsForm';
import Friend from './Friend'

const FriendsList = props => {
    return (
        // < div className="friends-list">
        //     <h1>My BFFs <span>💌</span></h1>

        //     <FriendsForm />
        <div>
            <br /><br />

            <br />
            {/* {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}> */}
                    {/* <h1>Id: {friend.id}</h1> */}
                    {/* <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <h2>Email: {friend.email}</h2> */}
                    {props.friends.map(friend=>
            <Friend key={friend.id} friend={friend} />
                        )}
                    <br/><br/>
                {/* </div>
            ))} */}

        </div >
    )
}

export default FriendsList;