import Image from 'next/image'
import Hero from './components/Home/Hero/Hero'
import About from './components/Home/About/About'
import CardShowCase from './components/CardShowCase/CardShowCase'
import Video from './components/Home/Video/Video'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <CardShowCase/>
      <Video/>
    </main>
  )
}
