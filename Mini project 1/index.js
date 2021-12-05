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

      <div id = "header">
      <h1> <b> TRAINING </b> </h1>
      </div>

      <br></br>

      <aside id="course">
          <div id = "aws">
                <a href="aws.html">
                    <img src="aws.png" alt="Amazon Web Services" width="240px" height="360px"  id="aws-pic"></img>
                </a> <br></br>
                <button id="enroll">  <a href="contactus.html" id="ahref">Enroll</a>   </button>
                <button id = "info-aws">  <a href="aws.html" id="ahref"> Info</a> </button> 
            </div>

            <div id = "azure">
               
                <a href="azure.html">
                    <img src="azure.png" alt="Microsoft Azure" width="240px" height="360px" id="azure-pic"></img>
                </a> <br></br>
                <button id="enroll1"> <a href="contactus.html" id="ahref">Enroll</a>  </button>
                <button id="info-azure">  <a href="azure.html" id="ahref"> Info</a></button> 
            </div>
            <div id = "gcloud">
               
                <a href="gcloud.html">
                    <img src="gcloud.jpg" alt="Google Cloud Platform" width="240px" height="360px" id="gcloud-pic"></img>
                </a> <br></br>
                <button id="enroll2">  <a href="contactus.html" id="ahref">Enroll</a>   </button>
                <button id="info-gcloud"> <a href="gcloud.html" id="ahref">  Info</a> </button> 
            </div>
         


      </aside>

      
      
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