import { useState } from "react"
import { Link } from "react-router-dom"
import { PurchaseComp } from "./PurchaseComp"
import { PurchaseLister } from "./PurchaseLister"

export const ProductItem = (props) => {
const [isAddShow,setIsAddShow] = useState(false)
    return (
        <div style={{borderColor:"blue", borderStyle:"solid",width:"360px",marginLeft:"70px", marginTop:"10px"}}>
            <span>Name : <Link to={'/product/'+props.data.id}>{props.data.name}</Link></span><br/>
            <span>Price : {props.data.price}</span><br/>
            <span>Quantity : {props.data.quantity}</span><br/>
            <input type="button" value="Add" onClick={()=>setIsAddShow(!isAddShow)}/><br/>
            {isAddShow && <PurchaseComp prodId={props.data.id}  setShow={setIsAddShow} />}
            <PurchaseLister prodId={props.data.id}/>
        </div>
    )
}

