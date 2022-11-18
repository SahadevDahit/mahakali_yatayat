import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
function Shareholder_form({ id }) {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    shareholderName: "",
    busNo: "",
    travelRoute: "",
    registrationDate: "",
    contactNumber: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/shareholder/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          _id: value[0]._id,
          shareholderName: value[0].shareHolderName,
          busNo: value[0].busno,
          travelRoute: value[0].travelRoute,
          registrationDate: value[0].registrationDate,
          busType: value[0].busType,
          contactNumber: value[0].contactNumber,
        });
      });
  };
  useEffect(() => {
    if (id !== "000") {
      fetching();
    }
  }, []);
  const add = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/shareholder/create`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };

  const update = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.NEXT_PUBLIC_URL}/shareholder/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/shareholder/delete/${id}`)
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">ShareHolder form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ShareHolder Name</Form.Label>
          <Form.Control
            type="text"
            value={formdata.shareholderName}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, shareholderName: e.target.value });
            }}
            placeholder="Enter shareholder Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bus NO</Form.Label>
          <Form.Control
            type="text"
            value={formdata.busNo}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, busNo: e.target.value });
            }}
            placeholder="Enter bus no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Travel Route</Form.Label>
          <Form.Control
            type="text"
            value={formdata.travelRoute}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, travelRoute: e.target.value });
            }}
            placeholder="Enter bus Travel Route"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bus Type</Form.Label>
          <Form.Control
            type="text"
            value={formdata.busType}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, busType: e.target.value });
            }}
            placeholder="Enter bus bus Type"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Registration Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.registrationDate}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, registrationDate: e.target.value });
            }}
            placeholder="Enter bus registration date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            value={formdata.contactNumber}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, contactNumber: e.target.value });
            }}
            placeholder="Enter contact number"
          />
        </Form.Group>
        {id == "000" ? (
          <Button variant="primary" onClick={(e) => add(e)}>
            Add
          </Button>
        ) : (
          <>
            {" "}
            <Button variant="primary" onClick={(e) => update(e)}>
              Update
            </Button>
            <Button variant="primary" onClick={(e) => handledelete(e)}>
              Delete
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default Shareholder_form;
