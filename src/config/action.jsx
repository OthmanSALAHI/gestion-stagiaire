export const AddAction=(nvstg)=>{
    return { type:"Add" , payload : nvstg }
}
export const EditAction=(stg)=>{
    return { type:"Edit" , payload : stg}
}
export const DeleteAction=(id)=>{
    return { type:"Delete" , payload : id}
}