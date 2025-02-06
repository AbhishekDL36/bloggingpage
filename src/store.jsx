import { createStore } from "redux"

const initialObj={
    pageNum:1,
    isAuth:false,
    userName:"",
    blogclicked:-1
}

const reducerfn= (state=initialObj,action)=>{
    switch(action.type){
        case "+" :
            if(state.pageNum===6){
                return {
                    ...state,
                    pageNum:1
                }
            }
                else{
                    return{
                        ...state,
                        pageNum:state.pageNum+1
                    }
                }
            
       
        case "-": 
        if(state.pageNum===1){
            return {
                ...state,
                pageNum:6
            }
        
        }
        else{
            return {
                ...state,
                pageNum:state.pageNum-1
            }
        }
case "getAuth": return {
    ...state,
    isAuth:true,
    userName:action.payload.name.displayName,
    logoutfn:action.payload.logout
}

case "logout":return {
...state,
isAuth:false,
userName:"guest"

}

case "blogClicked":return {
...state,
blogclicked:action.payload
}

        default: return state;
     
    }
}

export const store= createStore(reducerfn)

store.subscribe(()=>console.log(store.getState()))