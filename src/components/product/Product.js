import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
  } from 'reactstrap';

const Example = props => {
    return (
      <div className="col-md-4">
        <Card className="mb-3">
          <CardImg 
          top 
          width="100%" 
          src={props.image} 
          />
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
export default Example;
  