import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const Nagadh_route_counter = ({ id }) => {
  const [formdata, setformdata] = useState({
    id: "",
    _id: "",
    date: "",
    particulars: "",
    cbf: "",
    debitAmount: "",
    creditAmount: "",
    DrCr: "",
    balanceAmount: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/nagadh_route_counter/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          id: value[0].id,
          _id: value[0]._id,
          date: value[0].date,
          particulars: value[0].particulars,
          cbf: value[0].cbf,
          debitAmount: value[0].debitAmount,
          creditAmount: value[0].creditAmount,
          DrCr: value[0].DrCr,
          balanceAmount: value[0].balanceAmount,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/nagadh_route_counter/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/nagadh_route_counter/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_URL}/nagadh_route_counter/delete/${id}`
      )
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Office Income</h1>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Particulars</Form.Label>
          <Form.Control
            type="text"
            value={formdata.particulars}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, particulars: e.target.value });
            }}
            placeholder="Enter particulars"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>C.B.F</Form.Label>
          <Form.Control
            type="text"
            value={formdata.cbf}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, cbf: e.target.value });
            }}
            placeholder="Enter cbf"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Debit Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.debitAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, debitAmount: e.target.value });
            }}
            placeholder="Enter debitAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Dr/Cr</Form.Label>
          <Form.Control
            type="text"
            value={formdata.DrCr}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, DrCr: e.target.value });
            }}
            placeholder="Enter DrCr"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Credit Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.creditAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, creditAmount: e.target.value });
            }}
            placeholder="Enter creditAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Balance Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.balanceAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, balanceAmount: e.target.value });
            }}
            placeholder="Enter balance Amount "
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

export default Nagadh_route_counter;
