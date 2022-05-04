import { motion, AnimatePresence } from 'framer-motion'; // For animation fun, framer-motion@4.1.17
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList ( ) {
  const { feedback, isLoading } = useContext( FeedbackContext );   // pulls state from FeedbackContext

  if ( !isLoading && ( !feedback || feedback.length === 0 ) ) {
    return <p>No feedback yet!</p>
  }

    // Animated version of adding and deleting feedback items
  return (
    isLoading ? (
        <Spinner />
      ) :
      (
          <div className='feedback-list'>
          <AnimatePresence>
            { feedback.map( ( item ) => (
              <motion.div
                key={ item.id }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeedbackItem
                  key={ item.id }
                  item={ item }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )
  );

  // Non-animated version of adding and deleting feedback items
  // return (
  //   <div className='feedback-list'>
  //     { feedback.map( ( item ) => (
  //       <FeedbackItem
  //         key={ item.id }
  //         item={ item }
  //         handleDelete= { handleDelete }
  //       />
  //     ))}
  //   </div>
  // )
}


export default FeedbackList;
