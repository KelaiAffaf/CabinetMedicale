import React from "react"
import { Link } from "gatsby"
import photo from "../images/medecin1.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
 import {navigate} from 'gatsby'
 import 'antd/dist/antd.css';

import Scrollbar from 'react-custom-scrollbars'
//<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
const InContaine=styled.div`
display: grid;
grid-column-gap: 600px;
margin-top :60px;

`;
const Container = styled.div` 
display: flex;
align-content: space-between;
margin-top: 100px;
height: 337px;

margin-left: 0px;
padding-left:50px;
margin-top: 58px;
    img{
      width: 100%;
      height: 100%;
    }
    margin-bottom: 150px;
  
    `;
    const Button = styled.button`
    
    width: 217px;
    height: 70px;
    background: #E2007A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-left: 223px;
    margin-top: 46px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    color:white;
  `;

 const  StyledH1=styled.h1`
 font-size: 64px;
 font-family: 'Josefin Sans';
 justify-content: center;
 text-align: center;
 `;

 const StyledLink = styled(Link)`
 text-decoration: none;
 :hover{
     text-decoration: none;
 }
 `;
const IndexPage = () => (
    
  
  <Layout>
    <SEO title="Home" />

    <Container>
        <div>
        <img src={photo}></img>
        </div>
        <InContaine>
        <div>
        <StyledH1>MS Doc Application gestion cabinet médical</StyledH1>  
        </div> 
        <div>
        
         <StyledLink  to="/Start">
         
         <Button>Start</Button>

         </StyledLink>
        </div>
        
        </InContaine>
    
    </Container>
    
    
    
    
  </Layout>
)

export default IndexPage
