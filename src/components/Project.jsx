import React, { useState } from 'react'
import { project } from '../constants/Index'
import ProjectModal from './ProjectModal'

function Project() {
  const [projectDetail, setProjectDetail] = useState(null)

  const handleOnClose = () => setProjectDetail(null)

  return (
    <div className="p-20">
      <div className="text-5xl font-bold">Project</div>

      <div className="flex flex-wrap">
        {project.map((item, index) => (
          <button
            key={index}
            onClick={() => setProjectDetail(index)}
            className="w-[440px] border-l-2 border-[black] bg-transparent m-5 p-5 space-y-2 text-left"
          >
            <h2 className="mb-5">{item.title}</h2>
            <p>{item.desc}</p>
          </button>
        ))}
      </div>
      <ProjectModal onClose={handleOnClose} project={project[projectDetail]} />
    </div>
  )
}

export default Project
