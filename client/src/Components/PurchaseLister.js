import { useSelector } from "react-redux"
import { CustomerNameDate } from "./CustomerNameDate"
export const PurchaseLister = (props) => {
const storeData = useSelector(state=>state)
    return (
        <div style={{borderColor:"teal", borderStyle:"solid",width:"290px",marginLeft:"20px", marginTop:"10px"}}>
            <h5>Customers who purchased the product:</h5>
            {storeData.purchaseList.filter(item=>item.productId===props.prodId).map(mapItem=><CustomerNameDate key={mapItem.id} 
            customerId={mapItem.customerId} date={mapItem.date}/>)}
        </div>
    )
}

