import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const Company_acc = ({ id }) => {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    Date: "",
    bankName: "",
    income: "",
    depositAmount: "",
    transactionWork: "",
    withdrawAmount: "",
    totalAmount: "",
    remainingAmount: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/company_acc_form/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          _id: value[0]._id,
          Date: value[0].Date,
          bankName: value[0].bankName,
          income: value[0].income,
          depositAmount: value[0].depositAmount,
          transactionWork: value[0].transactionWork,
          withdrawAmount: value[0].withdrawAmount,
          totalAmount: value[0].totalAmount,
          remainingAmount: value[0].remainingAmount,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/company_acc_form/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/company_acc_form/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/company_acc_form/delete/${id}`)
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Company Account form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            value={formdata.Date}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, Date: e.target.value });
            }}
            placeholder="Enter Date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="text"
            value={formdata.bankName}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, bankName: e.target.value });
            }}
            placeholder="Enter bank Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Income</Form.Label>
          <Form.Control
            type="text"
            value={formdata.income}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, income: e.target.value });
            }}
            placeholder="Enter income"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Deposit Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.depositAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, depositAmount: e.target.value });
            }}
            placeholder="Enter deposit Amount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Transaction Work</Form.Label>
          <Form.Control
            type="text"
            value={formdata.transactionWork}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, transactionWork: e.target.value });
            }}
            placeholder="Enter transactionWork"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Withdraw Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.withdrawAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, withdrawAmount: e.target.value });
            }}
            placeholder="Enter withdrawAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Total Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.totalAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, totalAmount: e.target.value });
            }}
            placeholder="Enter total amount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Remaining Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.remainingAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, remainingAmount: e.target.value });
            }}
            placeholder="Enter remainingAmount"
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

export default Company_acc;
