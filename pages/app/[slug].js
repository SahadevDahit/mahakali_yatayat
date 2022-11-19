import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ShareHolder from "../curd_form/shareholder_form";
import DailyRoute from "../curd_form/daily_route";
import Company_acc from "../curd_form/company_acc";
import Company_in_ex from "../curd_form/company_in_ex";
import Staff from "../curd_form/staffs";
import Staff_salary from "../curd_form/staffs_salary";
import Office_income from "../curd_form/karyalaya_amdani";
import Upakar_counter from "../curd_form/upakar_counter";
import Nagadh_Route_Counters from "../curd_form/nagadh_route_counter";
import Loan from "../curd_form/loan";
import Advance from "../curd_form/advances";
const Sharehoder_id = () => {
  const [props, setprops] = useState("");
  const router = useRouter();
  useEffect(() => {
    setprops(router.query.slug);
  }, [props]);
  console.log(router.query.slug);
  if (router.query.slug == "shareholder") {
    return (
      <div>
        <ShareHolder id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "company_account") {
    return (
      <div>
        <Company_acc id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "company_in_ex") {
    return (
      <div>
        <Company_in_ex id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "staffs") {
    return (
      <div>
        <Staff id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "staffs_salary") {
    return (
      <div>
        <Staff_salary id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "karyalaya_amdani") {
    return (
      <div>
        <Office_income id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "upakar_counter") {
    return (
      <div>
        <Upakar_counter id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "nagadh_route_counter") {
    return (
      <div>
        <Nagadh_Route_Counters id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "dailyroute") {
    return (
      <div>
        <DailyRoute id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "loan") {
    return (
      <div>
        <Loan id={router.query.id} />
      </div>
    );
  }
  if (router.query.slug == "advance") {
    return (
      <div>
        <Advance id={router.query.id} />
      </div>
    );
  }
};

export default Sharehoder_id;
