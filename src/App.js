import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Search from "./components/Search";

function App() {
  return (
    <>
    <Header />
    <Switch>
       <Route exact path="/" component={Home} exact></Route> 
       <Route exact path="/products" component={Product}></Route>
       <Route exact path="/products/:id" component={ProductDetail}></Route>
       <Route exact path="/cart" component={Cart}></Route>
       <Route exact path="/about" component={About}></Route> 
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/checkout" component={Checkout}/>
       {/* <Redirect to="/" /> */}
       <Route path="/search/:inputValue" exact>
         <Search/>
       </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
