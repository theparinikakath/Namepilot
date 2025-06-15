import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Listen from "./components/Listen";
import Mission from "./components/Mission";
import Industries from './components/Industries';
import Everyone from "./components/Everyone";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ReviewManagement from './components/ReviewManagement';
import ListingsManagement from './components/ListingsManagement';
import SmartCampaigns from './components/SmartCampaigns';
import Mentions from './components/Mentions';
import Features from './components/Features';
import Schools from './components/Schools';
import Hotels from './components/Hotels';
import Colleges from './components/Colleges';
import Contact from './components/Contact';
import Signup from './components/Signup';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Listen />
      <Mission />
      <Industries />
      <Everyone />
      <Clients />
    </>
  );
}

function App() {
  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-management" element={<ReviewManagement />} />
          <Route path="/services" element={<ListingsManagement />} />
          <Route path="/smart-campaigns" element={<SmartCampaigns />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/industries/schools" element={<Schools />} />
          <Route path="/industries/hotels" element={<Hotels />} />
          <Route path="/industries/colleges" element={<Colleges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />{/*all others- error*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
