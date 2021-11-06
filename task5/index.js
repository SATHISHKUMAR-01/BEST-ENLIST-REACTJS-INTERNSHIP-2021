import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*var styleForH1 = {
  color : 'blue',
  textAlign : 'center'
}*/



class CreateButton extends React.Component{

  constructor(){
    super();
    this.state = { number : ""};
  }
  numbervalue = (event)=>{

    this.setState({number : event.target.value});
  }

  formsubmit = (event)=>{

    event.preventDefault();
    alert(" Value entered by the User : "+ this.state.number);
  }

  render(){
    return (
      <div>
      <form onSubmit = {this.formsubmit}>
        
        <h1>  Display the Entered Value - App        </h1>

        <div class= "space">
          <b>Enter the value : </b><input type = "text" onChange = {this.numbervalue}></input><br/>
          <button type="submit">Get Value !!! </button>
        </div>

      </form>
      </div>
    ) 
  }


}

ReactDOM.render(<CreateButton/>,document.getElementById('root'));









/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/