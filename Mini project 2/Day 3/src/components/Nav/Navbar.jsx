import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  padding-bottom:20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }


`

const Navbar = () => {
  return (
    <Nav>
<div id="body">

  <div class = "Body">

       <a href = "https://www.adamsrecruitment.com/candidates/ABU" id="frontlink"> <b>  ABU-What are your rights as a temporary worker? </b> </a>

    </div>

    <div class= "middle">

  
  
    <h1> Adams</h1>

    <h5>Multilingual Recruitment</h5>
    <br></br>

  

   </div>



</div>
      <Burger />
    </Nav>
  )
}

export default Navbar