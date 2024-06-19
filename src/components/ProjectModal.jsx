import React from 'react'

function ProjectModal({ project, onClose }) {
  const handleOnClose = e => {
    if (e.target.id === 'container') onClose()
  }

  if (!project) return null

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-10 rounded w-2/6 h-auto overflow-y-auto">
        <h2 className="mb-5">{project.title}</h2>
        <div className="space-y-4">
          <p>{project.desc}</p>
          <p>{project.period}</p>
          <p>{project.skill}</p>
          <p>{project.role}</p>
          <p>
            <a
              href={project.link}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
