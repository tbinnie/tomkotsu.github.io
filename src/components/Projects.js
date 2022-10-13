import React from 'react'
import SoundscapeProject from './SoundscapeProject'
import FmnProject from './FmnProject'

const Projects = props => {
  return (
    <section className="projects" id="projects">
      <h1><span className='number'>02. </span>Projects</h1>
      <SoundscapeProject />
      <FmnProject />
    </section>
  )
}

export default Projects
