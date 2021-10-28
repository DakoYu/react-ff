import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Series from './components/Series';
import CardSummary from './components/CardSummary';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Image />
      <main>
        <Series />
        <CardSummary />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
