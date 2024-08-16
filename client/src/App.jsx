import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'; 
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
