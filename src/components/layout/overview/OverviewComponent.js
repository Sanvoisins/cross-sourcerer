import React from 'react';
import './OverviewComponent.css';
import { useQuery } from '@apollo/client';
import { Button, Spinner, Row } from 'react-bootstrap';
import { OVERVIEW_INFOS } from '../../../data/schemas';

export default () => {
  const { loading, error, data } = useQuery(OVERVIEW_INFOS);
  if (loading) {
    return <Spinner animation="border"/>;
  }
  if (error) {
    console.log(error)
    return <Button variant="danger">Error Loading data </Button>;
  }
  if (data) {
    return (
        <Row>
          <Button variant="success">Data loaded </Button>
        </Row>
    )
  }
}