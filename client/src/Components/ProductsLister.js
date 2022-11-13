import { useSelector } from "react-redux"
import { ProductItem } from "./ProductItem"
export const ProductsLister = () => {
const storeData = useSelector(state=>state)
    return (
        <div style={{borderColor:"green", borderStyle:"solid", width:"500px", marginTop:"60px",marginLeft:"400px"}}>
            <h3>Products Data:</h3>
            {storeData.productList.map(item=><ProductItem key={item.id} data={item}/>)}
        </div>
    )
}