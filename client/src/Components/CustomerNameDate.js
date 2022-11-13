import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const CustomerNameDate = (props) =>
{
    const storeData = useSelector(state=>state)
    const getCustomerName = () =>
    {
        let customerObj = storeData.customerList.find(item=>item.id===props.customerId)
        return customerObj.firstName +" " + customerObj.lastName
    }
    return (
       <div style={{borderColor:"brown", borderStyle:"solid",width:"240px",marginLeft:"20px", marginTop:"10px"}}>
           <span>Name : <Link to={'/customer/'+props.customerId}>
            {getCustomerName()}</Link></span><br/>
           <span>Date : {props.date}</span>
        </div>  
    )
   
}