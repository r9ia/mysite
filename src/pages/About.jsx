import SkillTab from "../components/SkillTab";

//skills png
import HTML from "/html5.png";
import JS from "/js.png";
import Python from "/python.png";
import Java from "/java.png";
import React from "/react.png";
import Tailwind from "/tailwind.png";
import Gamemaker from "/gamemaker.png";


function About() {
  return (
    <div
      className="min-h-screen bg-blue-100 bg-cover bg-center justify-between pt-32 p-8"
      id="about"
    >
      <div className="grid grid-cols-2">
        <div>
          <img src="/camerapic1.PNG" alt="pic of me" className="pl-20"></img>
          <p>TDSsAA Girl's Singles HS City Championships - Gold! </p>
        </div>

        <div>
          <h1 className="text-black text-7xl text-center font-bold">
            About Me
          </h1>
          <p className="text-2xl p-8">
            I’m from Toronto, Canada. I started getting interested in tech in
            grade 10 compsci class and have attended 5+ hackathons, began
            pursuing game design and participated in FIRST Robotics ever since.
            <br/>
            <br/>
            As I begin my first year of computer engineering studies, I am
            looking to learn more about hardware and machine learning, as well
            as continue studying full-stack development. Other than tech, my
            interests include volleyball, badminton, design, and playing RPGs
            ^_^.
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-24 mb-16">What I've Worked With</h1>

      <div className="gap-8 w-[80%] m-auto flex-wrap flex justify-evenly">
        <SkillTab Icon={HTML} Name="HTML" Stars="4"/>
        <SkillTab Icon={JS} Name="Javascript" Stars="3"/>
        <SkillTab Icon={Python} Name="Python" Stars="3"/>
        <SkillTab Icon={Java} Name="Java" Stars="3"/>
        <SkillTab Icon={React} Name="React" Stars="3"/>
        <SkillTab Icon={Tailwind} Name="Tailwind" Stars="4"/>
        <SkillTab Icon={Gamemaker} Name="Gamemaker" Stars="4"/>
      </div>
    </div>
  );
}

export default About;
