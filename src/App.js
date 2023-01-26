import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TranslationPage from './pages/TranslationPage';
import PageHeader from './components/PageHeader/PageHeader';
import ProfilePage from './pages/ProfilePage';
import { useSelector } from 'react-redux';

function App() {

  const loggedIn = useSelector((state) => state.updateUser.id) > 0

  return (
    <BrowserRouter>
      <div className="App">
        <PageHeader></PageHeader>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            {loggedIn && <>
              <Route path="/translate" element={<TranslationPage/>} />
              <Route path="/profile" element={<ProfilePage/>}/>
            </>}
            <Route path="*" element={<LoginPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;