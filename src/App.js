import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ posts: users }));
  }

  render() {
    const { posts, searchField } = this.state;
    const filteredPosts = posts.filter(post => post.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <input type='search' placeholder='search posts' onChange={ (e) => this.setState({ searchField: e.target.value } )}/>
      <CardList posts={filteredPosts}>
      </CardList>
      </div>
    );
  }
}

export default App;
