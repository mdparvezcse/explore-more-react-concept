
import { Suspense } from 'react';
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './component/PricingOption/PricingOption';
import ResultChart from './component/ResultChart/ResultChart';
import BarCharts from './component/BarChart/BarCharts';
import axios from 'axios';
import MarkChart from './component/MarkChart/MarkChart';

const pricingPromise = fetch('Pricing.json').then(res=> res.json());
const markPromise = axios.get('ResultMarkData.json')


function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>

      <ResultChart></ResultChart>
      <BarCharts></BarCharts>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <MarkChart markPromise={markPromise}></MarkChart>
      </Suspense>
    </>
  )
}

export default App
