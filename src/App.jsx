
import { Suspense } from 'react';
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './component/PricingOption/PricingOption';
import ResultChart from './component/ResultChart/ResultChart';
const pricingPromise = fetch('Pricing.json').then(res=> res.json());

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>

      <ResultChart></ResultChart>
    </>
  )
}

export default App
