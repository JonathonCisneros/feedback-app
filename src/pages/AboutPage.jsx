import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage ( ) {
   return (
      <Card>
         <div className="about">
            <h1>About This Project</h1>
            <p>Welcome! This is a React app to leave feeback on a product or service.</p>
            <p>Version: 1.0.0</p>

            <p>
               <Link to='/'>
                  <p>Back To Home</p>
               </Link>
            </p>
         </div>
      </Card>
   )
}

export default AboutPage;
