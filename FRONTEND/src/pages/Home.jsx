import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/departments";
import MessageForm from "../components/MessageForm"

const Home = () => {
  return (
    <>
    
    <Hero  title={ "Welcome to LaxmiMata Medical Institute"} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    <MessageForm/>


    </>
  )
}

export default Home;