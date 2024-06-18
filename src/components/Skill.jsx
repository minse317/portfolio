import React from "react"
import { fronted, etc } from "../constants/Index"

function Skill() {
  return (
    <div className="p-20">
      <h1 className="mb-10">Skill</h1>

      <h2 className="my-5">Fronted</h2>
      {fronted.map((tech, index) => (
        <h3
          key={index}
          className="inline-block mr-10 mb-10"
        >{`{ ${tech} }`}</h3>
      ))}

      <h2 className="my-5">etc</h2>
      {etc.map((tech, index) => (
        <h3 key={index} className="inline-block mr-10">{`{ ${tech} }`}</h3>
      ))}
    </div>
  )
}

export default Skill
