import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateApartment.css"

function CreateApartment() {

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = {
            img,
            title,
            pricePerDay
        }

        axios.post(process.env.REACT_APP_API_URL + "/apartments", details)
            .then( response => {
                console.log(response.data)

                navigate("/apartments"); // redirect to apartment list
                // navigate(`/apartments/${response.data._id}`); // redirect to apartment page

                // clear form...
                setTitle("");
                setImg("");
                setPricePerDay("");
            })
            .catch(e => console.log("error creating apartment...", e));

    }

    return (
        <section className="CreateApartment">
            <h1>Create a new Apartment</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Image URL
                    <input
                        type="text"
                        name="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </label>

                <label>
                    Price per Day
                    <input
                        type="number"
                        min={0}
                        name="pricePerDay"
                        value={pricePerDay}
                        onChange={(e) => setPricePerDay(e.target.value)}
                    />
                </label>

                <button type="submit">Create Apartment</button>

            </form>

        </section>
    )
}

export default CreateApartment;