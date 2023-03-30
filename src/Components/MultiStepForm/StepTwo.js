import React, { useState } from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";


// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ handleNext, handlePrevious, values, handleFormData }) => {
  //creating error state for validation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      if (!errors.panNumber || !errors.tinNumber || !errors.tanNumber || !errors.gstNumber || !errors.cinNumber || !errors.factoryLicence || !errors.moa || !errors.consent || !errors.certificateNumber || !errors.pfCode || !errors.esicNumber || !errors.taxNumber)
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
                <Form.Label>PAN Of Organization <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={values.panNumber}
                  name="panNumber"
                  id="panNumber"
                  onChange={handleFormData("panNumber")}
                  {...register("panNumber", {
                    required: true,
                    // pattern: /^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/i,
                  })}
                />
                <span>
                  {errors.panNumber?.type === "required" && "Organization PAN Number is Required"}
                  {/* { errors.panNumber?.type === "pattern" && "Organization PAN Number is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>TIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="tinNumber"
                  id="tinNumber"
                  defaultValue={values.tinNumber}
                  onChange={handleFormData("tinNumber")}
                  {...register("tinNumber", {
                    required: true,
                    // pattern: /^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/i,
                  })}
                />
                <span>
                  {errors.tinNumber?.type === "required" && "Organization TIN Number is Required"}
                  {/* { errors.tinNumber?.type === "pattern" && "Organization TIN Number is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>TAN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="tanNumber"
                  id="tanNumber"
                  defaultValue={values.tanNumber}
                  onChange={handleFormData("tanNumber")}
                  {...register("tanNumber", {
                    required: true,
                    // pattern: /^S4[0-9]{5}$^S1/i,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.tanNumber?.type === "required" && "Organization TAN Number is Required"}
                  {errors.tanNumber?.type === "minLength" && "Organization TAN Number Must be more than 2 Character"}
                  {/* { errors.tanNumber?.type === "pattern" && "Organization TAN Number is Invalid" } */}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>GST Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="gstNumber"
                  id="gstNumber"
                  defaultValue={values.gstNumber}
                  onChange={handleFormData("gstNumber")}
                  {...register("gstNumber", {
                    required: true,
                    // pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i,
                  })}
                />
                <span>
                  {errors.gstNumber?.type === "required" && "Organization GST Number is Required"}
                  {/* { errors.gstNumber?.type === "pattern" && "Organization GST Number is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>CIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="cinNumber"
                  id="cinNumber"
                  defaultValue={values.cinNumber}
                  onChange={handleFormData("cinNumber")}
                  {...register("cinNumber", {
                    required: true,
                    // pattern: /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/i,
                  })}
                />
                <span>
                  {errors.cinNumber?.type === "required" && "Organization CIN Number is Required"}
                  {/* { errors.cinNumber?.type === "pattern" && "Organization CIN Number is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Factory Licence No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="factoryLicence"
                  id="factoryLicence"
                  defaultValue={values.factoryLicence}
                  onChange={handleFormData("factoryLicence")}
                  {...register("factoryLicence", {
                    required: true,
                    // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                    minLength: 2
                  })}
                />
                <span>
                  {errors.factoryLicence?.type === "required" && "Factory Licence is Required"}
                  {errors.factoryLicence?.type === "minLength" && "Factory Licence must be 2 character"}
                  {/* { errors.orgNumber?.type === "pattern" && "Organization Number Must Be Numeric and 10 Digit" } */}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>MOA/AOA <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="moa"
                  id="moa"
                  defaultValue={values.moa}
                  onChange={handleFormData("moa")}
                  {...register("moa", {
                    required: true,
                    // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                  })}
                />
                <span>
                  {errors.moa?.type === "required" && "MOA/AOA Number is Required"}
                  {/* { errors.moa?.type === "pattern" && "MOA/AOA is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Pollution Consent <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="consent"
                  id="consent"
                  defaultValue={values.consent}
                  onChange={handleFormData("consent")}
                  {...register("consent", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.consent?.type === "required" && "Pollution Consent is Required"}
                  {errors.consent?.type === "minLength" && "Pollution Consent Must Be More than 2 Character"}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Organization Certificate No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="certificateNumber"
                  id="certificateNumber"
                  defaultValue={values.certificateNumber}
                  onChange={handleFormData("certificateNumber")}
                  {...register("certificateNumber", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.certificateNumber?.type === "required" && "Certificate Number is Required"}
                  {errors.certificateNumber?.type === "minLength" && "Certificate Number Must Be Numeric and 10 Digit"}
                </span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>PF Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="pfCode"
                  id="pfCode"
                  defaultValue={values.pfCode}
                  onChange={handleFormData("pfCode")}
                  {...register("pfCode", {
                    required: true,
                    // pattern: /^[A-Z]{2}[\s\/]?[A-Z]{3}[\s\/]?[0-9]{7}[\s\/]?[0-9]{3}[\s\/]?[0-9]{7}$/i,
                  })}
                />
                <span>
                  {errors.pfCode?.type === "required" && "Organization PF Code is Required"}
                  {/* { errors.pfCode?.type === "pattern" && "Organization PF Code is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>ESIC Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="esicNumber"
                  id="esicNumber"
                  defaultValue={values.esicNumber}
                  onChange={handleFormData("esicNumber")}
                  {...register("esicNumber", {
                    required: true,
                    // pattern: /^[0-9]{2}\p{Pd}[0-9]{2}\p{Pd}[0-9]{6}\p{Pd}[0-9]{3}\p{Pd}[0-9]{4}$/i,
                  })}
                />
                <span>
                  {errors.esicNumber?.type === "required" && "Organization ESIC Number is Required"}
                  {/* { errors.esicNumber?.type === "pattern" && "Organization ESIC Number is Invalid" } */}
                </span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="taxNumber"
                  id="taxNumber"
                  defaultValue={values.taxNumber}
                  onChange={handleFormData("taxNumber")}
                  {...register("taxNumber", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <span>
                  {errors.taxNumber?.type === "required" && "Organization Tax Number is Required"}
                  {errors.taxNumber?.type === "minLength" && "Organization Tax Number Must Be Numeric and 2 Character"}
                </span>
              </Col>

            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
              <Button variant="primary" onClick={handlePrevious}>
                Previous
              </Button>

              <input type="submit" value="Next" placeholder="Next" className='Button' style={{ width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none" }} />

              {error && (
                <span style={{ marginTop: "0", color: "red", fontWeight: "200" }}>{error}</span>
              )}
              {/* <Button variant="primary" type="button" onClick={submitFormData}>
                Next
              </Button> */}
            </div>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;


