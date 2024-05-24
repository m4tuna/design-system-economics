import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';
import { FaAirbnb, FaAtlassian, FaCalculator, FaChartPie, FaLightbulb, FaQuoteLeft, FaQuoteRight, FaShopify } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import SavingsCalculator from './Calculator';
import { useState } from 'react';
import { CostSavingsChart } from './CostSavings';
import { SiBuymeacoffee, SiIbm } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We've seen proven increases in speed to market of around 30%. The other big change we've noticed is consistency across our experiences is much better. The bar for quality has increased, which means customer satisfaction should increase as a result. We've also seen the impact in recruiting – it's a lot easier to hire people and bring them up to speed.",
      author: "Nate Baldwin, Design Systems Manager at TELUS Digital",
      stat: "30% increase in speed to market",
    },
    {
      quote: "With our design system, the speed at which designers and developers can build new features and pages for our website has improved dramatically. We’ve seen increases of up to 54% in the speed at which designers can complete tasks, and 22% in terms of developer velocity.",
      author: "Jürgen Spangl, Head of Design at Atlassian",
      stat: "54% increase in design speed & 22% increase in developer velocity",
    },
    {
      quote: "I’m so grateful for our internal design system. It’s made our team and workflow so much more efficient, and our customers have a consistent, recognizable experience when using our apps.",
      author: "Kelly Harrop, Product Designer at HubSpot",
      stat: "", 
    },
    {
      quote: "Design systems are a critical piece of infrastructure for creating and maintaining successful products and brands. They ensure a consistent experience that is easy to use, maintain, and scale, allowing businesses to build better products faster.",
      author: "Brad Frost, Author of Atomic Design",
      stat: "",
    },
  ];
  const TestimonialCard = ({ quote, author, stat }: { quote: string, author: string, stat: string }) => (
    <div className="testimonial-card">
      <FaQuoteLeft className="quote-icon" />
      <p className="quote-stat">{stat}</p>
      <p className="quote-text">{quote}</p>
      <FaQuoteRight className="quote-icon" />
      <p className="quote-author">- {author}</p>
    </div>
  );
  
  return (
    <section className="testimonials-section">
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} /> 
        ))}
      </div>
    </section>
  );
}

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen ? (
        <FiX className='menuButton open' size={30} onClick={toggleMenu} />
      ) : (
        <FiMenu className='menuButton' size={30} onClick={toggleMenu} />
      )}
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <nav>
          <ul>
          <li><a href="/" className={location.pathname === "/" ? "active" : ""}><FiHome size={20} /> Home</a></li>
            <li><a href="/stats" className={location.pathname === "/stats" ? "active" : ""}><FaChartPie size={20} /> Statistics</a></li>
            <li><a href="/calculator" className={location.pathname === "/calculator" ? "active" : ""}><FaCalculator size={20} /> Calculator</a></li>
          </ul>
          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            <FaLightbulb size={20} />
            <p>All metrics are a work in progress.</p>
          </div>
          <div className="bottom">
            <a
              className="App-link"
              href="https://mikefortuna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mikefortuna
            </a>
          </div>
        </nav>
      )}
    </div>
    </>
  );
}

function HomePage() {
  const data = [
    {
      company: 'Shopify',
      icon: <FaShopify />,
      text: 'Following the launch of their Polaris design system, Shopify saw a',
      increase1: '60%',
      increase1Text: 'increase in the speed of design iterations and a',
      increase2: '200%',
      increase2Text: 'increase in developer efficiency.'
    },
    {
      company: 'IBM',
      icon: <SiIbm />,
      text: "IBM's Carbon design system resulted in a",
      increase1: '30%',
      increase1Text: 'reduction in development time and a',
      increase2: '20%',
      increase2Text: 'increase in design consistency across their products.'
    },
    {
      company: 'Atlassian',
      icon: <FaAtlassian />,
      text: 'With the adoption of their design system, Atlassian reported a',
      increase1: '54%',
      increase1Text: 'reduction in the time it takes to design new features and a',
      increase2: '22%',
      increase2Text: 'decrease in development time.'
    },
    {
      company: 'Airbnb',
      icon: <FaAirbnb />,
      text: "Airbnb's design system led to a",
      increase1: '50%',
      increase1Text: 'reduction in the time it takes to implement new features and a',
      increase2: '60%',
      increase2Text: 'decrease in the number of production bugs related to UI.'
    }
  ];
  return (
    <div className="home">
      <h1 className='fancyTitle'>2024 Design System Insights</h1>
      <p>Design systems are more than just efficiency tools for teams; under the hood, they are a driving significant cost savings over time and accelerated delivery when implemented well. </p>
      <button className='calculator-button'><Link to="/calculator">Calculate your savings</Link></button>
      <h2>Industry Trends</h2>
      <div className="stats">
        {data.map((item, index) => (
          <div key={index} className="stats-item">
            <h1 className="icon">{item.icon}</h1>
            <div className="percentages">
              <h1 className="percentage">{item.increase1}, {item.increase2} <FaArrowTrendUp /></h1>
            </div>
            <p>{item.text} <span className="percentage-text">{item.increase1}</span> {item.increase1Text} <span className="percentage-text">{item.increase2}</span> {item.increase2Text}</p>
          </div>
        ))}
      </div>
      <TestimonialsSection /> 
    </div>
  );
}

function StatsPage() {

  return (
    <div className='home'>
      <div className="back">
        <Link to="/" className="back-button"><IoIosArrowBack size={25} /></Link>
      </div>
      <h1 className='fancyTitle'>Design System Statistics</h1>
      <p>Learn more about the value of Design Systems over time.</p>
      <CostSavingsChart />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/calculator" element={<SavingsCalculator />} />
        </Routes>
        <div className="footer">
          <a href="https://buymeacoffee.com/m42na" target="_blank" className="tooltip" data-tooltip="Buy me a coffee" rel="noreferrer">
            <SiBuymeacoffee />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
