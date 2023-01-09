import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './NotFound';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import PriceActionRules from './pages/PriceActionRules';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <div className = "App">
                <Navbar />
                <div className="app-container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/features">
                            <Features />
                        </Route>
                        <Route exact path="/blog">
                            <Blog />
                        </Route>
                        <Route exact path="/pricing">
                            <Pricing />
                        </Route>
                        <Route exact path="/price-action">
                            <PriceActionRules />
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
