import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Layout } from '@components/Layout';
import { Home } from '@pages/Home';
import { Hotels } from '@pages/Hotels';
import { Hotel } from '@pages/Hotel';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact  path="/" >
              <Route exact index element={<Home />} />
              <Route exact path="/hotels" element={<Hotels />} />
              <Route exact path="/hotels/:hotelId" element={<Hotel />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;