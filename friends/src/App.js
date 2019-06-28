import React, {Component} from 'react';
import axios from 'axios'
import FriendsList from './components/FriendsList';
import './App.css';
import FriendsForm from './components/FriendsForm';

class App extends Component{
    state={
      friends: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response=> {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error })
      })
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <FriendsForm />
        <FriendsList friends={this.state.friends} />
      
      </div>
    )
  }
}
export default App;
