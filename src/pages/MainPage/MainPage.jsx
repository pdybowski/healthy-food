import Banner from '../../components/mainPage/Banner/Banner.jsx';
import Contact from '../../components/mainPage/Contact/Contact.jsx';
import { Footer } from '../../components/mainPage/Footer/Footer.jsx';
import './style.css';

export const MainPage = () => {
    return (
        <main>
            <Banner />
            <Contact />
            <Footer />
        </main>
    );
};
