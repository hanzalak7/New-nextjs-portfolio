'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectSelection from './ProjectSelection'
import Image1 from '../../public/Images/project1.png'
import Image2 from '../../public/Images/project2.png'
import Image3 from '../../public/Images/project3.png'
import Image4 from '../../public/Images/project4.png'
import Image5 from '../../public/Images/project5.png'

const projectData = [
    {
        id:3,
        title:'DGTC College Website',
        description:'HTML , CSS , Javascript , Bootstrap , Jquery , React Js',
        imgUrl:Image1.src,
        gitUrl:'https://github.com/hanzalak7/',
        previewUrl:'#',
        tags:['All','Web']
    },
    {
        id:1,
        title:'Online Calculator',
        description:'HTML 5, CSS 3, Javascript',
        imgUrl:Image2.src,
        gitUrl:'https://github.com/hanzalak7/',
        previewUrl:'#',
        tags:['All','Web']
    },
    {
        id:2,
        title:'Yelp Camp',
        description:'A fully functional crud app for creating and validating users and posts with reviews and many more options.',
        imgUrl:Image2.src,
        gitUrl:'https://github.com/hanzalak7/',
        previewUrl:'#',
        tags:['All','Web']
    },
    {
        id:4,
        title:'Raw Fitness',
        description:'A website for a Gym to showcase its features and courses to enroll for a better public approach and more attention.',
        imgUrl:Image5.src,
        gitUrl:'https://github.com/hanzalak7/',
        previewUrl:'#',
        tags:['All','Web']
    },
    {
        id:5,
        title:'Movie webite',
        description:'A basic website template for a movie website written in pure html and css.',
        imgUrl:Image3.src,
        gitUrl:'https://github.com/hanzalak7/',
        previewUrl:'#',
        tags:['All','Web']
    },
]



const Projects = () => {
    const [tag,setTag] = useState('All')
    const handleTagChange = (name) => {
        setTag(name)
    }
    
    const filteredProjects = projectData.filter((project) => project.tags.includes(tag))


  return (
    <div id='projects'>
    <h1 className='text-center text-3xl md:text-5xl text-white font-semibold mb-8'>My Projects</h1>
    <div className="flex gap-4 justify-center text-white md:text-2xl text-lg w-full">
        <ProjectSelection name={'All'} onClick={handleTagChange} active={tag === 'All'}/>
        <ProjectSelection name={'Web'} onClick={handleTagChange} active={tag === 'Web'}/>
        <ProjectSelection name={'mobile'} onClick={handleTagChange} active={tag === 'mobile'}/>
    </div>
    <div className="md:grid-cols-3 md:grid">
        {filteredProjects.length>0 && (
            filteredProjects.map(project => {
                return(
                <ProjectCard key={project.id} {...project}/>
                )
            })
        )}
    </div>
    {filteredProjects.length < 1  && (
            <h1 className='text-white h-28 text-xl md:text-2xl text-center mt-8'>Comming Soon...</h1>
        )}
        </div>
  )
}

export default Projects