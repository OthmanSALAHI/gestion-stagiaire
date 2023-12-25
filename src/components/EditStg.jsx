import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EditAction } from "../config/action";
import { useNavigate } from "react-router-dom"
import {useParams} from 'react-router-dom';
export default function EditStagiaire () {
    const {idStg} = useParams()
    const stg = useSelector(data=> data.stagiaire.find((e)=> e.id === parseInt(idStg)));
    const [nom,setnom] = useState(stg.nom)
    const [prenom,setprenom] = useState(stg.prenom)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const modifie=(e)=>{
        e.preventDefault();
        if (window.confirm("sure")){
        dispatch(EditAction({
            id : idStg,
            nom : nom,
            prenom: prenom
        }))
        navigate("/list")
    }
    }
    return(
        <form onSubmit={modifie}>
            <table>
                <tr>
                    <th>nom</th>
                    <td><input type="text" value={nom} onChange={(e)=>setnom(e.target.value)} required /></td>
                </tr>
                <tr>
                    <th>prenom</th>
                    <td><input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)} required /></td>
                </tr>
            </table>
            <button>save</button>
        </form>
    )
}