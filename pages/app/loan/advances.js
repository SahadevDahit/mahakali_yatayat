import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/advance/get`, {
    next: { revalidate: 10 },
  });
  return res.json();
}
const advances = () => {
  const [value, setvalue] = useState([]);
  const [Output, setOutput] = useState([]);
  const [searchselect, setsearchselect] = useState("shareHolderName");

  const fetching = async () => {
    let record = await getData();
    setvalue(record);
    setOutput(record);
  };
  useEffect(() => {
    fetching();
  }, []);
  const select_search = (props) => {
    setsearchselect(props);
  };
  const searchfunc = (e) => {
    e.preventDefault();
    setOutput([]);

    let search = e.target.value;
    let filter = value.filter((record) => {
      if (searchselect == "shareHolderName") {
        if (
          record.shareHolderName.toLowerCase().includes(search.toLowerCase())
        ) {
          return record;
        }
      }
      if (searchselect == "busno") {
        if (record.busno.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
    });

    setOutput(filter);
  };
  return (
    <>
      <div className="w-100 h-100 container">
        <h1 className="text-center">Advance Records</h1>
        <div className="d-flex row py-5 float-end">
          <div className="col-8">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                <Dropdown.Item
                  onClick={(e) => select_search("shareHolderName")}
                >
                  shareHolderName
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => select_search("busno")}>
                  Bus NO
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
              href={{ pathname: "/app/advance", query: { id: "000" } }}
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
              <th className=" ">shareHolderName</th>
              <th className=" ">Bus NO</th>
              <th className=" ">Advance Amount</th>
              <th className=" ">Transactional Work</th>
              <th className=" ">Amount</th>
              <th className=" ">Action</th>
            </tr>
          </thead>
          <tbody>
            {Output.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.date}</td>
                  <td>{value.shareHolderName}</td>
                  <td>{value.busno}</td>
                  <td>{value.advanceAmount}</td>
                  <td>{value.transactionWork}</td>
                  <td>{value.Amount}</td>

                  <td>
                    <Link
                      href={{
                        pathname: "/app/advance",
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
    </>
  );
};

export default advances;
