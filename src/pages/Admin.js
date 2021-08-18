import React, {useState} from 'react'
import ProjectBox from '../components/project'

const Admin = () => {
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
    const [onTrack, setOnTrack] = useState(true);
    // const onTrackChange = (event) =>{
    //     console.log("Adding text on track")
    //     setOnTrack(event.target.value)
    // };
    const [approved, setApproved] = useState(true);
     // const approvedChange = (event) =>{
    //     console.log("Adding text of approved")
    //     setApproved(event.target.value)
    // };
    const [dueDate, setDueDate] = useState('');
    const dueDateChange = (event) =>{
        console.log("Adding text of date")
        setDueDate(event.target.value)
    };
    const [clientToDo, setClientToDo] = useState('');
    const clientToDoChange = (event) =>{
        console.log("Adding text of to dos")
        setClientToDo(event.target.value)
    };
    const [Notes, setNotes] = useState('');
    const notesChange = (event) =>{
        console.log("Adding text of notes")
        setNotes(event.target.value)
    };
    const [version, setVersion] = useState(1);
    const versionChange = (event) =>{
        console.log("Adding text of version")
        setVersion(event.target.value)
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
                client: client,
                dueDate: dueDate,
                status: chosen,
                clientToDo: clientToDo,
                version: version,
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
                        <th>client</th>
                        <th>status</th>
                        <th>dateUploaded</th>
                        <th>dueDate</th>
                        <th>Client To Do's</th>
                        <th>Version</th>
                        <th>username</th>
                        <th>Notes</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((value, index) => {
                        return(
                                <tr key={index}>
                                    <td>{value.title}</td>  
                                    <td>{value.client}</td>  
                                    <td>{value.status}</td>  
                                    <td>{value.dateUploaded}</td> 
                                    <td>{value.dueDate}</td>
                                    <td>{value.clientToDo}</td>
                                    <td>{value.version}</td>
                                    <td>{value.username}</td>  
                                    <td className= "notesp">{value.notes}</td>
                                    <td>{localStorage.getItem('userfRealName') === value.username ? <button onClick={() => handleDelete(value)}>DELETE</button> : ''}</td>
                                    </tr>
                        )})}
                    </tbody>
                    </table>
                <br/>
                </div>
                <div className = "new-projects">
                <h3>Add a new project,<b> {localStorage.getItem('userfRealName')}</b>:</h3>
                <form>
                    <label>
                        <br/>
                    Title: 
                    <input type = "text" className = "project_input" value = {title} onChange = {titleChange} placeholder = "New Project Title"/>
                    Client:
                    <input type = "text" className = "project_input" value = {client} onChange = {clientChange} placeholder = "Client Name"/>
                    Status:
                    <select value={chosen} onChange={changeChosen} className="project_input">
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Needs Review">Needs Review</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Done">Done</option>
                    </select>
                    Due Date:
                    <input type = "text" className = "project_input" value = {dueDate} onChange = {dueDateChange} placeholder = "Due Date"/>
                    <br/>
                    Client's To-Do List:
                    <textarea className = "project_input" value = {clientToDo} onChange = {clientToDoChange} placeholder = "Client To-Do Items"/>
                    Version of Files:
                    <input type = "number" className = "project_input" value = {version} onChange = {versionChange} placeholder = "Version of files"/>
                    <br/>Project Notes:
                    <textarea className = "project_input" value = {Notes} onChange = {notesChange} placeholder = "Notes"/>
                    </label><br/>
                    <button onClick= {handleSubmit}>Submit</button>
                </form>
                </div>
                <div>
                    {/* < FigmaShowComponent /> */}
                </div>
            </div>
        )
    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return newList ? loaded(): loading();
    
    return (
        <div>
            <div className="project-box">
                <ProjectBox />
                </div>
        </div>
    )
}

export default Admin
