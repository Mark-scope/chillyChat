import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuickSms from './pages/QuickSms';
import Overview from './pages/Overview';
import Support from './pages/support';
import SmsHistory from './pages/SmsHistory';

const RoutePages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Overview />} />

                <Route path="/quicksms" element={<QuickSms />} />

                <Route path="/quick-sms" element={<QuickSms />} />
                <Route path="/support" element={<Support />} />
                <Route path = "/SmsHistory" element={<SmsHistory/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutePages;

