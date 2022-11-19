import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
function loans({ id }) {
  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    date: "",
    shareHolderName: "",
    busno: "",
    loanAmount: "",
    interestAmount: "",
    payAmount: "",
    remainingAmount: "",
  });
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/loan/${id}`)
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
          loanAmount: value[0].loanAmount,
          interestAmount: value[0].interestAmount,
          payAmount: value[0].payAmount,
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
      .post(`${process.env.NEXT_PUBLIC_URL}/loan/create`, {
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
      .put(`${process.env.NEXT_PUBLIC_URL}/loan/update`, {
        formdata: formdata,
      })
      .then((response) => {
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/loan/delete/${id}`)
      .then((response) => {
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Loan form</h1>
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
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.loanAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, loanAmount: e.target.value });
            }}
            placeholder="Enter loanAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Interest Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.interestAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, interestAmount: e.target.value });
            }}
            placeholder="Enter interestAmount"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pay Amount</Form.Label>
          <Form.Control
            type="text"
            value={formdata.payAmount}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, payAmount: e.target.value });
            }}
            placeholder="Enter Pay Amount"
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
            placeholder="Enter remaining amount"
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

export default loans;
