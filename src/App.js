import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Account from './Pages/Login/Account/Account';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>

                <Header />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/account">
                        <Account />
                    </Route>

                    <PrivateRoute path="/service/:serviceID">
                        <ServiceDetails />
                    </PrivateRoute>

                    <Route path="*">

                    </Route>
                </Switch>
                
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
