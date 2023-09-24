import "./App.css";
import Spinner from "./components/AppHeader/Spinner/Spinner";
import AppHeader from "./components/AppHeader/AppHeader";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const QRpage = lazy(() => import("./components/pages/QR-page")),
  VideoPage = lazy(() => import("./components/pages/VIdeo")),
  MapPage = lazy(() => import("./components/pages/MapPage"));

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<QRpage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
