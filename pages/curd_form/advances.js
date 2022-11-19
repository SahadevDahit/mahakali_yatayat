import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
function advances({ id }) {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    date: "",
    shareHolderName: "",
    busno: "",
    advanceAmount: "",
    transactionWork: "",
    Amount: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/advance/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          _id: value[0]._id,
          date: value[0].date,
          shareHolderName: value[0].shareHolderName,
          busno: value[0].busno,
          advanceAmount: value[0].advanceAmount,
          transactionWork: value[0].transactionWork,
          Amount: value[0].Amount,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/advance/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/advance/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/advance/delete/${id}`)
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Advance CURD form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.date}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, date: e.target.value });
            }}
            placeholder="Enter Date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ShareHolder Name</Form.Label>
          <Form.Control
            type="text"
            value={formdata.shareHolderName}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, shareHolderName: e.target.value });
            }}
            placeholder="Enter shareholder Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bus NO</Form.Label>
          <Form.Control
            type="text"
            value={formdata.busno}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, busno: e.target.value });
            }}
            placeholder="Enter bus no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Advance Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.advanceAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, advanceAmount: e.target.value });
            }}
            placeholder="Enter advanceAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Transactional Work</Form.Label>
          <Form.Control
            type="text"
            value={formdata.transactionWork}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, transactionWork: e.target.value });
            }}
            placeholder="Enter transactionalWork"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.Amount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, Amount: e.target.value });
            }}
            placeholder="Enter  Amount"
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

export default advances;
