import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*var styleForH1 = {
  color : 'blue',
  textAlign : 'center'
}*/

class ClassSocialMedia extends React.Component {


  render() {
    return (
    <div id="body">

      <div class = "Body">

        <a href = "https://www.adamsrecruitment.com/candidates/ABU" id="frontlink"> <b>  ABU-What are your rights as a temporary worker? </b> </a>

      </div>

      <div class= "middle">

        <section id="navs">
          <a href="#"> LOGIN |</a>
          <a href="#"> UPLOAD CV | </a>
          <a href="#"> BLOG |</a>
          <a href="#"> MENU </a>
          <section id="menu-section">
            <div id="menu"> <a href="#"></a></div>
            <div id="menu"> <a href="#"></a></div>
            <div id="menu"> <a href="#"></a></div>
          </section>
        </section>
        
        <h1> Adams</h1>
        <h5>Multilingual Recruitment</h5>

        <div id="#">
        <ul><a href="#"> HOME </a></ul>
        <ul><a href="#"> JOB SEARCH </a></ul>
        <ul><a href="#"> CANDIDATES </a></ul>
        <ul><a href="#"> CLIENTS </a></ul>
        <ul><a href="#"> ABOUT US </a></ul>
        <ul><a href="#"> MEET THE TEAM </a></ul>
        <ul><a href="#"> CONTACT US </a></ul>
        </div>


      </div>

      
      
     </div>
     
    

    ) 
  }
}

ReactDOM.render(<ClassSocialMedia />,document.getElementById('root'));












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