
import styled from "styled-components";
// import { AboutBtn } from "../aboutUs/aboutUs";
// import file from "./server.cjs";

function ContactForm() {

  return (
    <FormContainer>
			<TopHeader>Message Us</TopHeader>
      <TopInput>
        <UserInput
          name='name'
          placeholder='Name'
        
        />
        <UserInput
          name='email'
          placeholder='Email'
         
        />
      </TopInput>
      <UserInput
        name='subject'
        placeholder='Subject'
       
      />

      <MessageTextarea
        name='message'
        placeholder='Message'
      
      />
      <CustomAbout >Send</CustomAbout>
    </FormContainer>
  );
}

export default ContactForm;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: white;
  font-size: 2rem;

  &::before {
    content: '';
    height: 10px;
    width: 40px;
    border-radius: 20px;
    background-color: rgba(255, 0, 0, 0.253); /* Changed 'color' to 'background-color' for better clarity */
    margin-right: 1rem; /* Added margin for better spacing */
  }
	&::after {
    content: '';
    height: 10px;
    width: 40px;
    border-radius: 20px;
    background-color: rgba(255, 0, 0, 0.253); /* Changed 'color' to 'background-color' for better clarity */
    margin-left: 1rem; /* Added margin for better spacing */
  }

	@media screen and (max-width:528px) {
	font-size: 1rem;
	&::before {
    content: '';
    height: 10px;
    width: 20px;
    border-radius: 20px;
    background-color: rgba(255, 0, 0, 0.253); /* Changed 'color' to 'background-color' for better clarity */
    margin-right: .5rem; /* Added margin for better spacing */
  }
	&::after {
    content: '';
    height: 10px;
    width: 20px;
    border-radius: 20px;
    background-color: rgba(255, 0, 0, 0.253); /* Changed 'color' to 'background-color' for better clarity */
    margin-left: .5rem; /* Added margin for better spacing */
  }
	}
`;


const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  min-height: 200px;
  width: 90%;
  gap: 10px;
  @media (max-width: 887px) {
    padding: 10;
  }
`;

const CustomAbout =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
  background: linear-gradient(to right, #042154, #236f8d);
	border-radius: 20px;
  margin-top: 1rem;
  width: 150px;
	padding: 10px;
	box-sizing: border-box;
	cursor: pointer;
`;

const TopInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  gap: 10px;
  @media (max-width: 887px) {
    width: 98%;
  }
`;

const UserInput = styled.input`
  border: 0.7px solid grey;
  border-radius: 15px;
  padding: 8px;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s ease;
  width: 92%;
  color: black;

  &:focus {
    border-color: grey;
  }

  &::placeholder {
    color: black;
  }
`;

const MessageTextarea = styled.textarea`
  border: 0.7px solid grey;
  border-radius: 15px;
  padding: 8px;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s ease;
  width: 92%;
  height: 140px;
  color: black;

  &:focus {
    border-color: grey;
  }

  &::placeholder {
    color: white;
  }
`;
