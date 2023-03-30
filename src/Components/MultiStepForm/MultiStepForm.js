import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
// Components Import
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree"
import Final from "./Final";
import "../../Assets/css/Card.scss";



const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "1rem auto",
        background: "transparent",

        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "#3f51b5",
        },
        "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
            color: "#FFFFFF"
        }

    }
})



const MultiStepForm = () => {
    // React hooks
    const [activeStep, setActiveStep] = useState(0);

    //state for form data
    const [formData, setFormData] = useState({
        orgName: "",
        orgEmail: "",
        orgNumber: "",
        orgAddress: "",
        panNumber: "",
        tinNumber: "",
        tanNumber: "",
        gstNumber: "",
        cinNumber: "",
        factoryLicence: "",
        moa: "",
        consent: "",
        certificateNumber: "",
        pfCode: "",
        esicNumber: "",
        taxNumber: "",
        clraNumber: "",
        ismwNumber: "",
        labourWelfare: "",
        businessUnit: "",
        grades: "",
        salaryGrade: "",
        departmentName: "",
        department: "",
        subDepartment: "",
        employeeCategorry: "",
        workLocation: ""

    })


    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handlePrevious = () => {
        setActiveStep(backActiveStep => backActiveStep - 1)
    }

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


    function getSteps() {
        return ["Basic", "Company", "Company-Details"];
    }




    // ************************
    const steps = getSteps();


    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <StepOne
                        handleNext={handleNext}
                        activeStep={activeStep}
                        steps={steps}
                        handleFormData={handleInputData}
                        values={formData}
                    />
                );
            case 1:
                return (
                    <StepTwo
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        activeStep={activeStep}
                        steps={steps}
                        handleFormData={handleInputData}
                        values={formData}
                    />
                );

            case 2:
                return (
                    <StepThree
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        activeStep={activeStep}
                        steps={steps}
                        handleFormData={handleInputData}
                        values={formData}
                    />
                );
            case 3:
                return (
                    <Final
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        activeStep={activeStep}
                        steps={steps}
                        handleFormData={handleInputData}
                        values={formData}
                    />
                );
            // return "Third Page"
            default: return "Unknown";
        }
    }

    const classes = useStyles()

    return (
        <Fragment>
            {/* <Breadcrumbs mainTitle="Organization Master Create-Lead" title="Organization Master Create-Lead" /> */}

            <Container fluid={true}>
                <Row>
                    <Col sm="12" >
                        <Card>
                            <CardBody>

                                <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
                                    {/* <Step>
                <StepLabel>Basic</StepLabel>
            </Step>
            <Step>
                <StepLabel>Company</StepLabel>
            </Step>
            <Step>
                <StepLabel>Company Details</StepLabel>
            </Step> */}

                                    {steps.map((step) => {
                                        return (
                                            <Step key={step}>
                                                <StepLabel>{step}</StepLabel>
                                            </Step>
                                        )
                                    })}

                                </Stepper>
                                <>
                                    <br />
                                    {activeStep === steps.length ? "Submit" : (
                                        <div>
                                            {getStepContent(activeStep)}
                                        </div>
                                        //  <Button onClick={ handleNext }>
                                        // { activeStep === steps.length ? "Finish" : "Next" }
                                        // </Button>

                                    )}
                                </>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default MultiStepForm