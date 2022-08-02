import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "./ApartmentDetails.css"

function ApartmentDetails() {

    const {apartmentId} = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/apartments/" + apartmentId)
            .then( response => {
                setDetails(response.data);
            })
            .catch( e => console.log("error getting apartment details from API", e));
    });


    const renderDetails = () => {
        return (
            <>
                <h2>{details.title}</h2>
                <p>Price: {details.pricePerDay}</p>
                <img src={details.img} alt={details.title} />
            </>
        )
    }

    return (
        <section className="ApartmentDetails">
            <h1>ApartmentDetails</h1>

            {details === null
                ? <p>loading...</p>
                : renderDetails()
            }

            <p>
                <Link to="/apartments">Back</Link>
            </p>
            
        </section>
    );
}

export default ApartmentDetails;