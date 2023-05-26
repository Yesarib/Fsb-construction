import React from 'react'
import Upper from './Upper'
import About from './About'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Featured from './Featured'

const home = () => {
  return (
    <div>
        <Upper />
        <About />
        <Services />
        <WhyChoose />
        <Featured />
    </div>
  )
}

export default home