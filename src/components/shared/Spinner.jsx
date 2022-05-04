import spinner from '../assets/spinner.gif';

function Spinner ( ) {
   return (
      <>
         <img
            src={ spinner }
            alt='loading...'
            style={ { width: '100px', margin: 'auto', display: 'block' } }
         />
         <h1 style={ { textAlign: 'center' } }> loading...</h1>
      </>
   )
}

export default Spinner;
