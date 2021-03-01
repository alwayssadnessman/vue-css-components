interface stateRules{
    username:string
}
export default {
    state:{
        username:"刘岑1"
    },
    mutations:{
        changeUserName(state:stateRules,payload:string){
            state.username = payload
        }
    },
    actions:{
        CHANGE_USER_NAME(context:any,payload:string){
            context.commit("changeUserName",payload)
        }
    },
    getters:{
        username:(state:stateRules)=> state.username + "222"
    }
}