import { useParams,Link } from "react-router-dom"
import { useSelector } from "react-redux"
/* import  */
export const EditProductLister = () => {
const params = useParams()
const storeData = useSelector(state=>state)
const getCustomersByPurchase = () => {
    let purchaseItems = storeData.purchaseList.filter(item=>item.productId===params.id)
    let customersLst = purchaseItems.map(item=>storeData.customerList.find(item2=>item2.id===item.customerId))
    /* let customersNames = customersLst.map(item=>item.firstName+" " + item.lastName) */
    /* console.log("list:")
    console.log(customersLst) */
    return customersLst
}
    return (
        <div style={{borderColor:"blue", borderStyle:"solid",width:"400px",marginLeft:"400px", marginTop:"30px"}}>
            <h5>Customers who purchased the product:</h5>
           
            <ul style={{alignContent:"center"}}>
                {getCustomersByPurchase().map(item=><li key={item.id} style={{textAlign:"left"}}><Link to={"/customer/"+item.id}>{item.firstName +" " + item.lastName}
                </Link></li>)}
            </ul>
        </div>
    )
}