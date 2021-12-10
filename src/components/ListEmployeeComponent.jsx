import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import axios from 'axios';
class ListEmployeeComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
       
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

   componentDidMount(){
      
       EmployeeService.getEmployees().then((res) => {
    this.setState({ employees: res.data.d.results});   
        }).catch(error => {       
            console.log(error)
          });
        }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
      
return (
            <div>
  
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                
               
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Id</th>
                                    <th> Employee Name</th>
                                    <th> Employee Age</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                                         
                                  this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.Id}>
                                            <td> { employee.Id} </td>  
                                            <td> { employee.Name} </td>   
                                             <td> { employee.Age} </td>  
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.Id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.Id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.Id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
