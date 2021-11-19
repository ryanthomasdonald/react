import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from "./components/BaseLayout"
import IssueDetail from "./components/IssueDetail"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/issue/:issueID" element={<IssueDetail />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);