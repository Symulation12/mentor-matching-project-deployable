import React from "react";
import { Container, Row } from "reactstrap";

//import Highlight from "../components/Highlight";

export const UserlistComponent = () => {
  //var serverData, setServerData = useState(null);


  // https://create-react-app.dev/docs/proxying-api-requests-in-development/
  /*useEffect(() => {
    fetch('/api/users')
    .then(response => {
      if(response.ok) {
        console.log(response);
        return response.body;
      }
      throw response;
    })
    .then(data => {
      setServerData(data);
    }).catch(error => {
      console.error("Error retrieving user data: " + error);
    })
  }, []);*/
  //<Highlight>{JSON.stringify(serverData, null, 2)}</Highlight>
  return (
    <Container className="mb-5">
      <Row>
        User List
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
};

export default UserlistComponent;
