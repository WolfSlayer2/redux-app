export default reducer =(action, state=0)=>{
    if(action.type=='deposit'){
        return state + action.payload;
    }
    else if(action.type=='withdraw'){
        return state - action.payload;
    }
    else{
        return state;
    }
}