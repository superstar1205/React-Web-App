import { gql } from "@apollo/client";

const JOB_LIST = gql`
  query {
    allJob {
      id
      postName
      qualification
      applyBefore
      postedOn
      salary
      externalLink
      minageLimit
      maxageLimit
      recruitmentBoard
      vacancy
      jobType {
        type
      }
      jobSector {
        sector
      }
      jobLocation {
        location
      }
      jobCategory {
        category
      }
    }
  }
`;

const ABOUT = gql`
  query {
    about {
      body
    }
  }
`;

const PRIVACY = gql`
  query {
    privacy {
      body
    }
  }
`;

const TERMS = gql`
  query {
    terms {
      body
    }
  }
`;

const DISCLAIMER = gql`
  query {
    disclaimer {
      body
    }
  }
`;


export { JOB_LIST, ABOUT, PRIVACY, TERMS, DISCLAIMER };
