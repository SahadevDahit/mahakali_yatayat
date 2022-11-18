import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const Staffs = ({ id }) => {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    Name: "",
    post: "",
    contact: "",
    attendence: "",
    dutytime: "",
    joindate: "",
  });

  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/staff/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          _id: value[0]._id,
          Name: value[0].Name,
          post: value[0].post,
          contact: value[0].contact,
          attendence: value[0].attendence,
          dutytime: value[0].dutytime,
          joindate: value[0].joindate,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/staff/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/staff/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/staff/delete/${id}`)
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formdata.Name}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, Name: e.target.value });
            }}
            placeholder="Enter  Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Post</Form.Label>
          <Form.Control
            type="text"
            value={formdata.post}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, post: e.target.value });
            }}
            placeholder="Enter post"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            value={formdata.contact}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, contact: e.target.value });
            }}
            placeholder="Enter contact"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Attendence</Form.Label>
          <Form.Control
            type="text"
            value={formdata.attendence}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, attendence: e.target.value });
            }}
            placeholder="Enter attendence"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Duty Time</Form.Label>
          <Form.Control
            type="text"
            value={formdata.dutytime}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, dutytime: e.target.value });
            }}
            placeholder="Enter duty time"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Join Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.joindate}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, joindate: e.target.value });
            }}
            placeholder="Enter join date"
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
};

export default Staffs;
