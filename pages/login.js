import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookie from "cookie-universal";
const cookies = Cookie();
function Login() {
  const [formdata, setformdata] = useState({
    emailaddress: "",
    password: "",
  });
  const router = useRouter();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const signin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/user/signin`,
        {
          formdata: formdata,
        },
        config
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          cookies.set("token", response.data.token);
          router.reload("/");
          alert("successfully logged in");
        }
      })
      .catch((error) => {
        alert("Invalid email or password");
      });
  };

  return (
    <div style={{ backgroundColor: "blue", height: "90vh" }}>
      <div className="container w-50 text-white" style={{ paddingTop: "7rem" }}>
        <h1 className="text-center pt-3">Login Form</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                e.preventDefault();
                setformdata({ ...formdata, emailaddress: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                e.preventDefault();
                setformdata({ ...formdata, password: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => signin(e)}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
