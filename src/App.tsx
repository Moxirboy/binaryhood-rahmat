import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Browse from './pages/Browse';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import { MyGlobalContext } from './hooks/Context';
import PrivateRoute from './routes/Outlet'
import Organization from './pages/Organization'
import Rewards from './pages/Rewards'
import Analytics from './pages/Analytics'
import Recognitions from './pages/Recognitions'

function App() {
  const [user, setUser] = useState(false);

  return (
    <MyGlobalContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/sign-in' element={<Login />} />
        <Route path='/register' element={<Register />} />

				<Route path='' element={<PrivateRoute />}>
					<Route path='/recognition' element={<Recognitions />} />
					<Route path='/organization' element={<Organization />} />
					<Route path='/rewards' element={<Rewards />} />
					<Route path='/statistics' element={<Analytics />} />
				</Route>
      </Routes>
    </MyGlobalContext.Provider>
  );
}

export default App;