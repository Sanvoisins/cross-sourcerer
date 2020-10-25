import { gql } from '@apollo/client';

export const USER_INFOS = gql`{
  viewer {
    name
    login
    company
    location
    avatarUrl
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(first: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
      nodes {
        defaultBranchRef {
          target {
            ... on Commit {
              additions
              deletions
              history {
                totalCount
              }
            }
          }
        }
      }
      totalCount
    }
  }
}
`;

export const OVERVIEW_INFOS = gql`{
  viewer {
    repositories(first: 100) {
      totalCount
      nodes {
        updatedAt
        createdAt
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
  }
}`;

export const LANGUAGES_INFOS = gql`{
  viewer {
    repositories(first: 100) {
      totalCount
      nodes {
        defaultBranchRef {
          target {
            ... on Commit {
              additions
              deletions
              history {
                totalCount
              }
            }
          }
        }
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`;

export const REPOSITORIES_INFOS = gql`{
  viewer {
    repositories(first: 100) {
      nodes {
        name
        description
        nameWithOwner
        createdAt
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`;