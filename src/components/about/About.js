import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              {hobby.label}
              </Box>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function expText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd Experience
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Experience <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.experience.map((experiences, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                <article>Job: {experiences.name}</article>
              <article>when: {experiences.date}</article>
              <article>Where: {experiences.where}</article>
               <article>Description:{experiences.description}</article>
              </Box>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function eduText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd Education
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Education <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.education.map((eduactions, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                <article>Degree : {eduactions.name}</article>
              <article>when: {eduactions.date}</article>
              <article>Where: {eduactions.where}</article>
              </Box>
            </li>
          ))}
        </ul>
      </>
    );
  }
  function lanText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd Languages
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Languages <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.language.map((languages, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                <article>Language : {languages.language}</article>
              <article>Writing level: {languages.wrlevel}</article>
              <article>Spelling level : {languages.splevel}</article>
              </Box>
            </li>
          ))}
        </ul>
      </>
    );
  }
  function handleDownloadPDF() {
    const cvLink = "https://drive.google.com/file/d/1H2uJcPFwi64gmD9PfRDvIXd-9lC5YJcW/view?usp=share_link";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "resume.pdf";
    link.click();
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={expText()} />
      <Terminal text={eduText()} />
      <Terminal text={lanText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadPDF}
        style={{ marginTop: "2rem" }}
      >
        Download PDF
      </Button>
    </Box>
  );
}
