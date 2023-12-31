import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {
        constructor(props)
        {
            super(props);

            this.state={
                employees:[]
            }
        }

    componentDidMount(){
            EmployeeService.getEmployees().then((res)=>
        {
            this.setState({employees:res.data})
        })
    }

    render() {
            return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <table className='table  table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>  
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
	