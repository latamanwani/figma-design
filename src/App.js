
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
 import HomePage from './components/HomePage';
  import Product from './components/Product'
import PageDetail from './components/PageDetail';
import Store from './components/Store';
import Collection from './components/Collection';
import SubmitPage from './components/SubmitPage';
import Follow from './components/Follow';
import Footer from './components/Footer';
import Line from './components/Line';

function App() {
  return (
    <div className="h-full">
    <Navbar/>
    <Header/>
     <HomePage/> 
    <Product/> 
    <PageDetail/>
     <Store/>
    <Collection/>
    <SubmitPage/>
    <Follow/>
    <Footer/>
    <Line/>
    
     </div>
  );
}

export default App;
