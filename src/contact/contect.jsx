/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { RiContactsBookUploadFill } from "react-icons/ri";
// import { MdContactPhone } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
// import { SlSocialInstagram } from "react-icons/sl";
import ContactForm from "./contsctForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function ContactPage() {
	const [contactData , _setContactData] = useState([
		{
				icon : <MdContactMail/>,
				contactHeader : "Phone",
				datails : "+0123456789"
		},
		{
			icon : <FaFax/>,
			contactHeader : "Fax",
			datails : "1087256789"
	},
	{
		icon : <FaXTwitter/>,
		contactHeader : "X",
		datails : "@SampleTypr"
},
{
	icon : <SlSocialLinkedin/>,
	contactHeader : "Linkedin",
	datails : "@Sample"
},
	])

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      {/* grneral conainer  */}
      <ContactContainerStyled>
        {/* page title  */}
        <HeaderContainerStyled>
          <h2 data-aos="fade-up" >Contact Us</h2>
          {/* the header */}
          <IntroSection>
            <h4  data-aos="fade-up">
              Welcome Back <br /> <span>Contact Us Now</span>{" "}
            </h4>
            {/* icons for butification  */}
            <ContactIconsContainer data-aos="fade-left" data-aos-duration="2500">
              <MdConnectWithoutContact className="icons icon1" />
              <MdOutlineContactSupport className="icons icon2" />
              <MdContactMail className="icons icon3" />
              <RiContactsBookUploadFill className="icons icon4" />
            </ContactIconsContainer>
          </IntroSection>
        </HeaderContainerStyled>
        {/* the conatact info */}
        <ContactInformation>
          <InformationSection>
					{contactData.map(( data,index)=>{
						return <CardContact key={index} data-aos="fade-right" >
            <IconDiv>{data.icon}</IconDiv>
            <TextDiv>
              <h3>{data.contactHeader}</h3>
              <span>{data.datails}</span>
            </TextDiv>
          </CardContact>
          
					})}
          </InformationSection>
          <FormContainer><ContactForm/></FormContainer>
        </ContactInformation>
      </ContactContainerStyled>
    </>
  );
}

export default ContactPage;

const ContactContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
	overflow-x: hidden;
`;

const HeaderContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background: linear-gradient(to right, #042154, #236f8d);
  width: 100%;

  & h2 {
    display: flex;
    font-size: 35px;
    font-weight: 700;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 1rem auto;
  & h4 {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;

    & span {
      font-size: 1.5rem;
      font-family: "Times New Roman", Times, serif;
      font-style: oblique;
      line-height: 1rem;
    }
  }
  @media screen and (max-width: 654px) {
    /* flex-direction: column; */
    width: 100%;
    gap: 2rem;

    & h4 {
      font-size: 2rem;
      font-weight: 800;
      margin: 0;

      & span {
        font-size: 1rem;
        font-family: "Times New Roman", Times, serif;
        font-style: oblique;
        line-height: 1rem;
      }
    }
  }

  @media screen and (max-width: 535px) {
    flex-direction: column;
    margin: 0.3rem;
    & h4 {
      font-size: 2.6rem;
      font-weight: 800;
      margin: 0;

      & span {
        font-size: 1.6rem;
        font-family: "Times New Roman", Times, serif;
        font-style: oblique;
        line-height: 1rem;
      }
    }
  }
`;

const ContactIconsContainer = styled.div`
  display: flex;
  width: 190px;
  height: 190px;
  background-color: #236f8d;
  border-radius: 50%;
  position: relative;
  transition: all 2s ease;

  & .icons {
    color: red;
    font-size: 5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: rotate(90deg);
    }
  }

  & .icon1 {
    position: relative;
    bottom: -3rem;
    left: -2rem;
  }

  & .icon2 {
    position: relative;
    top: -2rem;
    right: -2rem;
  }

  & .icon3 {
    position: relative;
    bottom: -9rem;
    left: -1rem;
  }

  & .icon4 {
    position: relative;
    bottom: -3rem;
    right: -2rem;
  }

  &:hover {
    transform: rotate(360deg);
  }
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 4rem;
  background-color: #9fabb5;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

	@media screen and (max-width:770px) {
		flex-direction: column;
	}
`;

const InformationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
	gap: 1rem;
	@media screen and (max-width:770px) {
		display: grid;
		grid-template-columns: repeat(2 ,1fr);
		margin-bottom: 1rem;

	}

	@media screen and (max-width:528px) {
		display: grid;
		width: 100%;
		justify-items: center; /* Aligns items along the inline (horizontal) axis */
  align-items: center; 
		grid-template-columns: repeat(1 ,1fr);
		margin-bottom: 1rem;

	}
`;

const FormContainer = styled.div`
  flex: 1;

	@media screen and (max-width:770px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem auto;
	}
`;

const CardContact = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  box-sizing: border-box;
	align-items: center;
	justify-content: center;
  gap: .5rem;
	width: 230px;
	background-color: #fff;
	border-radius: 20px;
	cursor: pointer;
	border-right: 3px solid grey;

	&:hover{
		box-shadow: 0 4px 8px 4px grey;
	}


	@media screen and (max-width:528px) {
	width: 70%;
	justify-content: flex-start;
	}
`;

const IconDiv = styled.div`
	  background: linear-gradient(to right, #042154, #236f8d);
		padding: 10px;
		width: 3rem;
		height: 3rem;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		font-size: 2rem;
		border-radius: 50%;
`

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 10px;
	box-sizing: border-box;
	width: 109px;
	& h3{
		color: grey;
		font-size: 1rem;
	}

	& span {
		color: darkgray;

	}
`