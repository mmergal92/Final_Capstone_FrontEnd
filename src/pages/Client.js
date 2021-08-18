import React, {useState} from 'react'
import CommentBox from '../components/CommentBox'
import ProjectBox from '../components/project'
import ProgressTracker from '../components/StatusTracker/progressTracker'
import { Link } from 'react-router-dom'

const Client = (props) =>{
    // console.log(props)
    // const nam = props.match.params.client
    // const url = "https://stock-prediction-forum-backend.herokuapp.com/" + "projects/" + nam;

    // const [info, setInfo] = useState('null');
    // const getInfo = async() => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setInfo(data)
    // }

    // const clientList = [
    //     {name: "Nana Nkweti"},
    //     {name: "Spirit Shop"},
    //     {name: "Shawnay Cooper"},
    //     {name: "Fat Fowl"},
    //     {name: "Alexia Arthurs"},
    // ]
    // const [cname, setCname] = useState(clientList)

    // const getCname =async() =>{

    // }
    // React.useEffect(()=>{
    //     getInfo();
    // },[])

    // const loaded = () =>{
        const done = "70";
        // for (let i=0; i<info.length; i++){
            // if ({name} == info[i].client)
            return(
            <div>
                <h1> Client Page</h1>
                < ProgressTracker done ={done}/>
                <div className="comment-box">
                <CommentBox />
                </div>
                <div className="project-box">
                <ProjectBox />
                </div>
            </div>
        )
        // }
        // }
    // const loading =()=>{
    //         return <h1>Loading ...</h1>
    //     }
    // return info ? loaded(): loading();
    }
   
    
export default Client