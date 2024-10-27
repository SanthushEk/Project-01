import React from 'react'
import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import Title from './Componenets/Title'
import Video_section from './Componenets/Video_section'
import Slider from './Componenets/Slider'
import Form from './Componenets/Form'
import Banner from './Componenets/Banner'
import Footer from './Componenets/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title="The Future Is Autonomous" subtitle="To create a sustainable future, we must democratize transportation. We do this by making driving more efficient, affordable and safe. Autonomy makes this future possible, today." />
      <Video_section/>
      <Title title="Autonomy for All" subtitle="he future of autonomy and artificial intelligence will be realized through the creation of a fleet of autonomous vehicles and robots."/>
      <Slider/>
      <Form/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App