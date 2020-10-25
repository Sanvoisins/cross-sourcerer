import React from 'react';
import './LanguagesComponent.css';
import { useQuery } from '@apollo/client';
import { Button, Spinner, Row } from 'react-bootstrap';
import { LANGUAGES_INFOS } from '../../../data/schemas';

export default () => {
  const { loading, error, data } = useQuery(LANGUAGES_INFOS);
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