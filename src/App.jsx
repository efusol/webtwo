import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import JoinView from './views/JoinView';
import LoginView from './views/LoginView';
import ScrollToTop from './ScrollToTop';
import BaseballView from './views/BaseBallView';
import BaseBallDetailView from './views/BaseBallDetailView';
import BaseballHomeView from './views/BaseballHomeView';
import BaseBallHistoryView from './views/BaseBallHistoryView';
import BoardListView from './views/BoardListView';
import BoardWriteView from './views/BoardWriteView';
import BoardDetailView from './views/BoardDetailView'; 
import BoardModifyView from './views/BoardModifyView';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path='/baseballhome' element={<BaseballHomeView />} />
          <Route path='/baseball' element={<BaseballView />} />
          <Route path='/player/:id' element={<BaseBallDetailView />} />
          <Route path='/baseballhistory' element={<BaseBallHistoryView />} />
          <Route path='/join' element={<JoinView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/board' element={<BoardListView />} />
          <Route path='/boardwrite' element={<BoardWriteView />} />
          <Route path='/boardDetail/:subject' element={<BoardDetailView />} />
          <Route path='/boardModify/:subject' element={<BoardModifyView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;