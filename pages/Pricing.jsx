import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
function Pricing(){
    return (
        <div>
            <PageNav/>
            <h1>Pricing</h1>
            <p>This is the Pricing page.</p>
            <p>Here you can find the pricing details for our products.</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
}

export default Pricing;
// Compare this snippet from world_wise/App.jsx:
