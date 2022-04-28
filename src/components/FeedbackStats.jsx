import PropTypes from 'prop-types';

function FeedbackStats ( { feedback } ) {

  // Calculate ratings average
  let average = feedback.reduce( ( acc, cur ) => {
    return acc + cur.rating
  }, 0 ) / feedback.length;

  average = average.toFixed( 1 ).replace( /[.,]0$/, ' ' ); // Prevents 4.678, displays 8.5 instead

  return (
   <div className="feedback-stats">
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average Rating: { isNaN( average ) ? 0 : average }</h4> {/** isNaN displays 0 or average instead of NaN**/}
    </div>
  )
}


FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}


export default FeedbackStats;
