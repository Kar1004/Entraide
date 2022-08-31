import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './components/layoutComponents';
import HomePage from './pages/HomePage'
import HelperPage  from './pages/HelperPage'
import ApplicantPages from './pages/ApplicantPage'
import NotfoundPage  from './pages/NotfoundPage'

function App() {
  return (
    <Layout>
       <Routes>
         <Route path='/' element={<HomePage />}></Route>
         <Route path='Demandeur' element={<ApplicantPages />}></Route>
         <Route path='Aidant' element={<HelperPage />}></Route>
         <Route path='*' element={<NotfoundPage/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
