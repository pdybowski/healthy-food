import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
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
