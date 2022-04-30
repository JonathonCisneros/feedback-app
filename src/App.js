import { v4 as uuidv4 } from 'uuid';  // unique ID package - Terminal: npm install uuid
import { useState } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
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
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={ addFeedback }/>
        <FeedbackStats feedback={ feedback }/>
        <FeedbackList feedback={ feedback } handleDelete= { deleteFeedback } />
      </div>
    </>
  )
}

export default App;
