import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeCustomerAction, updateCustomersAction } from "../Utils/appReducer"
export const CustomerForm = () => {
    const params = useParams()
    const storeData = useSelector(state=>state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [customerData, setCustomerData] = useState({id:params.id,firstName:"", lastName:"",city:""})
useEffect(
    () => {
        let customerItem = storeData.customerList.find(item=>item.id===params.id)
        setCustomerData(customerItem)
    },[]
)
const deleteClickHandler = () =>
{
    dispatch(removeCustomerAction(params.id))
   /*  navigate('/customers') */
   navigate(-1)

}
const updateClickHandler = (e) =>
{
    e.preventDefault()
    dispatch(updateCustomersAction(customerData))
    navigate(-1)

  /*   navigate('/customers') */
}
    return (
        <div style={{borderColor:"red", borderStyle:"solid",width:"500px",marginLeft:"400px"}}>
            <form>
                <span>First Name : </span><input type="text" value={customerData.firstName} 
                onChange={(e)=>setCustomerData({...customerData,firstName:e.target.value})}/><br/>
                <span>Last Name : </span><input type="text" value={customerData.lastName }
                    onChange={(e)=>setCustomerData({...customerData,lastName:e.target.value})}/><br/>
                <span>City : </span><input type="text" value={customerData.city}
                onChange={(e)=>setCustomerData({...customerData,city:e.target.value})}/><br/>
                <input type="button" value="Cancel" onClick={()=>navigate(-1)}/>
                <input type="button" value="Delete" onClick={deleteClickHandler}/>
                <input type="submit" value="Update" onClick={updateClickHandler}/>
            </form>
        </div>
    )
}