
import React, { useState } from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ handleNext, handlePrevious, values, handleFormData }) => {
  //creating error state for validation
  //   // after form submit validating the form data using validator


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      if (!errors.clraNumber || !errors.ismwNumber || !errors.labourWelfare || !errors.businessUnit || !errors.grades || !errors.salaryGrade || !errors.departmentName || !errors.department || !errors.subDepartment || !errors.employeeCategorry || !errors.workLocation)
        handleNext();
    }
    catch (err) {
      setError("Please Fix The Problem To Continue");
    }
  }


  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <Form style={{ marginLeft: "20px", marginRight: "20px" }} onSubmit={handleSubmit(onSubmit)}>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>CLRA Registration <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="clraNumber"
                  id="clraNumber"
                  defaultValue={values.clraNumber}
                  onChange={handleFormData("clraNumber")}
                  {...register("clraNumber", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.clraNumber?.type === "required" && "Organization CLRA Number is Required"}
                  {errors.clraNumber?.type === "minLength" && "Organization CLRA Number Must Be Numeric and 2 Digit"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>ISMW Registrations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="ismwNumber"
                  id="ismwNumber"
                  defaultValue={values.ismwNumber}
                  onChange={handleFormData("ismwNumber")}
                  {...register("ismwNumber", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.ismwNumber?.type === "required" && "Organization ISMW Number is Required"}
                  {errors.ismwNumber?.type === "minLength" && "Organization ISMW Number Must Be More than 2 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Labour Welfare <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="labourWelfare"
                  id="labourWelfare"
                  defaultValue={values.labourWelfare}
                  onChange={handleFormData("labourWelfare")}
                  {...register("labourWelfare", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.labourWelfare?.type === "required" && "Labour Welfare is Required"}
                  {errors.labourWelfare?.type === "minLength" && "Labour Welfare Must Be More than 2 Character"}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Business Unit <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="businessUnit"
                  id="businessUnit"
                  defaultValue={values.businessUnit}
                  onChange={handleFormData("businessUnit")}
                  {...register("businessUnit", {
                    required: true,
                    // pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.businessUnit?.type === "required" && "Business Unit is Required"}
                  {errors.businessUnit?.type === "pattern" && "Business Unit Must Be More than 2 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Grades <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="grades"
                  id="grades"
                  defaultValue={values.grades}
                  onChange={handleFormData("grades")}
                  {...register("grades", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.grades?.type === "required" && "Organization Grades is Required"}
                  {errors.grades?.type === "pattern" && "Organization Grades Must Be More than 1 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Salary Grade <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="salaryGrade"
                  id="salaryGrade"
                  defaultValue={values.salaryGrade}
                  onChange={handleFormData("salaryGrade")}
                  {...register("salaryGrade", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.salaryGrade?.type === "required" && "Salary Grade is Required"}
                  {errors.salaryGrade?.type === "pattern" && "Salary Grade Must Be More than 1 Character"}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Departments Name <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  defaultValue={values.departmentName}
                  onChange={handleFormData("departmentName")}
                  {...register("departmentName", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.departmentName?.type === "required" && "Department Name is Required"}
                  {errors.departmentName?.type === "pattern" && "Department Name Must Be More than 1 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  id="department"
                  defaultValue={values.department}
                  onChange={handleFormData("department")}
                  {...register("department", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.department?.type === "required" && "Department is Required"}
                  {errors.department?.type === "pattern" && "Department Must Be More than 1 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Sub Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="subDepartment"
                  id="subDepartment"
                  defaultValue={values.subDepartment}
                  onChange={handleFormData("subDepartment")}
                  {...register("subDepartment", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.subDepartment?.type === "required" && "Sub Department is Required"}
                  {errors.subDepartment?.type === "pattern" && "Sub Department Must Be More than 1 Character"}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Employee Category <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="employeeCategorry"
                  id="employeeCategorry"
                  defaultValue={values.employeeCategorry}
                  onChange={handleFormData("employeeCategorry")}
                  {...register("employeeCategorry", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.employeeCategorry?.type === "required" && "Employee Category is Required"}
                  {errors.employeeCategorry?.type === "pattern" && "Employee Category Must Be More than 1 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Work Locations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="workLocation"
                  id="workLocation"
                  defaultValue={values.workLocation}
                  onChange={handleFormData("workLocation")}
                  {...register("workLocation", {
                    required: true,
                    pattern: /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/i,
                  })}
                />
                <span>
                  {errors.workLocation?.type === "required" && "Work Location is Required"}
                  {errors.workLocation?.type === "pattern" && "Work Location Must Be More than 1 Character"}
                </span>
              </Col>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
              <Button variant="primary" onClick={handlePrevious}>
                Previous
              </Button>

              {/* <Button variant="primary" type="button" onClick={submitFormData}>
                Submit
              </Button> */}


              <input type="submit" value="Submit" placeholder="Next" className='Button' style={{ width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none" }} />

              {error && (
                <span style={{ marginTop: "0", color: "red", fontWeight: "200" }}>{error}</span>
              )}
              <span id="submit-error" className="formerror"></span>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;

