import {  createSlice } from "@reduxjs/toolkit"
import { current } from "@reduxjs/toolkit"
import { mongoObjectId } from "./objectID"

const collectionSlice = createSlice({ 
name:"collections",
initialState: {productList:[], customerList:[], purchaseList:[]}
,
reducers:{
    loadProdsAction :(state,action) =>
    {
        if(state.productList.length==0)
            state.productList = action.payload
    },
    addProdAction : (state,action)=> {
        state.productList = [action.payload, ...state.productList]
    },
    
    removeProdAction : (state,action) => {  //to add : remove all purchases of this product
            
        let newProdList = [...state.productList]
        let index = newProdList.findIndex(item=>item.id === action.payload)
        if(index>=0)
        {  
        newProdList.splice(index,1)
        state.productList = newProdList
        state.purchaseList = state.purchaseList.filter(item=>item.productId!==action.payload)
        }
        
    },
    updateProdAction : (state,action) => {
            
        let newProdList = [...state.productList]
        let index = newProdList.findIndex(item=>item.id === action.payload.id)
        if(index>=0)
        {  
        newProdList[index] = action.payload
        state.productList = newProdList
        }
        
    },
    loadCustomersAction : (state,action) =>{
        if(state.customerList.length==0)
            state.customerList = action.payload
    },
    addCustomersAction : (state,action) =>{
        state.customerList = [action.payload, ...state.customerList]
        
    },
    updateCustomersAction : (state,action) =>{
        let newCustomerList = [...state.customerList]
        let index = newCustomerList.findIndex(item=>item.id === action.payload.id)
        if(index>=0)
        {
        newCustomerList[index] = action.payload
        state.customerList = newCustomerList
        }
    },
    removeCustomerAction : (state,action) =>{ //add remove all purchases
        console.log("remove customer action")
        let newCustomerList = [...state.customerList]
        let index = newCustomerList.findIndex(item=>item.id === action.payload)
        if(index>=0)
        {  
        newCustomerList.splice(index,1)
        state.customerList = newCustomerList
        state.purchaseList = state.purchaseList.filter(item=>item.customerId!==action.payload)
        }
    },
    addPurchaseAction : (state,action) =>{
        
        let objAdd = {...action.payload,id:mongoObjectId()}
        //console.log("adding to purchase obj to store:")
        //console.log(objAdd)
        state.purchaseList = [objAdd,...state.purchaseList]
    }

}
})

const {actions, reducer} = collectionSlice
export const {addProdAction,removeProdAction,loadProdsAction,updateProdAction,addCustomersAction,
    removeCustomerAction,loadCustomersAction,updateCustomersAction, addPurchaseAction} = actions
export default reducer