import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddAction } from "../config/action"
import { useNavigate } from "react-router-dom"
export default function AddStagiaire () {
    const [nom,setnom] = useState("")
    const [prenom,setprenom] = useState("")
    const stg = useSelector(data=> data.stagiaire);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Add=(e)=>{
        e.preventDefault();
       if (window.confirm("sure")) {

            dispatch(AddAction({
                id : stg.at(-1).id + 1,
                nom : nom,
                prenom: prenom
            }))
            navigate("/list")
        }
    }
    return(
        <form onSubmit={ Add }>
            <table>
                <tr>
                    <th>nom</th>
                    <td><input type="text" onChange={(e)=>setnom(e.target.value)} required/></td>
                </tr>
                <tr>
                    <th>prenom</th>
                    <td><input type="text" onChange={(e)=>setprenom(e.target.value)} required/></td>
                </tr>
            </table>
            <button>ajouter</button>
        </form>
    )
}