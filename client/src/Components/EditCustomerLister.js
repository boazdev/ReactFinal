import { useParams,Link } from "react-router-dom"
import { useSelector } from "react-redux"
export const EditCustomerLister = () => {

    const params = useParams()
const storeData = useSelector(state=>state)
const getProductsByCustomer = () => {
    let purchaseItems = storeData.purchaseList.filter(item=>item.customerId===params.id)
    let productLst = purchaseItems.map(item=>storeData.productList.find(item2=>item2.id===item.productId))
    /* let customersNames = customersLst.map(item=>item.firstName+" " + item.lastName) */
    /* console.log("list:")
    console.log(customersLst) */
    return productLst
}
    return (
        <div style={{borderColor:"blue", borderStyle:"solid",width:"400px",marginLeft:"400px", marginTop:"30px"}}>
            <h5>Products purchased by customer:</h5>
           
            <ul style={{alignContent:"center"}}>
                {getProductsByCustomer().map(item=><li key={item.id} style={{textAlign:"left"}}><Link to={"/product/"+item.id}>{item.name}
                </Link></li>)}
            </ul>
        </div>
    )
}