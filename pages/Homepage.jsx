import PageNav from '../components/PageNav';
function Homepage() {

    return (
        <div>
            <PageNav/>
        {/* This part the PageNav is shown on all pages regardless according to its postioning */}
        <h1>Welcome to the Homepage</h1>
        <p>This is the main page of our application.</p>
        </div>
    );
}

export default Homepage;