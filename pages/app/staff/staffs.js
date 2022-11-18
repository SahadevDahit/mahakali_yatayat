import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/staff/get`, {
    next: { revalidate: 10 },
  });
  return res.json();
}
const staffs = () => {
  const [value, setvalue] = useState([]);
  const [Output, setOutput] = useState([]);
  const [searchselect, setsearchselect] = useState("Name");

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
    console.log(searchselect);

    let search = e.target.value;
    let filter = value.filter((record) => {
      if (searchselect == "Name") {
        if (record.Name.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
      if (searchselect == "post") {
        if (record.post.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
      if (searchselect == "contact") {
        if (record.contact.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
    });

    setOutput(filter);
  };
  return (
    <>
      <div className="w-100 h-100 container">
        <h1 className="text-center">Share Holder Records</h1>
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
                <Dropdown.Item onClick={(e) => select_search("Name")}>
                  Name
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => select_search("post")}>
                  Post
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => select_search("contact")}>
                  Contact
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
              href={{ pathname: "/app/staffs", query: { id: "000" } }}
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
              <th className="px-4 ">I.D</th>
              <th className="px-4 ">Name</th>
              <th className="px-4 ">Post</th>
              <th className="px-4 ">Contact</th>
              <th className="px-4 ">Attendence</th>
              <th className="px-4 ">Duty Time</th>
              <th className="px-4 ">Join Date</th>
              <th className="px-4 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {Output.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.Name}</td>
                  <td>{value.post}</td>
                  <td>{value.contact}</td>
                  <td>{value.attendence}</td>
                  <td>{value.dutytime}</td>
                  <td>{value.joindate}</td>
                  <td>
                    <Link
                      href={{
                        pathname: "/app/staffs",
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

export default staffs;
