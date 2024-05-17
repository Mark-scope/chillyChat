import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuickSms from './pages/QuickSms';
import Overview from './pages/Overview';

const RoutePages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/quicksms" element={<QuickSms />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutePages;

