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
      <div className="bg-white p-10 rounded w-2/6 h-auto">
        <div className="flex items-baseline mb-5">
          <h2 className="mr-4">{project.title}</h2>
          <p>{project.type}</p>
        </div>

        <div className="space-y-2">
          <p>{project.desc}</p>
          <div className="flex">
            <p className="mr-5">
              <a
                href={project.link}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            {project.presentation && (
              <p>
                <a
                  href={project.presentation}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  발표 자료
                </a>
              </p>
            )}
          </div>
          <p>{project.period}</p>
          <p>{project.skill}</p>
          <p>{project.role}</p>
          <h4>느낀 점</h4>
          <p className="whitespace-pre-wrap pt-0">{project.review}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
