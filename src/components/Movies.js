import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      isLoading: true,
      newJoke:'',
      location: '',
    };
  }
  async getJokes(){
    var jokesArray = [];
    try{
      for (var i = 0; i < 6; i++) {

      let response = await fetch(`https://api.chucknorris.io/jokes/random?category=movie`)
      .then(response => response.json())
      jokesArray.push(response)
    }
      this.setState({
        jokes: jokesArray,
        isLoading: false,
      })
    } catch (err) {
      console.error(err)
    }
    return (
      console.log(this.state.jokes)
    )
  }
componentDidMount(){
  this.getJokes();
  var currentLocation = this.props.location;
  var location = currentLocation.pathname.slice(1)
  this.setState({ location })

  console.log("current location: ", location)
}

checkExpression(e, string, id){
  var splitString = string.split(' ')
  for (var i = 0; i < splitString.length; i++) {
    if(splitString[i] === 'Chuck' || splitString[i] === '#chuck'){
      splitString[i] = 'Jeff'
    } else if(splitString[i] === 'Norris' || splitString[i] === 'Norris\'' || splitString[i] === 'Norris\'s' || splitString[i] === '#norris'){
      splitString[i] = 'Gladnick'
    }
  }
   string = splitString.join(' ')
   this.state.jokes.map(joke => {
   if(joke.id === id){
     joke.value = string
   }
 }
 )
   this.setState({newJoke: string})
}

  render() {
    if(this.state.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    }else if(this.state.isLoading === false) {
    return (
      <div >
        <div id="categories">
          Categories:
          <button value="movies"><Link to="/Movies">
            Movies
          </Link>
          </button>
          <button>
            <Link to="/Food">
              Food
            </Link>
          </button>
          <button>
            <Link to="/Jokes">
              Dev
            </Link>
          </button>
        </div>
        <ul>
            {this.state.jokes.map(joke => ( <li key={joke.id}>{joke.value} <button key={`${joke.id}button`} onClick={(e) => this.checkExpression(e, joke.value, joke.id)} >Jeff-isize</button></li>))}
        </ul>
      </div>
    )
  }
  }
}
export default Movies;
