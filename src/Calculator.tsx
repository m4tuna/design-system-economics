import React, { useState } from 'react';
import './App.css';
import FancyNumberPicker from './FancyNumberPicker';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const SavingsCalculator = () => {
  const [productionTime, setProductionTime] = useState(10);
  const [supportCosts, setSupportCosts] = useState(20);
  const [componentLifetime, setComponentLifetime] = useState(3);
  const [integrationCosts, setIntegrationCosts] = useState(2);
  const [amountOfProjects, setAmountOfProjects] = useState(5);

  const calculateWithoutDS = () => {
    return (productionTime + (supportCosts * componentLifetime)) * amountOfProjects;
  };

  const calculateWithDS = () => {
    return (integrationCosts * amountOfProjects);
  };

  const withoutDS = calculateWithoutDS();
  const withDS = calculateWithDS();
  const savings = withoutDS - withDS;

  return (
    <div className='container'>
      <div className="back">
        <Link to="/" className="back-button"><IoIosArrowBack size={25} /></Link>
      </div>
      <h1 className='fancyTitle'>Component Cost Calculator</h1>
      <p>Calculate the value of using a design system by the component.</p>
      <div className='pickerContainer'>
        <FancyNumberPicker label="Production Time (hours)" value={productionTime} onChange={setProductionTime} />
        <FancyNumberPicker label="Support Costs (hours/year)" value={supportCosts} onChange={setSupportCosts} />
        <FancyNumberPicker label="Component Lifetime (years)" value={componentLifetime} onChange={setComponentLifetime} />
        <FancyNumberPicker label="Integration Costs (hours)" value={integrationCosts} onChange={setIntegrationCosts} />
        <FancyNumberPicker label="Amount of Projects" value={amountOfProjects} onChange={setAmountOfProjects} />
      </div>
      <div className="results">
        <h2>Results</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value (hours)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cost without Design System</td>
              <td>{withoutDS}</td>
            </tr>
            <tr>
              <td>Cost with Design System</td>
              <td>{withDS}</td>
            </tr>
            <tr>
              <td>Hours Saved Over {componentLifetime} Years</td>
              <td>{savings}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="explanation">
        <h2>Explanation of Metrics</h2>
        <p><strong>Production Time (h):</strong> The time required to produce the component.</p>
        <p><strong>Support Costs (h per year):</strong> The time required for ongoing support and maintenance of the component each year.</p>
        <p><strong>Component Lifetime (years):</strong> The expected lifetime of the component, during which it requires support.</p>
        <p><strong>Integration Costs (h):</strong> The time required to integrate the component.</p>
        <p><strong>Amount of Projects:</strong> The number of projects that will use the component.</p>
      </div>
    </div>
  );
};

export default SavingsCalculator;
