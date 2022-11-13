import { CustomerBuy } from "../Components/CustomerBuy"
import { CustomerLister } from "../Components/CustomerLister"

export const CustomersPage = () => {
    return (
        <div>
            <h1>Customers Page</h1>
            <table style={{borderSpacing:"20px"}}>
                <tbody>
                    <tr>
                        <td valign="top"><CustomerLister/></td>
                        <td valign="top"><CustomerBuy/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}