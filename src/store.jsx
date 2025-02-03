import { createStore } from "redux"

const initialObj={
    pageNum:1
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

        default: return state;
     
    }
}

export const store= createStore(reducerfn)