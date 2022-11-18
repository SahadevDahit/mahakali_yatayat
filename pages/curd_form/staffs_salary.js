import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const Staffs_salary = ({ id }) => {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    Name: "",
    post: "",
    contact: "",
    joinDate: "",
    total_salary: "",
    withdraw_salary: "",
    remaining_salary: "",
    date: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/staff_salary/${id}`)
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
          joinDate: value[0].joinDate,
          total_salary: value[0].total_salary,
          withdraw_salary: value[0].withdraw_salary,
          remaining_salary: value[0].remaining_salary,
          date: value[0].date,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/staff_salary/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/staff_salary/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/staff_salary/delete/${id}`)
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Staffs_salary form</h1>
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
          <Form.Label>Join Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.joinDate}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, joinDate: e.target.value });
            }}
            placeholder="Enter join date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Total Salary</Form.Label>
          <Form.Control
            type="text"
            value={formdata.total_salary}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, total_salary: e.target.value });
            }}
            placeholder="Enter total_salary"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Withdraw Salary</Form.Label>
          <Form.Control
            type="text"
            value={formdata.withdraw_salary}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, withdraw_salary: e.target.value });
            }}
            placeholder="Enter withdraw_salary"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Remaining Salary</Form.Label>
          <Form.Control
            type="text"
            value={formdata.remaining_salary}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, remaining_salary: e.target.value });
            }}
            placeholder="Enter remaining_salary"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.date}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, date: e.target.value });
            }}
            placeholder="Enter date"
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

export default Staffs_salary;
