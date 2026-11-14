import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import InterviewPage from './pages/interviewPage';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';
import InterviewReport from './pages/interviewReport';
import InterviewHistory from './pages/InterviewHistory';
import Pricing from './pages/Pricing';
export const ServerUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error?.response?.data || error.message);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path='/history' element={<InterviewHistory />} />
      <Route path='/report' element={<InterviewReport />} />
      <Route path='/report/:id' element={<InterviewReport />} />
      <Route path='/Report' element={<InterviewReport />} />
    </Routes>
  );
};

export default App;