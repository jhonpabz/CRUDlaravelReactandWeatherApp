import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import './style.css';




class Student extends Component
{
    state = {
        students: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/students');
        // console.log(res);
        if(res.data.status === 200)
        {
            this.setState({
                students: res.data.students,
                loading: false,
            });
        }
    }

    deleteStudent = async (e, id) => {

        const delBtnClicked = e.currentTarget;
        // delBtnClicked.innerText = "Deleting";

        const res = await axios.delete(`http://localhost:8000/api/delete-student/${id}`);
        if(res.data.status ===200)
        {
            delBtnClicked.closest("tr").remove();
            // console.log(res.data.message);
            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
        }
    }

    render() {
        var student_HTMLTABLE = "";

        if(this.state.loading)
        {
            student_HTMLTABLE = <tr><td  colSpan="12"><div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div></td></tr>
        }
        else
        {
            student_HTMLTABLE =
            this.state.students.map( (item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`edit-student/${item.id}`} ><i className="fa fa-edit" aria-hidden="true"></i></Link>
                        </td>
                        <td>
                            <i type="button" onClick={(e) => this.deleteStudent(e, item.id)}  className="fa fa-trash" aria-hidden="true"></i>
                        </td>
                    </tr>
                );
            } );
        }

        

        return (
        <div className="page-container">
            <div class="height-100 "> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Students Data
                                        <Link to={'add-student'} className="btn btn-md float-end stud-btn"><i className="fas fa-plus"></i>Add Student</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">                               
                                <div className="table-responsive-lg">
                                    <table className="table table-hover ">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Course</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th colSpan={2}>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {student_HTMLTABLE}
                                        </tbody>

                                    </table>


                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
         </div>  
        );
    }

}

export default Student;

