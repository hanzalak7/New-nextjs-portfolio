'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import AboutImage from '../../public/Images/971.jpg'


const TAB_DATA = [
    {
        title:'skills',
        id:'skills',
        content: (
            <ul className='list-disc flex flex-col gap-2'>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>MongoDb & Express JS</li>
                <li>Zoho </li>
                <li>Jira</li>
                <li>Asana</li>
                <li>React js</li>
                <li>JQuery</li>
                <li>Gen AI</li>
            </ul>
        )
    },
    {
        title:'education',
        id:'education',
        content:(
            <ul className='list-disc flex flex-col gap-2'>
                <li>Full Stack Web Developer</li>
            </ul>
        )
    },
    {
        title:'experience',
        id:'experience',
        content:(
            <ul className='list-disc flex flex-col gap-2'>
                <li> </li>
            </ul>
        )
    }
]



const AboutSection = () => {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section id='about' className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
            priority
            unoptimized
            alt='Image'
            src={AboutImage.src}
            width={500}
            height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className="text-4xl mb-4 font-bold text-white">About Me</h1>
                <p className='text-base lg:text-lg '>With a strong foundation in project management, systems administration, and customer relations gained through both academic and professional experiences, I am well-equipped to excel in high-pressure environments. My goal is to leverage my passion for technology and diverse background to foster company innovation and provide effective engineering solutions to complex technical challenges. A mindset to be team Player.</p>
                <div className="flex gap-4 py-3">
                    <TabButton selectTab={() => {handleTabChange('skills')}} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => {handleTabChange('education')}} active={tab === 'education'}>Education</TabButton>
                    <TabButton selectTab={() => {handleTabChange('experience')}} active={tab === 'experience'}>Experience</TabButton>   
                </div>
                <div className="">
                    {TAB_DATA.find((t) => tab === t.id).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
