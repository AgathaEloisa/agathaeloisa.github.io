import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardLink} from 'reactstrap';

function ProjectCard({title,image,description,githubLink,link}) {
    return (
      <>
        <Card style={{ width: '18rem' }} className="my-2"
        color="warning"
        outline
    >
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
          </CardBody >
          <img alt={title+' imagen'} src={image} width="100%" />
          <CardBody>
            <CardText>{description}</CardText>
            <CardLink href={link} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </CardLink>
            <CardLink href={githubLink} target="_blank" rel="noopener noreferrer">
              Código en GitHub
            </CardLink>
          </CardBody>
        </Card>
        </>
        /*condicional

    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</>*/
      );
}

export default ProjectCard;