import Header from './components/Header/Header'
import VerseBar from './components/VerseBar/VerseBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat'

function App() {
  return (
    <>
      <Header />
      <VerseBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

export default App
