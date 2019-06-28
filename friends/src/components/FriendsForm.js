import React from 'react';
import './FriendsForm.css';


// const FriendsForm = () => {
//     return (
//         <div className="form-container">

//             <form className="form">
//                 Friend's Name:
//                 <input type="text" placeholder="Name" /><br />
//                 Friend's Age:
//                 <input type="text" placeholder="Age" /><br />
//                 Friend's Email:
//                 <input type="email" placeholder="Email" /><br />
//             </form>
//             <div className="update-button">
//                 <button>Update</button>

class FriendsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: '',
                id: 0
            },
            active: false
        }

    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ friend: { ...prevState.friend, [e.target.name]: e.target.value } }))
    }

    submitHandler = (e, friend) => {
        if (this.state.active) {
            // * updateFunctionHere *
        } else {
            // * addFriendHere *
        }
    }
    render() {
        return (
            <div className="form-container">
                <form className="form">
                    Friend's Name:
                    <br />
                    <input name="name" value={this.state.friend.name} type="text" placeholder="Name" required onChange={this.changeHandler} /><br />
                    Friend's Age:
                    <br />
                    <input name="age" value={this.state.friend.age} type="number" placeholder="Age" required onChange={this.changeHandler} /><br />
                    Friend's Email:
                    <br />
                    <input name="email" value={this.state.friend.email} type="email" placeholder="Email" required onChange={this.changeHandler} /><br />
                    <br />
                </form>
                <div className="update-button">
                    <button>{`${this.state.active ? 'Update' : 'Add Friend'}`}</button>
                </div>
                {/* value={this.state.friend} */}
            </div>
        )
    }
}
export default FriendsForm;