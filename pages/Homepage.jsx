import {Link} from 'react-router-dom';
import PageNav from '../components/PageNav';
function Homepage() {

    return (
        <div>
            <PageNav/>
        {/* This part the PageNav is shown on all pages regardless according to its postioning */}
        <h1>Welcome to the Homepage</h1>
        <p>This is the main page of our application.</p>
        <Link to="/product">Go to Product</Link>
        </div>
    );
}

export default Homepage;