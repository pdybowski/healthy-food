import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

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
