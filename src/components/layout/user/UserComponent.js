import React from 'react';
import './UserComponent.css';
import { Button, Spinner, Image, Row } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { countLinesOfCode, countNumberCommits } from '../../../helpers/helpers';
import { USER_INFOS } from '../../../data/schemas'

export default () => {
  const { loading, error, data } = useQuery(USER_INFOS);
  if (loading) {
    return <Spinner animation="border"/>;
  }
  if (error) {
    return <Button variant="danger">Error Loading data  </Button>;
  }
  if (data) {
    console.log(data)
    return (
        <Row>
          <span>{data.viewer.name}</span>
          <Image className="avatar" src={data.viewer.avatarUrl} roundedCircle />
          <div className="box commits">
            <p>Commits</p>
            <p>{countNumberCommits(data.viewer.repositories.nodes)}</p>
          </div>
          <div className="box repos">
            <p>Repos</p>
            <p>{data.viewer.repositories.totalCount}</p>
          </div>
          <div className="box linesOfCode">
            <p>Lines of code</p>
            <p>{countLinesOfCode(data.viewer.repositories.nodes)}</p>
          </div>
          <div className="box followers">
            <p>Followers</p>
            <p>{data.viewer.followers.totalCount}</p>
          </div>
          <div className="box followings">
            <p>Following</p>
            <p>{data.viewer.following.totalCount}</p>
          </div>
        </Row>
    )
  }
}
