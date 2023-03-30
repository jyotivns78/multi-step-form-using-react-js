import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

  //destructuring the object from values
  const { orgName, orgEmail, orgNumber, orgAddress, panNumber, tinNumber, tanNumber, gstNumber, cinNumber, factoryLicence, moa, consent, certificateNumber, pfCode, esicNumber, taxNumber, clraNumber, ismwNumber, labourWelfare, businessUnit, grades, salaryGrade, departmentName, department, subDepartment, employeeCategorry, workLocation } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Organization Name :</strong> {orgName}{" "}
          </p>
          <p>
            <strong>Organization Email :</strong> {orgEmail}{" "}
          </p>
          <p>
            <strong>Organization Number :</strong> {orgNumber}{" "}
          </p>
          <p>
            <strong>Organization Address :</strong> {orgAddress}{" "}
          </p>
          <p>
            <strong>PAN Of Organization :</strong> {panNumber}{" "}
          </p>
          <p>
            <strong>TIN Number :</strong> {tinNumber}{" "}
          </p>
          <p>
            <strong>TAN Number :</strong> {tanNumber}{" "}
          </p>
          <p>
            <strong>GST Number :</strong> {gstNumber}{" "}
          </p>
          <p>
            <strong>CIN Name :</strong> {cinNumber}{" "}
          </p>
          <p>
            <strong>Factory Licence :</strong> {factoryLicence}{" "}
          </p>
          <p>
            <strong>MOA/AOA :</strong> {moa}{" "}
          </p>
          <p>
            <strong>Pollution Consent :</strong> {consent}{" "}
          </p>
          <p>
            <strong>Organization Certificate No. :</strong> {certificateNumber}{" "}
          </p>
          <p>
            <strong>PF Code :</strong> {pfCode}{" "}
          </p>
          <p>
            <strong>ESIC Number :</strong> {esicNumber}{" "}
          </p>
          <p>
            <strong>Tax Number :</strong> {taxNumber}{" "}
          </p>
          <p>
            <strong>CLRA Number :</strong> {clraNumber}{" "}
          </p>
          <p>
            <strong>ISMW Number :</strong> {ismwNumber}{" "}
          </p>
          <p>
            <strong>Labour Welfare :</strong> {labourWelfare}{" "}
          </p>
          <p>
            <strong>Business Unit :</strong> {businessUnit}{" "}
          </p>
          <p>
            <strong>Grades :</strong> {grades}{" "}
          </p>
          <p>
            <strong>Salary Grade :</strong> {salaryGrade}{" "}
          </p>
          <p>
            <strong>Department Name :</strong> {departmentName}{" "}
          </p>
          <p>
            <strong>Department :</strong> {department}{" "}
          </p>
          <p>
            <strong>Sub Department :</strong> {subDepartment}{" "}
          </p>
          <p>
            <strong>Employee Category :</strong> {employeeCategorry}{" "}
          </p>
          <p>
            <strong>Work Location :</strong> {workLocation}{" "}
          </p>

        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
