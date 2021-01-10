import styled from 'styled-components'

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  color: #00B0C7;
`
export const P = styled.p`
  color: #00B0C7;
`
export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0;
`

export const Button = styled.button`
  box-shadow: 0px 0px 0px 0px #3dc21b;
	background:linear-gradient(to bottom, #18c245 5%, #5cbf2a 100%);
	background-color:#18c245;
	border-radius:10px;
	border:1px solid #2bd411;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	padding:5px 16px;
	text-decoration:none;
  text-shadow:0px 0px 0px #2f6627;
  margin-left: 20px;
  
  &:hover{
    background:linear-gradient(to bottom, #5cbf2a 5%, #18c245 100%);
	  background-color:#5cbf2a;
  }
  &::active{
    position:relative;
	  top:1px;
  }
`
