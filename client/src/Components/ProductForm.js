import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeProdAction, updateProdAction } from "../Utils/appReducer"
export const ProductForm = (props) => {
    const params = useParams()
    const storeData = useSelector(state=>state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({id:params.id,name:"", price:0,quantity:0})
useEffect(
    () => {
        let productItem = storeData.productList.find(item=>item.id===params.id)
        setProductData(productItem)
    },[]
)
const deleteClickHandler = () =>
{
    dispatch(removeProdAction(params.id))
    navigate(-1)

}
const updateClickHandler = (e) =>
{
    e.preventDefault()
    dispatch(updateProdAction(productData))
    navigate(-1)
}
    return (
        <div style={{borderColor:"red", borderStyle:"solid",width:"500px",marginLeft:"400px"}}>
            <form>
                <span>Name : </span><input type="text" value={productData.name} 
                onChange={(e)=>setProductData({...productData,name:e.target.value})}/><br/>
                <span>Price : </span><input type="text" value={productData.price }
                    onChange={(e)=>setProductData({...productData,price:+e.target.value})}/><br/>
                <span>Quantity : </span><input type="text" value={productData.quantity}
                onChange={(e)=>setProductData({...productData,quantity:+e.target.value})}/><br/>
                {/* <input type="button" value="Cancel" onClick={()=>navigate('/products')}/> */}
                <input type="button" value="Cancel" onClick={()=>navigate(-1)}/>
                <input type="button" value="Delete" onClick={deleteClickHandler}/>
                <input type="submit" value="Update" onClick={updateClickHandler}/>
            </form>
        </div>
    )
}