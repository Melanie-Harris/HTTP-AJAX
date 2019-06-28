import React from 'react';

const Friend= props=>{
    return(
        <div>
            <div className="friend-card">
                <h3>Name: {props.friend.name}</h3>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
                <br/>
                <button> Update</button>
                <button> Delete</button>

            </div>
        </div>
    )
}

export default Friend;
