import React from 'react';
import './RepositoriesComponent.css';
import { useQuery } from '@apollo/client';
import { Button, Spinner, Row, Accordion, Card, CardDeck } from 'react-bootstrap';
import { REPOSITORIES_INFOS } from '../../../data/schemas';
import { formatLanguages } from '../../../helpers/helpers';

export default () => {
  const { loading, error, data } = useQuery(REPOSITORIES_INFOS);
  if (loading) {
    return <Spinner animation="border"/>;
  }
  if (error) {
    console.log(error)
    return <Button variant="danger">Error Loading data </Button>;
  }
  if (data) {
    console.log(data)
    const repositories = data.viewer.repositories.nodes;
    return repositories.map(function (repository) {
      let nbCommits = 0;
      const languages = formatLanguages(repository.languages.nodes)
      if(repository.defaultBranchRef !== null) {
        nbCommits = repository.defaultBranchRef.target.history.totalCount
      }
      return (
          <Row>
            <Accordion className="w-100 m-2">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    { repository.name }
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="">
                    { repository.nameWithOwner }
                    { repository.description }
                    <div>
                      <CardDeck>
                      { languages }
                      </CardDeck>
                    </div>
                    <span>Number of commits : { nbCommits }</span>
                  </Card.Body>
                
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
      )
    })
  }
}