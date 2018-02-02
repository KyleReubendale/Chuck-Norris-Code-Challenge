import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JokesClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      isLoading: true,
      newJoke:'',
    };
  }
  async getJokes(){
    var jokesArray = [];
    try{
      for (var i = 0; i < 6; i++) {

      let response = await fetch(`https://api.chucknorris.io/jokes/random?category=dev`)
      .then(response => response.json())
      jokesArray.push(response)
    }
      this.setState({
        jokes: jokesArray,
        isLoading: false,
      })
      console.log(jokesArray)
    } catch (err) {
      console.error(err)
    }
    return (
      console.log(this.state.jokes)
    )
  }
componentDidMount(){
  this.getJokes();
}

checkExpression(e, string, id){
  console.log("hitting this")
  console.log(string)
  var splitString = string.split(' ')
  for (var i = 0; i < splitString.length; i++) {
    if(splitString[i] === 'Chuck' || splitString[i] === '#chuck'){
      splitString[i] = 'Jeff'
      console.log(splitString[i])
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
   console.log("updated jokes", this.state.jokes)
   this.setState({newJoke: string})
   console.log(this.state.newJoke)
}

  render() {
    if(this.state.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    }else if(this.state.isLoading === false) {
    return (
      <div>
        <div id="categories">
          Categories:
          <button><Link to="/Movies">
            movies
          </Link>
          </button>
          <button><Link to="/Food">
            Food
          </Link>
          </button>
        </div>
        <ul>
            {this.state.jokes.map(joke => ( <li key={joke.id}>{joke.value} <button key={`${joke.id}button`} onClick={(e) => this.checkExpression(e, joke.value, joke.id)}>Jeff-isize</button></li>))}
        </ul>
      </div>
    )
  }
  }
}
export default JokesClass;
