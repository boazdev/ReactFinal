import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addPurchaseAction } from "../Utils/appReducer"
import { mongoObjectId } from "../Utils/objectID"
export const PurchaseComp = (props) => {
const [customerList, setCustomerList] = useState([])
const dispatch = useDispatch()
const storeData = useSelector(state=>state)
/* useEffect(
    ()=> { 
        setCustomerList(storeData.customerList)
    },[storeData.customerList]
) */
   const [selectedCustomer, setSelectedCustomer] = useState(storeData.customerList[0].id)
    const saveHandler = () => {
        let newDate = new Date()
        let dateVal =newDate.toLocaleDateString()
        let purchaseObj = {customerId:selectedCustomer, productId:props.prodId, date: dateVal}
        /* console.log("adding purchase obj:")
        console.log(purchaseObj) */
        dispatch(addPurchaseAction(purchaseObj))
        props.setShow(false)
    }
    return (
        <div style={{borderColor:"yellow", borderStyle:"solid",width:"200px",marginLeft:"40px", marginTop:"10px", marginBottom:"10px"}}>
            <span>Select Customer : </span>
            <select onChange={(e)=>setSelectedCustomer(e.target.value)}>
            {storeData.customerList.map(item=><option key={item.id} value={item.id}>{item.firstName+ " " +item.lastName}</option>)}
            </select>
            <br/>
            <input type="button" value="Cancel" onClick={()=>props.setShow(false)}/>
            <input type="button" value="Save" onClick={saveHandler}/>
        </div>
    )
}