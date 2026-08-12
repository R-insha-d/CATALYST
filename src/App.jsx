import './App.css'
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import About from './components/home/About';
import Courses from './components/home/Courses';
import Features from './components/home/Features';
import SkillJourney from './components/home/SkillJourney';
import Pathway from './components/home/Pathway';
import Placements from './components/home/Placements';
import Faculty from './components/home/Faculty';
import Platform from './components/home/Platform';
import YouTube from './components/home/YouTube';
import CtaStrip from './components/home/CtaStrip';
import Contact from './components/home/Contact';
import Faq from './components/home/Faq';
import Footer from './components/layout/Footer';
import ScrollReveal from './components/ui/ScrollReveal';
import FloatingContact from './components/ui/FloatingContact';
import FreeLearning from './components/home/FreeLearning';


export default function App() {
  return (
    <>
      <div>
        <Header />
        <main id="top">
          <Hero />
          <Stats />
          <About />
          <Features />
          <SkillJourney />
          <Courses />
          <Pathway />
          <Placements />
          <Faculty />
          <Platform />
          <YouTube />
          <FreeLearning />
          <CtaStrip />
          <Contact />
          <Faq />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  )
}
