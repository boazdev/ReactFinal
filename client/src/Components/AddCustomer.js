import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCustomersAction, addProdAction } from "../Utils/appReducer"
import { mongoObjectId } from "../Utils/objectID"
export const AddCustomer = (props) =>
{
const dispatch= useDispatch()
const [customerObj,setCustomerObj] = useState({id:"",firstName:"", lastName:"",city:""})
const submitHandler = () => {
    let customerObjAdd = {...customerObj, id: mongoObjectId()}
    dispatch(addCustomersAction(customerObjAdd))
    props.setRegionCall(false)
}
    return (
        <div>
            <span>First Name : </span> <input type="text" onChange={(e)=>setCustomerObj({...customerObj,firstName:e.target.value})}/><br/>
            <span>Last Name : </span> <input type="text" onChange={(e)=>setCustomerObj({...customerObj,lastName:e.target.value})}/><br/>
            <span>City : </span> <input type="text" onChange={(e)=>setCustomerObj({...customerObj,city:e.target.value})}/><br/>
            <input type="button" value="Cancel" onClick={()=>props.setRegionCall(false)}/>
            <input type="button" value="Submit" onClick={submitHandler}/>

        </div>
    )
}