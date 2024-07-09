import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import JoinView from './views/JoinView';
import LoginView from './views/LoginView';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path='/join' element={<JoinView />} />
          <Route path='/login' element={<LoginView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;