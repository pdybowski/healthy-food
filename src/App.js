import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/shared';
import { Footer } from './components/mainPage/footer/Footer';
import Views from './Views';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Views />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
