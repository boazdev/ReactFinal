import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import { CustomersPage } from './CustomersPage';
import {ProductsPage} from './ProductsPage';
import {PurchasesPage} from './PurchasesPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mongoObjectId } from '../Utils/objectID';
import { loadCustomersAction, loadProdsAction } from '../Utils/appReducer';
import { EditProduct } from './EditProduct';
import { EditCustomer } from './EditCustomer';
export const MainPage = () =>
{
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            let initProductList = [{id: mongoObjectId(), name:"toilet paper", price:30,quantity:100}
                                     , {id: mongoObjectId(), name:"Samsung Screen", price:120,quantity:25}]
                                     dispatch(loadProdsAction(initProductList))

            let initCustomerList = [{id: mongoObjectId(), firstName:"Yone", lastName:"Ervin",city:"Midkemina"}
            , {id: mongoObjectId(), firstName:"Yasuo", lastName:"Hasagi",city:"Demacia"}]
            dispatch(loadCustomersAction(initCustomerList))
        }, []
    )
    return (
        <div>
           
            <div>
                <Router>
                    {/* put links here */}
                    <div style={{width:100 + "vw", backgroundColor: "green"}}>
                    <h1>Products Management System</h1>
                        <Link to="/products"><Button name="Products"></Button></Link>
                        <Link to="/customers"><Button name="Customers"></Button></Link>
                        <Link to="/purchases"><Button name="Purchases"></Button></Link>
                        <br/>
                        <hr></hr>
                        </div>
                    <Routes>
                        <Route exact path='/products' element={<ProductsPage/>}/>
                        <Route exact path='/customers' element={<CustomersPage/>}/>
                        <Route exact path='/purchases' element={<PurchasesPage/>}/>
                        <Route exact path='/product/:id' element={<EditProduct/>}/>
                        <Route exact path='/customer/:id' element={<EditCustomer/>}/>
                    </Routes>

                </Router>
                </div>
            </div>
    )
}

const Button = (props) => {
    return (
        <>
        <button style={{width:"100px", height:"50px", cursor:"pointer", marginLeft:"40px", fontSize:"14px"}}>{props.name}</button>
        </>
    )
}