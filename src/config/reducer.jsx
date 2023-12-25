
const first = {
    stagiaire : [
        {id : 1 , nom : "Othman" , prenom : "Salahi" },
        {id : 2 , nom : "Achraf" , prenom : "Halal" },
    ]
}

export const reducer=(state = first , action)=> {
    switch (action.type) {
        case "Add":
            return {...state,stagiaire:[...state.stagiaire,action.payload]};
        case "Edit":
            const stg = state.stagiaire.find((s)=> s.id === parseInt(action.payload.id))
            if (stg)
            {
                stg.nom = action.payload.nom;
                stg.prenom = action.payload.prenom;
            }
            return state;
        case "Delete":
            return {...state,stagiaire:[...state.stagiaire.filter((s)=> s.id !== parseInt(action.payload))]};
        default:
            return state;
    }
}