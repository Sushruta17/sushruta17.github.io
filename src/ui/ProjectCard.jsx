import React, { useState } from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl, category } = project;
  const [showAllTechs, setShowAllTechs] = useState(false);
  const visibleTechs = showAllTechs ? technologies : technologies.slice(0, 4);

  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 card-3d">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:bg-white hover:scale-110 transition-all duration-300'
              title='View Demo'
            >
              <ExternalLink className='w-4 h-4 text-primary' />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:bg-white hover:scale-110 transition-all duration-300'
              title='View Code'
            >
              <Github className='w-4 h-4 text-slate-700' />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm rounded-full shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {visibleTechs.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 text-xs font-medium text-primary bg-primary/5 border border-primary/10 rounded-lg'
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <button
              onClick={() => setShowAllTechs(!showAllTechs)}
              className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors duration-200'
            >
              {showAllTechs ? 'Show less' : `+${technologies.length - 4} more`}
            </button>
          )}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
            <TrendingUp className='w-4 h-4 text-green-500' />
            <p className='text-sm font-medium text-green-600'>{metrics}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard