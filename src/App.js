import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import Navigation from "./components/shared/Navigation/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            {/*<Header />*/}
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    {routes.map((route) => (
                        <Route {...route} />
                    ))}
                </Routes>
            </BrowserRouter>
            {/*<Footer />*/}
        </>
    );
}

export default App;
