import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuickSms from './pages/QuickSms';
import Overview from './pages/Overview';
import Support from './pages/support';

const RoutePages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Overview />} />

                <Route path="/quicksms" element={<QuickSms />} />

                <Route path="/quick-sms" element={<QuickSms />} />
                <Route path="/support" element={<Support />} />

            </Routes>
        </BrowserRouter>
    );
}

export default RoutePages;

