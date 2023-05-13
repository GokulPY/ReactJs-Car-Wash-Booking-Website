import "./ServiceAdd.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceAdd() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");

  const handleSaves = () => {
  const savedData = JSON.parse(localStorage.getItem("data")) || [];
      savedData.push({ title,description,price,time });
      localStorage.setItem("data", JSON.stringify(savedData));
      setTitle("");
      setDescription("");
      setPrice("");
      setTime("");
  };

  let navigate = useNavigate();
    const serviceButtonClickback = () => {
        navigate('/Dashboard');
      };

  return (
    <>
    <div className="boxx1">
    <h3>SERVICE ADD</h3>
    <form>
      <label className="l1">
        Service Title
        <input type="text" className="vv1i" placeholder="Enter Service Title"value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
      </label>
      <br />
      <label className="l2">
        Service Description
        <input type="text" className="vv2i" placeholder="Service DescriptionEnter Service Description"value={description}
                    onChange={(e) => setDescription(e.target.value)}></input>
      </label>
      <br/>
      <label className="l1">
        Service Price
        <input type="text" className="vv3i" placeholder="Enter Service Price"value={price}
                    onChange={(e) => setPrice(e.target.value)}></input>
      </label>
      <br />
      <label className="l1">
        Approx Service Time
        <input type="text" className="vv4i" placeholder="Enter Approx Service Time in Minutes"value={time}
                    onChange={(e) => setTime(e.target.value)}></input>
      </label>
      <br />
      <div className="b2b">
      <button type="submit" className="vb1" onClick={handleSaves}>Submit<i class="fa-sharp fa-solid fa-check"></i></button>
      <button className="vb2" onClick={serviceButtonClickback}>Back<i class="fa-solid fa-xmark"></i></button>
      </div>
    </form>
    </div>
    </>
  );
}

export {ServiceAdd};
