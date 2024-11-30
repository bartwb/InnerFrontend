import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Menu from './pages/Menu.js';
import WorkLists from './pages/WorkLists.js';
import Reports from './pages/Reports.js';
import ReportScreen from './pages/ReportScreen.js';
import DetailsMonitor from './pages/DetailsMonitor.js';
import ImageMonitor from './pages/ImageMonitor.js';
import GetBattery from './pages/GetBattery.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/worklists" element={<WorkLists/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/reports/create/:batteryId" element={<ReportScreen/>} />
        <Route path="/detailsmonitor" element={<DetailsMonitor />} />
        <Route path="/imagemonitor" element={<ImageMonitor />} />
        <Route path="/getbattery" element={<GetBattery/>} />
      </Routes>
    </div>

  </Router>
  );
}

export default App;