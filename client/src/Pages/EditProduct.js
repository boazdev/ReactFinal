import { useSelector } from "react-redux"
import { useParams,useNavigate } from "react-router-dom"
import { EditProductLister } from "../Components/EditProductLister"
import { ProductForm } from "../Components/ProductForm"

export const EditProduct = () => {
   // const storeData = useSelector(state=>state)
const params = useParams()
    return (
        <div>
            <h1>Edit Product</h1>
            <ProductForm/>
            <EditProductLister/>
        </div>
    )
}

