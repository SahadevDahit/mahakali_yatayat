import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/upakar_counter/get`, {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}
const Upakar_counter = () => {
  const [value, setvalue] = useState([]);
  const [Output, setOutput] = useState([]);
  const [searchselect, setsearchselect] = useState("date");

  const fetching = async () => {
    let record = await getData();
    setvalue(record);
    setOutput(record);
  };
  const select_search = (props) => {
    setsearchselect(props);
  };
  const searchfunc = (e) => {
    e.preventDefault();
    setOutput([]);

    let search = e.target.value;
    let filter = value.filter((record) => {
      if (searchselect == "date") {
        if (record.date.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
      if (searchselect == "particulars") {
        if (record.particulars.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
    });

    setOutput(filter);
  };
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className="w-100 h-100 container">
      <h1 className="text-center">Upakar Counter</h1>
      <div className="d-flex row py-5 float-end">
        <div className="col-8">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  searchfunc(e);
                }}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="col-3">
          <Dropdown as={ButtonGroup}>
            <Button variant="success">{searchselect}</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item onClick={(e) => select_search("date")}>
                Date
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => select_search("particulars")}>
                particulars
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="col-3">
        <Button>
          <Link
            variant="dark"
            className="float-end "
            href={{ pathname: "/app/upakar_counter", query: { id: "000" } }}
          >
            Add
          </Link>
        </Button>
      </div>
      <table
        className=" table table-striped table-bordered table-hover mt-3"
        variant="light"
        style={{
          display: "block",
          height: "30rem",
          maxWidth: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <thead className="bg-black sticky-lg-top text-light">
          <tr>
            <th className=" ">I.D</th>
            <th className=" ">Date</th>
            <th className=" ">Particulars</th>
            <th className=" ">C.B.F</th>
            <th className=" ">Credit Amount</th>
            <th className=" ">Debit Amount</th>
            <th className=" ">Dr/Cr</th>
            <th className=" ">Balance Amount</th>
            <th className=" ">A_Kha</th>
            <th className=" ">Orpan/Aanath</th>

            <th className="px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {Output.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.date}</td>
                <td>{value.particulars}</td>
                <td>{value.cbf}</td>
                <td>{value.creditAmount}</td>
                <td>{value.debitAmount}</td>
                <td>{value.DrCr}</td>
                <td>{value.balanceAmount}</td>
                <td>{value.a_kha}</td>
                <td>{value.orphan}</td>

                <td>
                  <Link
                    href={{
                      pathname: "/app/upakar_counter",
                      query: { id: `${value.id}` },
                    }}
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Upakar_counter;
