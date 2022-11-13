import { AmountsPurchased } from "../Components/AmountsPurchased"
import { ProductsLister } from "../Components/ProductsLister"

export const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <AmountsPurchased/>
            <ProductsLister/>
        </div>
    )
}