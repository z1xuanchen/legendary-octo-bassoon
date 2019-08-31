import gql from "graphql-tag";

export const WHO_AM_I = gql`
  query ME{
    me{
      id
      username
      email    
      isActive
    }
  }
`;

export const MY_PATHWAYS = gql`
  query ME{
    pathway{
        id
        table{
          id
          major
          reportId
          school
          targetSchool
          array
        }
    }
  }
`;

export const SAVE_PATHWAY = gql`
  mutation SavePathway($reportId: String!) {
    savePathway(reportId: $reportId){
        pathway{
            table{
                reportId
            }
        }
    }
  }
`;



export const DELETE_PATHWAY = gql`
  mutation deletePathway($pathwayId: String!) {
    deletePathway(pathwayId: $pathwayId){
        deletedBy{
            username
        }
    }
  }
`;

export const MAP_FILTER_BY_REPORT_ID = gql`query tables($reportId: String!) 
  {
    tables(reportId: $reportId) {
      id
      major
      reportId
      school
      targetSchool
      array
      url
    }
  }
`;

export const LHS_FILTER_BY_LHS_ID = gql`query lhsId($lhsId: String!)
    {
        lhsId(id: $lhsId){
            id
            school
            array
        }
            
    }
    
`;

export const RHS_FILTER_BY_LHS_ID = gql`query rhsLhsId($lhsId: String!)
    {
        rhsLhsId(lhsId: $lhsId){
            id
            school
            array
        }
            
    }
    
`;

const COURSE_FILTER = gql`
  query COURSE_FILTER($cname: String!) {
    coursefilter(cname: $cname) {
      department
      cnum
      cname
      title
    }
  }
`;