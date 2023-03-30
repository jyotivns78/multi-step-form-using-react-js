import React, { useState } from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import "../../Assets/css/Card.scss";
import { useForm } from "react-hook-form";


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ handleNext, values, handleFormData }) => {
  //creating error state for validation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      if (!errors.orgName || !errors.orgEmail || !errors.orgAddress || !errors.orgNumber)
        handleNext();
    }
    catch (err) {
      setError("Please Fix The Problem To Continue");
    }
  }

  return (
    <div>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <Form style={{ marginLeft: "20px", marginRight: "20px" }} onSubmit={handleSubmit(onSubmit)} >


            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Organization Name <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
                <Form.Control
                  name="orgName"
                  id="orgName"
                  defaultValue={values.orgName}
                  type="text"
                  onChange={handleFormData("orgName")}
                  {...register("orgName", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.orgName?.type === "required" && "Organization Name is Required"}
                  {errors.orgName?.type === "minLength" && "Organization Name must be more than 2 character"}
                </span>
              </Col>


              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Organization Email <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
                <Form.Control
                  name="orgEmail"
                  id="orgEmail"
                  defaultValue={values.orgEmail}
                  type="email"
                  onChange={handleFormData("orgEmail")}
                  {...register("orgEmail", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                  })}
                />
                <span>
                  {errors.orgEmail?.type === "required" && "Email is Required"}
                  {errors.orgEmail?.type === "pattern" && "Organization Email Must Contain Letters, and special Character @"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Organization Number <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
                <Form.Control
                  name="orgNumber"
                  id="orgNumber"
                  defaultValue={values.orgNumber}
                  type="number"
                  onChange={handleFormData("orgNumber")}
                  {...register("orgNumber", {
                    required: true,
                    pattern: /^([+]\d{2})?\d{10}$/i,
                  })}
                />
                <span>
                  {errors.orgNumber?.type === "required" && "Organization Number is Required"}
                  {errors.orgNumber?.type === "pattern" && "Organization Number Must Contain 10 Digit"}
                </span>
              </Col>
            </div>

            <Col md="mb-3" style={{ width: "100%", marginTop: "20px" }}>
              <Form.Label>Organization Address <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
              <Form.Control
                name="orgAddress"
                id="orgAddress"
                defaultValue={values.orgAddress}
                type="text"
                onChange={handleFormData("orgAddress")}
                {...register("orgAddress", {
                  required: true,
                  minLength: 2,
                })}
              />
              <span>
                {errors.orgAddress?.type === "required" && "Organization Address is Required"}
                {errors.orgAddress?.type === "minLength" && "Organization Address Must Be Numeric and 2 Character"}
              </span>
            </Col>

            <input type="submit" value="Next" placeholder="Next" className='Button' style={{ marginTop: "40px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none" }} />

            {error && (
              <span style={{ marginTop: "0", color: "red", fontWeight: "200" }}>{error}</span>
            )}

          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
