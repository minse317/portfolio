import React from 'react'
import { project } from '../constants/Index'

function Project() {
  return (
    <div className="p-20">
      <div className="text-5xl font-bold">Project</div>

      <div className="flex flex-wrap">
        {project.map((item, index) => (
          <div
            key={index}
            className="w-[430px] border-b-4 border-[black] bg-transparent m-5 p-5 space-y-2"
          >
            <h2 className="mb-5">{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.period}</p>
            <p>{item.skill}</p>
            <p>{item.role}</p>
            <p>
              <a href={item.link} target="_blank">
                GitHub
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
