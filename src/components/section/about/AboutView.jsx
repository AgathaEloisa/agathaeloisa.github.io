import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function AboutView () {
    return (
        <>
            <h1>Sobre mí</h1>
            <Card className="mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./ph3.jpeg" className="img-fluid rounded-start" alt="fotografía de perfil"/>
    </div>
    <div className="col-md-8">
      <CardBody className="card-body">
        <CardTitle>Card title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
      </CardBody>
    </div>
  </div>
</Card>
        </>
    )
}

export default AboutView;