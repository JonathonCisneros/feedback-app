import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext( );

export const FeedbackProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ feedback, setFeedback ] = useState( [ ] );
    const [ feedbackEdit, setFeedbackEdit ] = useState({
     item: { },
     edit: false,
    });

    // Guides user to the form when edit button is clicked
    const goToTop = ( ) => {
      window.scrollTo( {
        top: 0,
        behavior: 'smooth',
      } );
    };

   // React hook which renders feedback from json server
   useEffect( ( ) => {
     fetchFeedback( );
   }, [  ] );

   // Fetch feeback from json server
   const fetchFeedback = async ( ) => {
     const response = await fetch('/feedback?_sort=id&_order=desc');  // Location of database
     const data = await response.json( );

     setFeedback( data );
     setIsLoading( false );
   }

   // Add feedback
   const addFeedback = async ( newFeedback ) => {
     const response = await fetch('/feedback', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify( newFeedback )
     } );

     const data = await response.json( );

     setFeedback( [ data, ...feedback ] );  // adds new feedback to list (on top)
   }

   // Delete feedback
   const deleteFeedback = async ( id ) => {
    if ( window.confirm('Are you sure?' )) {
      const response = await fetch( `/feedback/${ id }`, { method: 'DELETE' } );
      setFeedback( feedback.filter( ( item ) => item.id !== id ) );
    }
  }

  // Update feedback item
  const updateFeedback = async ( id, updItem  ) => {
    const response = await fetch( `/feedback/${ id }`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( updItem )
    } );

    const data = await response.json( );

    setFeedback(
     feedback.map( ( item ) => item.id === id ? { ...item, ...data } : item )
    );
  }

  // Set item to be updated
  const editFeedback = ( item ) => {
    goToTop( );  // Scroll to the top where form is

    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  // Pass functions/state via FeedbackContext.Provider
  // editFeedback is the function, feedbackEdit is the global state
  return (
    <FeedbackContext.Provider
       value={{
          feedback,
          deleteFeedback,
          addFeedback,
          editFeedback,
          feedbackEdit,
          updateFeedback,
          isLoading
       }}
    >
       { children }
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
