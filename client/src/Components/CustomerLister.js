import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AddCustomer } from "./AddCustomer"

export const CustomerLister = () => {
const storeData = useSelector(state=>state)
const [showAddRegion, setShowAddRegion] = useState(false)

let getProductItems = (customerId) => {
  let purchaseItems = storeData.purchaseList.filter(item=>item.customerId===customerId)
  
  let productLst = purchaseItems.map(item=> {return {data: storeData.productList.find(item2=>item2.id===item.productId), date : item.date}})

  return productLst
}
    return (
        <div style={{borderColor:"red", borderStyle:"solid", width:"500px", marginTop:"20px",marginLeft:"20px", padding:"20px"}}>
            <h3>Customers Data:</h3>
            <input type="button" value="Add Customer" onClick={()=>setShowAddRegion(!showAddRegion)}/>
            {showAddRegion && <AddCustomer setRegionCall={setShowAddRegion}/>}
            <table border="1" style={{borderStyle:"solid", borderColor:"blue", marginTop:"20px"}}>
                <tbody>
                    <tr>
                        <th>Customer name</th>
                        <th>Products</th>
                       
                    </tr>
                    {/* {console.log(storeData.productList)} */}
                    {storeData.customerList.map(item=><tr key={item.id}>
                        <td><Link to={'/customer/'+item.id}>{item.firstName + " " + item.lastName}</Link></td>
                        <td><ul>{getProductItems(item.id).map(item2=><li style={{textAlign:"left"}} key={item2.data.id}>
                            <Link to={'/product/'+item2.data.id}>{item2.data.name}</Link> - {item2.date}</li>)}</ul></td>
                        
                    </tr>)}
                </tbody>
            </table>
            
           {/*  {storeData.productList.map(item=><ProductItem key={item.id} data={item}/>)} */}
        </div>
    )
}