import { useDispatch, useSelector } from "react-redux";
import { DeleteAction } from "../config/action";
import {Link} from 'react-router-dom';
import '../styles/StgList.css';
export default function ListStagiaire () {
    const dispatch = useDispatch();
    const stgs = useSelector(data => data.stagiaire);
    const count = stgs.length;
    const del=(code)=>{
        if (window.confirm("sure")) 
        dispatch(DeleteAction(code))
    }
    return(
        <div>
            <h1>List de Sagiaire</h1>
            <table>
                <thead>
                    <tr>
                        <th>code</th>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stgs.map((e , idx)=>
                    <tr key={idx}>
                        <td>
                            {e.id}
                        </td>
                        <td>
                            {e.nom}
                        </td>
                        <td>
                            {e.prenom}
                        </td>
                        <td>
                            <Link to={`/edit/${e.id}`}>
                            <button>edit</button>
                            </Link>
                            <button onClick={()=>del(e.id)}>delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div>Nombre de stagiaire est : {count}</div>
        </div>
    )
}