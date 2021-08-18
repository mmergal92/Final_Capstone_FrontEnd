import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import FigmaShowComponent from './figmaShow';
import { Dropdown, Option } from "./StatusDropdown/dropdown";
import ProgressTracker from './StatusTracker/progressTracker';

function ProjectBox() {


    var possnam  = (window.location.href).split("/client/").pop().replace('?', '');
    console.log(possnam)
    let nam = possnam
    console.log(nam)

    const ProjectList = [{
        title: "online store 2",
        client: "Spirit Shop Again",
        status: "In Progress",
        dateUploaded: "08/03/2021",
        dueDate: "09/21/2021",
        clientToDo: ["add products to list", "finalize copy", "approve layouts"],
        username: "testclient3",
        onTrack: false, 
        approved: false,
        Notes: "test notes",
        version: 2, 
    }]
    //STATES
    const [status, setStatus] = useState('');
    const [chosen, setChosen]=useState('Not Started')
    const changeChosen = (event) =>{
        setChosen(event.target.value)
    }
    const [newList, setNewList] = useState(ProjectList)
    const [title, setTitle] = useState('');
    const titleChange = (event) =>{
        console.log("Adding text of title")
        setTitle(event.target.value)
    };
    const [client, setClient] = useState(''); 
    const clientChange = (event) =>{
        console.log("Adding text of client")
        setClient(event.target.value)
    };
    const [dueDate, setDueDate] = useState('');
    const dueDateChange = (event) =>{
        console.log("Adding text of date")
        setDueDate(event.target.value)
    };
    const [Notes, setNotes] = useState('');
    const notesChange = (event) =>{
        console.log("Adding text of notes")
        setNotes(event.target.value)
    };
    const [username, setUsername] = useState('');
    const usernameChange = (event) =>{
        console.log("Adding text of username")
        setUsername(event.target.value)
    };
    const [change, setChange] = useState(true)
    const tempArray = newList;
    //HANDLES
   
    
    const handleDelete= async(value)=>{
        const URL = "https://proof-backend.herokuapp.com/" + "projects/"
        console.log(URL)
        // console.log(tempArray[0].comment)
        const remove = await fetch (URL + "/" + value._id, {
            method: 'DELETE',
        })
        console.log(value._id)
    }
    const getNewList = async() => {
        const postURL = "https://proof-backend.herokuapp.com/" + "projects/"
        const response = await fetch (postURL)
        const data = await response.json()
        // console.log(data)
        setNewList(data);
        // console.log(data.id)
    }
    const handleSubmit = (response) =>{
        response.preventDefault()
        console.log(response)
        const postURL = "https://proof-backend.herokuapp.com/" + "projects/"
        console.log(postURL)
        fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                title: title,
                client: nam,
                status: chosen,
                dateUploaded: new Date(Date.now()).toLocaleString(),
                username: localStorage.getItem('userfRealName'),
                Notes: Notes,
            })
        })
        console.log("Did this work?")
        // const tempArray = newList;
        tempArray.push(response)
        setNewList(tempArray)
        setChange(!change);
    }
    React.useEffect(()=>{
        getNewList();
    })
    const loaded = () =>{
        return (
            <div className = "project">
                <div className = "existing-projects">
                <h3>the project scope</h3> 
                <br/>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Username</th>
                        <th>Notes</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((value, index) => {
                        return(
                                <tr key={index}> 
                                    <td>{value.title}</td>
                                    <td>{value.status}</td>  
                                    <td className = "user"><img src={value.profilepic} alt="" />{value.username}</td> 
                                    <td>{value.Notes}</td> 
                                    <td>{localStorage.getItem('userfRealName') === value.username ? <button onClick={() => handleDelete(value)}>DELETE</button> : ''}</td>
                                    </tr>
                        )})}
                    </tbody>
                    </table>
                <br/>
                <div className="figma">
                    < FigmaShowComponent />
                </div> 
                </div>
                
                {/* <div className = "new-projects"> */}
                {/* <h3>Add a new project,<b> {localStorage.getItem('userfRealName')}</b>:</h3>
                <form>
                    <label>
                        <br/>
                    Title: 
                    <input type = "text" className = "project_input" value = {title} onChange = {titleChange} placeholder = "New Project Title"/>
                    Client:
                    <input type = "text" className = "project_input" value = {client} onChange = {clientChange} placeholder = "New Project client"/>
                    Status:
                    <select value={chosen} onChange={changeChosen}>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Needs Review">Needs Review</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Done">Done</option>
                    </select>
                    Project Notes:
                    <textarea className = "project_input" value = {Notes} onChange = {notesChange} placeholder = "New Project Notes"/>
                    </label><br/>
                    <button onClick= {handleSubmit}>Submit</button>
                </form>
                </div>
                <div>
                    {/* < FigmaShowComponent /> */}
                {/* </div>  */}
            </div>
        )
    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return newList ? loaded(): loading();
}
export default ProjectBox