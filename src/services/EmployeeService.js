import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://172.18.17.150:8000/sap/opu/odata/sap/ZEMPLOYEES_SRV/EMPLOYEESet?$format=json";

class EmployeeService {
 getEmployees(){
       return axios.get('http://localhost:8081/'+EMPLOYEE_API_BASE_URL, {
        auth: {
          username: 'developer',
          password: 'Down1oad'
        }
      })
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()