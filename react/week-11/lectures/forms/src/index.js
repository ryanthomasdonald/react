import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from "./components/About"
import FAQ from "./components/FAQ"
import BaseLayout from "./components/layout/BaseLayout"
import Forms from "./components/layout/Forms"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// <Routes> is switching through the various paths
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/faq/:faqID" element={<FAQ />}/>
          <Route path="/forms" element={<Forms />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);