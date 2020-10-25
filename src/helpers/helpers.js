import React from 'react';
import { Card } from 'react-bootstrap';

export function countLinesOfCode (repositories) {
  let numberOfLines = 0;
  repositories.forEach(element => {
    if(element.defaultBranchRef!==null) {
      if(element.defaultBranchRef.target.additions!==null) {
        numberOfLines += element.defaultBranchRef.target.additions
      }
      if(element.defaultBranchRef.target.deletions!==null) {
        numberOfLines += element.defaultBranchRef.target.deletions
      }
    }
  });
  return numberOfLines.toString()
};

export function countNumberCommits(repositories) {
  let numberOfCommits = 0;
  repositories.forEach(element => {
    if(element.defaultBranchRef!==null) {
      if(element.defaultBranchRef.target.history.totalCount!==null) {
        numberOfCommits += element.defaultBranchRef.target.history.totalCount
      }
    }
  });
  return numberOfCommits.toString()
};

export function formatLanguages(languages) {
  let i = 0;
  return languages.map(function (language) {
    i++
    return (
      <Card key={i} style={{ width: '1rem', height: '5rem', backgroundColor: language.color}}>
        <Card.Body>
          <Card.Subtitle>{ language.name }</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  })
}