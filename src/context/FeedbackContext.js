import { v4 as uuidv4 } from 'uuid';  // unique ID package - Terminal: npm install uuid
import { createContext, useState } from 'react';

const FeedbackContext = createContext( );

export const FeedbackProvider = ({ children }) => {
   const [ feedback, setFeedback ] = useState([
      {
         id: 1,
         text: 'This text is from context!',
         rating: 10,
      },
      {
         id: 2,
         text: 'This is the 2nd feedback item',
         rating: 3,
      },
   ]);

   const [ feedbackEdit, setFeedbackEdit ] = useState({
     item: { },
     edit: false,
   });

   // Add feedback
   const addFeedback = ( newFeedback ) => {
     newFeedback.id = uuidv4( );
     setFeedback( [ newFeedback, ...feedback ] );  // adds new feedback to list (on top)
   }

   // Delete feedback
   const deleteFeedback = ( id ) => {
    if ( window.confirm('Are you sure?' )) {
      setFeedback( feedback.filter( ( item ) => item.id !== id ) );
    }
  }

  // Update feedback item
  const updateFeedback = ( id, updItem  ) => {
     setFeedback(
       feedback.map( ( item ) => item.id === id ? { ...item, ...updItem } : item )
     );
  }

  // Set item to be updated
  const editFeedback = ( item ) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  // Pass functions/state via FeedbackContext.Provider
  // editFeedback is the function, feedbackEdit is the piece of state
   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
         }}
      >
         { children }
      </FeedbackContext.Provider>
   )
}

export default FeedbackContext;
