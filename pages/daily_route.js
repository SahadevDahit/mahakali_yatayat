import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/dailyroute/get`, {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}
const Daily_route = () => {
  const [dailyroute, setdailyroute] = useState([]);
  const [Output, setOutput] = useState([]);

  let [verify_status, setverify_status] = useState(false);
  const [searchselect, setsearchselect] = useState("date");

  const fetching = async () => {
    let record = await getData();
    setdailyroute(record);
    setOutput(record);
  };
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/user/verify`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setverify_status(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
    let filter = dailyroute.filter((record) => {
      if (searchselect == "bus_no") {
        if (record.bus_no.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
      if (searchselect == "travelRoute") {
        if (record.travelRoute.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
      if (searchselect == "date") {
        if (record.date.toLowerCase().includes(search.toLowerCase())) {
          return record;
        }
      }
    });

    setOutput(filter);
  };

  return (
    <>
      <div style={{ backgroundColor: "blue" }}>
        <div className="w-100 h-100 text-white container">
          <h1 className="text-center pt-3">Daily Route Records</h1>
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
                  <Dropdown.Item onClick={(e) => select_search("date")}>
                    Date
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => select_search("bus_no")}>
                    Bus NO
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => select_search("travelRoute")}>
                    Travel Route
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="col-3">
            {verify_status === true ? (
              <Button>
                <Link
                  variant="dark"
                  className="float-end "
                  href={{ pathname: "/app/dailyroute", query: { id: "000" } }}
                >
                  Add
                </Link>
              </Button>
            ) : (
              <></>
            )}
          </div>
          <div className="pt-5">
            <table
              className=" table table-striped table-bordered table-hover fw-bold"
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
                  <th className=" ">Bus No</th>
                  <th className=" ">Travel Route</th>
                  <th className=" ">Arrival Time</th>
                  <th className=" ">Departure Time</th>
                  <th className=" ">Seat Booked</th>
                  <th className=" ">Seat Available</th>
                  <th className=" ">Ticket Price</th>
                  <th className=" ">Action</th>
                </tr>
              </thead>
              <tbody>
                {Output.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <td>{index + 1}</td>
                      <td>{value.date}</td>
                      <td>{value.bus_no}</td>
                      <td>{value.travelRoute}</td>
                      <td>{value.arrivalTime}</td>
                      <td>{value.departureTime}</td>
                      <td>{value.seat_booked}</td>
                      <td>{value.available_seat}</td>
                      <td>{value.ticket_price}</td>

                      <td>
                        <Link
                          href={{
                            pathname: "/app/dailyroute",
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
        </div>
      </div>
    </>
  );
};

export default Daily_route;
