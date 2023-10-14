import './App.css';
import About from './components/About';
import BoxSection from './components/BoxSection';
import ClientSection from './components/ClientSection';
import ContactSection from './components/ContactSection';
import EndSection from './components/EndSection';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import Services from './components/Services';
import StudiesSection from './components/StudiesSection';
import TopHeader from './components/TopHeader';

function App() {
  return (
<>
   <TopHeader/>
   <BoxSection/>
   <Services/>
   <StudiesSection/>
   <About/>
   <ClientSection/>
   <NewsSection/>
   <ContactSection/>
   <Footer/>
   <EndSection/>
</>
  );
}

export default App;
