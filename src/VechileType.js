import "./VechileType.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from "react-router-dom";


function VehicleType() {

  let navigate = useNavigate();
    const serviceButtonClickbacks = () => {
        navigate('/Dashboard');
      };

  return (
    <>
    <div className="boxx1">
    <h3>VEHICLE TYPE ADD</h3>
    <form>
      <label className="l1">
        Vehicle Type Name
        <input type="text" className="v1i"></input>
      </label>
      <br />
      <label className="l2">
        Vehicle Image
        <input type="file" className="v2i"></input>
      </label>
      <br/>
      <div className="b2b">
      <button type="submit" className="vb1">Submit<i class="fa-sharp fa-solid fa-check"></i></button>
      <button className="vb2" onClick={serviceButtonClickbacks}>Back<i class="fa-solid fa-xmark"></i></button>
      </div>
    </form>
    </div>
    </>
  );
}

export {VehicleType};
