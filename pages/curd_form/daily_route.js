import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Daily_route = ({ id }) => {
  let [verify_status, setverify_status] = useState(false);

  const [formdata, setformdata] = useState({
    id: id,
    _id: "",
    date: "",
    bus_no: "",
    travelRoute: "",
    arrivalTime: "",
    departureTime: "",
    seat_booked: "",
    available_seat: "",
    ticket_price: "",
  });
  const router = useRouter();

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
  const fetching = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/dailyroute/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setformdata({
          ...formdata,
          _id: value[0]._id,
          date: value[0].date,
          bus_no: value[0].bus_no,
          travelRoute: value[0].travelRoute,
          arrivalTime: value[0].arrivalTime,
          departureTime: value[0].departureTime,
          seat_booked: value[0].seat_booked,
          available_seat: value[0].available_seat,
          ticket_price: value[0].ticket_price,
        });
      })
      .catch((err) => {
        router.push("/app/daily_route");
        console.log(err);
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
      .post(`${process.env.NEXT_PUBLIC_URL}/dailyroute/create`, {
        formdata: formdata,
      })
      .then((response) => {
        router.reload("/");
        alert("Sucess in add");
      })
      .catch((err) => console.log(err));
  };

  const update = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.NEXT_PUBLIC_URL}/dailyroute/update`, {
        formdata: formdata,
      })
      .then((response) => {
        router.reload("/");
        alert("Sucess in created");
      })
      .catch((err) => console.log(err));
  };
  const handledelete = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/dailyroute/delete/${id}`)
      .then((response) => {
        router.reload("/");
        alert("Sucess in delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Daily route</h1>

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
            placeholder="Enter date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bus NO</Form.Label>
          <Form.Control
            type="text"
            value={formdata.bus_no}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, bus_no: e.target.value });
            }}
            placeholder="Enter bus no"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Travel Route</Form.Label>
          <Form.Control
            type="text"
            value={formdata.travelRoute}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, travelRoute: e.target.value });
            }}
            placeholder="Enter bus Travel Route"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ArrivalTime</Form.Label>
          <Form.Control
            type="text"
            value={formdata.arrivalTime}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, arrivalTime: e.target.value });
            }}
            placeholder="Enter arrival time"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Departure Time</Form.Label>
          <Form.Control
            type="text"
            value={formdata.departureTime}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, departureTime: e.target.value });
            }}
            placeholder="Enter bus Departure time"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Seat Booked</Form.Label>
          <Form.Control
            type="text"
            value={formdata.seat_booked}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, seat_booked: e.target.value });
            }}
            placeholder="Enter seat booked"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Seat Available</Form.Label>
          <Form.Control
            type="text"
            value={formdata.available_seat}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, available_seat: e.target.value });
            }}
            placeholder="Enter seat available"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ticket Price</Form.Label>
          <Form.Control
            type="text"
            value={formdata.ticket_price}
            onChange={(e) => {
              e.preventDefault();
              setformdata({ ...formdata, ticket_price: e.target.value });
            }}
            placeholder="Enter ticket price"
          />
        </Form.Group>
        {id == "000" ? (
          <Button variant="primary" onClick={(e) => add(e)}>
            Add
          </Button>
        ) : verify_status == true ? (
          <>
            <Button variant="primary" onClick={(e) => update(e)}>
              Update
            </Button>
            <Button variant="primary" onClick={(e) => handledelete(e)}>
              Delete
            </Button>
          </>
        ) : (
          <></>
        )}
      </Form>
    </div>
  );
};
export default Daily_route;
