import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProdAction } from "../Utils/appReducer"
import { mongoObjectId } from "../Utils/objectID"
export const AddProduct = (props) =>
{
const dispatch= useDispatch()
const [prodObj,setProdObj] = useState({id:"",name:"", price:0,quantity:0})
const submitHandler = () => {
    let prodObjAdd = {...prodObj, id: mongoObjectId()}
    dispatch(addProdAction(prodObjAdd))
    props.setRegionCall(false)
}
    return (
        <div>
            <span>Name : </span> <input type="text" onChange={(e)=>setProdObj({...prodObj,name:e.target.value})}/><br/>
            <span>Price : </span> <input type="text" onChange={(e)=>setProdObj({...prodObj,price:+e.target.value})}/><br/>
            <span>Quantity : </span> <input type="text" onChange={(e)=>setProdObj({...prodObj,quantity:+e.target.value})}/><br/>
            <input type="button" value="Cancel" onClick={()=>props.setRegionCall(false)}/>
            <input type="button" value="Submit" onClick={submitHandler}/>

        </div>
    )
}