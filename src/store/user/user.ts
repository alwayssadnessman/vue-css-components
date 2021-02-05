export default {
    state:{
        username:"刘岑1"
    },
    mutations:{
        changeUserName(state:any,payload:string){
            state.username = payload
        }
    },
    actions:{
        CHANGE_USER_NAME(context:any,payload:string){
            context.commit("changeUserName",payload)
        }
    },
    getters:{
        username:state=> state.username + "222"
    }
}