import React from "react"
import {
  skillsmain,
  skillscontainer,
  skillsleft,
  skill,
  skillsright,
} from "../styles/skills.module.css"
const SkillsCovered = () => {
  return (
    <div className={skillsmain}>
      <div className={skillscontainer}>
        <div className={skillsleft}>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Prospecting</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Lead Generation</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Appointment closing</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Referrals</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Sales scripting</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Trust and repport</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Objection Handling</p>
          </div>
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Goal setting</p>
          </div>{" "}
          <div className={skill}>
            <img
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
              alt=""
            />
            <p>Deal closing</p>
          </div>
        </div>
        <div className={skillsright}>
          <h2>Skills Covered Across the program</h2>
          <p>
            You'll become a confident Sales Leader post successful completion of
            the course, because during the Executive Program in Strategic Sales
            Management you will.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillsCovered
