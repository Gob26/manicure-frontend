import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import CitiesPage from '../../pages/Cities/CitiesPage';
import CabinetPage from '../../pages/Cabinet/CabinetPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cities" element={<CitiesPage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;
