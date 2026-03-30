import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeFeed from './pages/HomeFeed';
import Auth from './pages/Auth';
import Upload from './pages/Upload';
import NotesViewer from './pages/NotesViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeFeed />} />
          <Route path="auth" element={<Auth />} />
          <Route path="upload" element={<Upload />} />
          <Route path="notes/:id" element={<NotesViewer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
