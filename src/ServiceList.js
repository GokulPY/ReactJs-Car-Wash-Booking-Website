import { useState , useEffect} from "react";
import "./ServiceList.css";
import { useNavigate } from "react-router-dom";

function Service (){
    let navigate = useNavigate();
    const serviceButtonClick = () => {
        navigate('/ServiceAdd');
      };

    const [data, setData] = useState([]);
 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(savedData);
  }, []);

  const handleDeletes = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
      <div className="sbox">
        <h5 className="ssh5" onClick={serviceButtonClick}>Add New +</h5>
        <h3 className="sh3">SERVICE LIST</h3>
      <table className="tsl">
        <thead>
          <tr>
          <th>#</th>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>Price</th>
            <th>Service Tab</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>Available</td>
              <td>Active</td>
              <td>
                <button  style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDeletes(index)}>x Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Service };


