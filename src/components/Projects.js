import React from 'react'
import SoundscapeProject from './SoundscapeProject'
import FmnProject from './FmnProject'
import FadeInSection from './FadeInSection'

const Projects = props => {
  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">
        <span className="number">02. </span>Projects
      </h1>
      <FadeInSection>
        <SoundscapeProject />
      </FadeInSection>
      {/* <FadeInSection>
        <FmnProject />
      </FadeInSection> */}
    </section>
  )
}

export default Projects
