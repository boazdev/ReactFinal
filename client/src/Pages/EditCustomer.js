
/* import { Customer } from "../Components/ProductForm" */

import { CustomerForm } from "../Components/CustomerForm"
import { EditCustomerLister } from "../Components/EditCustomerLister"

export const EditCustomer = () => {
   // const storeData = useSelector(state=>state)

    return (
        <div>
            <h1>Edit Customer</h1>
            <CustomerForm/>
            <EditCustomerLister/>
        </div>
    )
}

