import { useState } from "react"
import { useSelector } from "react-redux"
export const PurchasedPageComp = () => {

    const storeData = useSelector(state=>state)
    const [selectProduct,setSelectProduct] = useState("none")
const [selectCustomer,setSelectCustomer] = useState("none")
const [selectDate,setSelectDate] = useState("")
const [showTable,setShowTable] = useState(false)
const [isDateChecked, setIsDateChecked] = useState(false)
const [filterList,setFilterList] = useState([])

const searchClickHandler = () => {
console.log("search filters:")
let newDate = new Date(selectDate)
let newDateStr = newDate.toLocaleDateString()
let filterCustomers = selectCustomer==="none" ? storeData.customerList : storeData.customerList.filter(item=>item.id===selectCustomer)
let filterPurchase = filterCustomers.map(item=>{return{customerName:item.firstName + " " + item.lastName,
                    purchaseList:selectProduct==="none" ? storeData.purchaseList.filter(item2=>item2.customerId===item.id) : storeData.purchaseList.filter(item2=>item2.customerId===item.id&&item2.productId===selectProduct)}})
let filterWithDates = filterPurchase.map(item=>{return{...item,purchaseList:item.purchaseList.map(
    item2=>{return{...item2,productName:storeData.productList.find(item3=>item3.id===item2.productId).name}})}})
console.log("filter with dates")
if(isDateChecked)
    filterWithDates = filterWithDates.map(item=>{return{...item,purchaseList:item.purchaseList.filter(
        item2=>item2.date===newDateStr)}})

setShowTable(true)
setFilterList(filterWithDates)


}
    return (
        <div style={{borderColor:"red", borderStyle:"solid",width:"550px",marginLeft:"250px"}}>
            <span>Select Customer : </span>
            <select defaultValue="none" onChange={(e)=>setSelectCustomer(e.target.value)}>
                <option value="none" >{""}</option>
                    {storeData.customerList.map(item=><option key={item.id} value={item.id}>{item.firstName+ " " +
                    item.lastName}</option>)}
            </select>
            <br/>
            <span>Select Product : </span>
            <select defaultValue="none" onChange={(e)=>setSelectProduct(e.target.value)}>
                <option value="none" >{""}</option>
                    {storeData.productList.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <br/>
            <span>Select Date : </span> 
            <input type="checkbox" onChange={(e)=>setIsDateChecked(!isDateChecked)}/>
            <input type="date" onChange={(e)=>setSelectDate(e.target.value)}/><br/>
           
            <input type="button" value="Search" onClick={searchClickHandler}/><br/>
            {showTable && <TableComp listShow={filterList}/>}

        </div>
    )
}

const TableComp = (props) => {

    return (
        <div style={{borderColor:"blue", borderStyle:"solid",width:"400px",margin:"10px"}}>
            <table border="1" style={{borderStyle:"solid", borderColor:"green", margin:"20px"}}>
                <tbody>
                    <tr>
                        <th>Customer Name</th>
                        <th>Products Purchased</th>
                    </tr>
                    {props.listShow.map((item,index)=><tr key={index}><td>{item.customerName}</td>
                    <td><ul>{item.purchaseList.map(item2=><li style={{textAlign:"left"}} key={item2.id}>{item2.productName+" - " +item2.date}</li>)}</ul></td></tr>)}
                </tbody>
            </table>
        </div>
    )
}