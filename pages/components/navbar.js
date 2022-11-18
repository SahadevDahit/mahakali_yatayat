import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  let [verify_status, setverify_status] = useState(false);
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
  return (
    <div className="container-fluid p-0 ">
      <nav className="navbar navbar-expand-lg bg-primary fw-bold">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>MahakaliYatayat</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="/daily_route"
                >
                  Daily Route
                </Link>
              </li>
              {verify_status == true ? (
                <>
                  <li className="nav-item active dropdown">
                    <a
                      className="nav-link active dropdown-toggle fs-5"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Counters
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item  fs-5 "
                          href="/app/counters/karyalaye_amdani"
                        >
                          Karyalaye Aamdani
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-5"
                          href="/app/counters/upakar_counter"
                        >
                          Upakar Counter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-5 "
                          href="/app/counters/nagadh_route_counter"
                        >
                          Nagadh Route Counter
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item active dropdown fs-5">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Company
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item fs-5"
                          href="/app/company/company_account"
                        >
                          Company Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-5"
                          href="/app/company/company_in_ex"
                        >
                          Company In-Ex
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  active dropdown fs-5">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Staffs
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item fs-5"
                          href="/app/staff/staffs"
                        >
                          staff
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-5"
                          href="/app/staff/staffs_salary"
                        >
                          Staff Salary
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item fs-5">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/app/share_holder"
                    >
                      Share Holder
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li className="nav-item active">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="/aboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item active fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
