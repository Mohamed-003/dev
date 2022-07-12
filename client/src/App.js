import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Post from './components/post/Post';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            {/* </Routes> */}
            {/* <section className='container'> */}
            {/* <Routes> */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create-profile' element={<CreateProfile />} />
            <Route path='/dashboard/edit-profile' element={<EditProfile />} />
            <Route
              path='/dashboard/add-experience'
              element={<AddExperience />}
            />
            <Route path='/dashboard/add-education' element={<AddEducation />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<Post />} />
          </Routes>
          <Alert />
          {/* </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
