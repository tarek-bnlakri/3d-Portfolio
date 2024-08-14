import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}
        </p> 
        <Link className='neo-brutalism-white neo-btn' to={link}>
        {btnText}
        <img className='w-4 h-4 object-contain' src={arrow}/>
        </Link>
    </div>
)
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>
                Tarek Benlakri
            </span>👋
            <br/>
            A Software Engineer & Full-stack developer
        </h1>
    ),
    2:(
        <InfoBox text={"Eager to collaborate and continuously develop new skills"}
        link='/about'
        btnText={"Learn more"}/>
    ),

    3:(<InfoBox text={"Passionate about successful projects. See the impact of my work by viewing my projects here."}
        link='/projects'
        btnText='Visit my portfolio'/>),

    4:(<InfoBox text={"Need a project done or looking for a dev > I'm just a few keystrokes away "}
        link='/contact'
        btnText={"Let's talk "}/>)
}

function HomeInfo({currentStage}) {
  return (
    <div>{renderContent[currentStage]}</div>
  )
}

export default HomeInfo