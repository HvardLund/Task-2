import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TranslationPage from './pages/TranslationPage';
import PageHeader from './components/PageHeader/PageHeader';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageHeader></PageHeader>
      <NavLink to="/translate">Translation</NavLink>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/translate" element={<TranslationPage/>} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Railway
