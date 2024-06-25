import React from 'react'
import { project } from '../constants/Index'

function Project({ setProjectDetail }) {
  return (
    <div className="p-20">
      <div className="text-5xl font-bold">Project</div>

      <div className="flex flex-wrap">
        {project.map((item, index) => (
          <button
            key={index}
            onClick={() => setProjectDetail(item)}
            className="group relative inline-block overflow-hidden w-[440px] border-l-2 border-black bg-white m-5 p-5 space-y-2 text-left "
          >
            <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative group-hover:text-white">
              <h2 className="mb-5">{item.title}</h2>
              <p>{item.desc}</p>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Project
