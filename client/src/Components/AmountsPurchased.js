import { useState } from "react"
import { useSelector } from "react-redux"
import { AddProduct } from "./AddProduct"
export const AmountsPurchased = () =>{
const storeData = useSelector(state=>state)
const [showAddRegion, setShowAddRegion] = useState(false)
    return (
        <div style={{borderColor:"red", borderStyle:"solid",width:"500px",marginLeft:"400px"}}>
            <span>Total amount of purchased products : {storeData.purchaseList.length}</span>
            <br/>
            <input type="button" value="Add Product" onClick={()=>setShowAddRegion(!showAddRegion)}/><br/>
            {showAddRegion && <AddProduct setRegionCall={setShowAddRegion}/>}
        </div>
    )
}

