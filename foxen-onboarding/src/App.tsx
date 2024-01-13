import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigationBar from './Components/TopNavigation/Navigation';
import OrgChartPage from './Pages/Documentation/OrgChart/OrgChartPage';
import PageContainer from './Components/PageContainer/PageContainer';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing/Landing';
import HelpfulLinksPage from './Pages/HelpfulLinks/HelpfulLinksPage';
import DataIngestFlowPage from './Pages/Documentation/DataIngestFlow/DataIngestFlowPage';
import DomainModelPage from './Pages/Documentation/DomainModel/DomainModel';

function App() {

  return (
    <>
      <div>
        <TopNavigationBar />
        <PageContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/org-chart" element={<OrgChartPage />} />
              <Route path="/helpful-links" element={<HelpfulLinksPage />} />
              <Route path="/data-ingest-flow" element={<DataIngestFlowPage />} />
              <Route path="/domain-model" element={<DomainModelPage />} />
            </Routes>
          </BrowserRouter >
        </PageContainer>
        
      </div>
    </>
  )
}

export default App
