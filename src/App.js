import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext'; // use '{ }' since FeedbackProvider is not a default export


function App ( ) {
  return (
    // use FeedbackProvider to allow for use of useContext
    <FeedbackProvider> 
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                </>
              }
            />
            <Route path='/about' element={ <AboutPage /> } />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;
