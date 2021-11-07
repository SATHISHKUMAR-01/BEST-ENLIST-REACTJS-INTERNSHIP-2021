import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*var styleForH1 = {
  color : 'blue',
  textAlign : 'center'
}*/

class ClassSocialMedia extends React.Component{

  
  render(){
    return (
      <div class="page">

        <h1> Social Media Platform </h1>

        <div class="instagram">
        <a href="https://www.instagram.com/?hl=en"> 
         Instagram <br/>
         <img src="instagram.jpg" alt="instagram" width="150" height="150"></img> 
         </a>
        </div>

         <br/>

         <div class="facebook">
         <a href="https://www.facebook.com/"> 
         Facebook <br/>
         <img src="facebook.png" alt="facebook" width="150" height="150"></img> 
         </a> 
         </div>

         <br/>

         <div class="twitter">
         <a href="https://twitter.com/?lang=en"> 
         Twitter <br/>
         <img src="twitter.png" alt="twitter" width="150" height="150"></img>
         </a>  
         </div>       

         <h3> Click on the link or the image to enter into the respective pages</h3>                                                       

      </div>

   
    ) 
  }
}

ReactDOM.render(<ClassSocialMedia/>,document.getElementById('root'));












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