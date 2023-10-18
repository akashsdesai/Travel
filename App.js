import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destination/Destinations';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';
import Carouse from './components/Carouse/Carouse';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <Carouse />
    <Footer />
   </div>
  );
}

export default App;
