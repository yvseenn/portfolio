import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function expText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                Experience</p>
            <p><span style={{color: info.baseColor}}>Experience <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.experience.map((experiences, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>job: {experiences.name}</Box><li>when: {experiences.date}</li><li>Where: {experiences.where}</li> description: {experiences.description}</li>
                ))}
            </ul>
        </>
    }

    function eduText () {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                Education</p>
            <p><span style={{color: info.baseColor}}>Education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.education.map((eduactions, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>Degree : {eduactions.name}</Box><li>when: {eduactions.date}</li><li>Where: {eduactions.where}</li></li>
                ))}
            </ul>
        </>
    }
    function lanText() { 
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                Languages</p>
            <p><span style={{color: info.baseColor}}>Languages <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.language.map((languages, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>language : {languages.language}</Box><li>writing level: {languages.wrlevel}</li><li>spelling level : {languages.splevel}</li></li>
                ))}
            </ul>
        </>
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={expText()}/>
            <Terminal text={eduText()}/>
            <Terminal text={lanText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>

        </Box>
    )
}