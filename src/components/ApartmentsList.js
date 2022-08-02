import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApartmentsList.css"

function ApartmentsList() {

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/apartments")
            .then( response => {
                setApartments(response.data);
            })
            .catch( e => console.log("error getting apartments from API", e));
    });

    return (
        <section className="ApartmentsList">
            <h1>ApartmentsList</h1>

            { apartments.map( (element) => {
                return (
                    <div key={element._id} className="apartment-summary">
                        <h3>{element.title}</h3>

                        <img src={element.img} alt={element.title} />

                        Price: {element.pricePerDay} <br />

                        <Link to={`/apartments/${element._id}`}>More details</Link>
                    </div>
                )
            }) }
        </section>
    );
}

export default ApartmentsList;