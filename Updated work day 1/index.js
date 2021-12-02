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

      <aside id="course">
          <div id = "aws">
                <a href="aws.html">
                    <img src="aws.png" alt="Amazon Web Services" width="240px" height="360px"  id="aws-pic"></img>
                </a> <br></br>
                <button id="enroll" onclick="showform()">  <a href="#enrollform" id="ahref">Enroll</a>   </button>
                <button id = "info-aws" onclick="showawsinfo()">  Info </button> 
            </div>

            <div id = "azure">
               
                <a href="azure.html">
                    <img src="azure.png" alt="Microsoft Azure" width="240px" height="360px" id="azure-pic"></img>
                </a> <br></br>
                <button id="enroll1" onclick="showform()"> <a href="#enrollform" id="ahref">Enroll</a>  </button>
                <button id="info-azure" onclick="showazureinfo()">  Info </button> 
            </div>
            <div id = "gcloud">
               
                <a href="gcloud.html">
                    <img src="gcloud.jpg" alt="Google Cloud Platform" width="240px" height="360px" id="gcloud-pic"></img>
                </a> <br></br>
                <button id="enroll2" onclick="showform()">  <a href="#enrollform" id="ahref">Enroll</a>   </button>
                <button id="info-gcloud" onclick="showgcloudinfo()">  Info </button> 
            </div>
         


      </aside>

      <div id="myModal" class="modal">       
            <div class="modal-content">
              <span class="close">&times;</span>
              <p id = "set">Its a course on AWS , which gives you a Deep dive into the knowledge of Amazon web Services <br></br>
                For More information , Please click on the AWS image.</p>
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