import { server } from "../core/server";

export const FETCH_ALL_EMPLOYEE = async (
  payload = `
    query {
    employees {
        FirstName
        LastName    
        Title
        Department
        DateOfJoining
        Age
        EmployeeType
        CurrentStatus
    }
    }
`
) => {
  try {
    const response = server.post("/graphql", { query: payload });

    return (await response).data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FILTER_OPTIONS = async ({ search, category }) => {
  let payload = `
  query	 {
    findbyOption(search:"${search}" category: "${category}") {
      FirstName
      LastName
      Title
      Age
      EmployeeType
      Department
      DateOfJoining
      CurrentStatus
    }
  }
  
  
`;
  try {
    const response = server.post("/graphql", { query: payload });

    return (await response).data.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const CREATE_EMPLOYEE_RECORD = async (params = {}) => {
  let payload = {
    query: `
    mutation {
  
        createEmployee(inputs: {
          FirstName:"${params.FirstName}", 
          LastName:"${params.LastName}", 
          Title:"${params.Title}", 
          Age: ${params.Age},
          Department:"${params.Department}",
          DateOfJoining:"${params.DateOfJoining}",
          EmployeeType: "${params.EmployeeType}"
        }), {
          FirstName
          LastName
          Title
          Age
          Department
          DateOfJoining
          EmployeeType
          
        }
      }    

        `,
  };
  try {
    const response = server.post("/graphql", payload);

    return (await response).data;
  } catch (error) {
    return error.response || error.message;
  }
};
