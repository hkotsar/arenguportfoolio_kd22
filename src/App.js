import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import PracticePage from './pages/Practice';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import PhoneNav from './components/phoneNav/PhoneNav';
import Tab1 from './components/Tabs/Tab1';
import Tab2 from './components/Tabs/Tab2';
import Tab3 from './components/Tabs/Tab3';
import Tab4 from './components/Tabs/Tab4';
import Tab5 from './components/Tabs/Tab5';
import EducationDetails from './pages/EducationDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projektid" element={<ProjectsPage />}>
          <Route path="/projektid/ux-analuus" element={<Tab1 />} />
          <Route path="/projektid/veebikujundus" element={<Tab2 />} />
          <Route path="/projektid/veebiarendus" element={<Tab3 />} />
          <Route path="/projektid/graafiline-disain" element={<Tab4 />} />
          <Route path="/projektid/muud-opingud" element={<Tab5 />} />
        </Route>
        <Route path="/projektid/:id" element={<ProjectDetails />} />
        <Route path="/opingud/:id" element={<EducationDetails />} />
        <Route path="/praktika" element={<PracticePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PhoneNav />
      <Footer />
    </>
   
  );
}

export default App;
