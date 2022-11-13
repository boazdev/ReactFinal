import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPurchaseAction } from "../Utils/appReducer"
export const CustomerBuy = () => {
const [isBuyShow,setIsBuyShow] = useState(false)
    return (
        <div style={{borderColor:"black", borderStyle:"solid", width:"500px", marginTop:"20px",marginLeft:"100px"}}>
            <input type="button" value="Buy Product" onClick={()=>setIsBuyShow(!isBuyShow)}/>
            {isBuyShow && <BuyComp setShow={setIsBuyShow}/>}
        </div>
    )
}

const BuyComp = (props) => {
const storeData = useSelector(state=>state)
const [selectProduct,setSelectProduct] = useState("")
const [selectCustomer,setSelectCustomer] = useState("")

const dispatch = useDispatch()

const buyClickHandler = (e) =>{
    e.preventDefault()
    let newDate = new Date()
    let dateVal = newDate.toLocaleDateString()
    let objPurchase = {productId:selectProduct, customerId:selectCustomer,date:dateVal}
    props.setShow(false)
    dispatch(addPurchaseAction(objPurchase))
}
    return (
        <div style={{borderColor:"yellow", borderStyle:"solid",width:"290px" ,marginLeft:"100px"/* ,marginLeft:"40px", marginTop:"10px", marginBottom:"10px" */}}>
            <form>
                <span>Select Product : </span> 
                <select defaultValue="none" onChange={(e)=>setSelectProduct(e.target.value)}>
                <option value="none" disabled hidden>Select a Product</option>
                    {storeData.productList.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
                    </select><br/>
                <span>Select Customer : </span> 
                <select defaultValue="none" onChange={(e)=>setSelectCustomer(e.target.value)}>
                <option value="none" disabled hidden>Select a Customer</option>
                {storeData.customerList.map(item=><option key={item.id} value={item.id}>{item.firstName+ " " +item.lastName}</option>)}
                </select><br/>
                <input type="submit" value="Buy" onClick={buyClickHandler}/>
            </form>
        </div>
    )
}