
import React , { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items : [],
      isloaded : false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isloaded : true,
          items : json,
        })

      });
  }


  return (){

    var { isloaded , items } = this.setState;

    if(isloaded){
      return <h1> Loading... </h1>
    }
    else{

      return(
        <div className="App">

          <ul>
            {items.map(item =>(
              <li key={item.id}>

                NAME : {item.name}
                Email : {item.email}

              </li>
            ))};
          </ul>
      
        </div>
      );
    }
    
  }
}


export default App;
