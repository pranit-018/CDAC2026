import React, { Component } from 'react'

export class MyListComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             courses:[
                {id:1,name:"HTML", price:1000},
                {id:2,name:"CSS" , price:2000},
                {id:3,name:"JS", price:3000},
                {id:4,name:"NodeJs", price:3000},
                {id:4,name:"Recat", price:5000}
            ],
            emp:[
                {id:101, ename:"Rahul",post:"devloper", esal:60000,egender:"male"},
                {id:102, ename:"Arya",post:"Tester", esal:40000,egender:"female"}, 
                {id:103, ename:"Sanket",post:"tester", esal:40000,egender:"male"},
                {id:104, ename:"Adi",post:"devloper", esal:70000,egender:"male"},
            ]
        }
    }
    
    render() {
        const {courses} = this.state;
        const{emp} = this.state;
        return (
            <div>
                <h2>This is my course List</h2>
                <ul>
                    {
                        courses.map((val,index)=>{
                            return <li key={index}>{val.name} - {val.price}</li>
                        })
                    }
                </ul>
                <hr />

                <table border={5}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            {
                                emp.map((val,index)=>{
                                    return <tr key={index}>{val.ename}</tr>
                                })
                            }
                        </td>
                        <td>
                            {
                                emp.map((val,index)=>{
                                    return <tr key={index}>{val.post}</tr>
                                })
                            }
                        </td>
                         <td>
                            {
                                emp.map((val,index)=>{
                                    return  <tr key={index}> {val.esal}</tr>
                                })
                            }
                        </td>
                         <td>
                            {
                                emp.map((val,index)=>{
                                    return <tr key={index}>{val.egender}</tr>
                                })
                            }
                        </td>
                    </tr>
                    </tbody>
                    
                </table>

                  
            </div>
            
        )
    }
}

export default MyListComp
