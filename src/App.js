import { v4 as uuidv4 } from 'uuid';  // unique ID package - Terminal: npm install uuid
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import FeedbackData from './data/FeedbackData';


function App ( ) {
  const [ feedback, setFeedback ] = useState( FeedbackData );

  const addFeedback = ( newFeedback ) => {
    newFeedback.id = uuidv4( );
    setFeedback( [ newFeedback, ...feedback ] );  // adds new feedback to list (on top)
  }

  const deleteFeedback = ( id ) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter( ( item ) => item.id !== id ))
    }
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact path='/'
            element={
              <>
                <FeedbackForm handleAdd={ addFeedback }/>
                <FeedbackStats feedback={ feedback }/>
                <FeedbackList feedback={ feedback } handleDelete= { deleteFeedback } />
              </>
            }
          />
          <Route path='/about' element={ <AboutPage /> } />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App;
