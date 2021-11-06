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
    this.state = { name : "",
                   phno : "",
                   addr : "",
                   email : "",
                   payment : "",
    };
  }
  numbervalue = (event)=>{
    this.setState({name : event.target.value});
  }

  numbervalue1 = (event)=>{
    this.setState({phno : event.target.value});
  }

  numbervalue2 = (event)=>{
    this.setState({addr : event.target.value});
  }

  numbervalue3 = (event)=>{
    this.setState({email : event.target.value});
  }

  numbervalue4 = (event)=>{
    this.setState({payment : event.target.value});
  }

  formsubmit = (event)=>{
    event.preventDefault();
    alert("Ordered has been taken");
  }

  
  render(){
    return (
      <div>
      <form onSubmit = {this.formsubmit}>
        
        <h1>   PAYMENT GATEWAY <br/> BOOK FOR SALES - SCIFI , COMICS , NOVELS , BIOGRAPHY <br/> ALL BOOKS TOGETHER @999 ONLY       </h1>

        <div class= "space">
          <b>Enter the Name : </b><input type = "text" id = "box" onChange = {this.numbervalue}></input><br/>
          <b>Enter the Phone Number : </b><input type = "text" id = "box" onChange = {this.numbervalue1}></input><br/>
          <b>Enter the Address : </b><input type = "text" id = "box" onChange = {this.numbervalue2}></input><br/>
          <b>Enter the Email Address : </b><input type = "text" id = "box" onChange = {this.numbervalue3}></input><br/>
          <b>Choose the Payment option : </b> <br/>
          <input type="radio" name="credit" value="credit" onChange = {this.numbervalue4}/> Credit Card   <br/>
          <input type="radio" name="debit" value="debit" onChange = {this.numbervalue4}/> Debit Card     <br/>
          <input type="radio" name="upi" value="upi" onChange = {this.numbervalue4}/> UPI Payment    <br/>

          <button type="submit">please check the details below and click here !!! </button>        
        </div>

      </form>

      <h1>-------Payment Details----------</h1>
        <h2> Name : {this.state.name} </h2>
        <h2> Phone Number : {this.state.phno} </h2>
        <h2> Address : {this.state.addr} </h2>
        <h2> Email address : {this.state.email} </h2>
        <h2> Mode of Payment : {this.state.payment} </h2>

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