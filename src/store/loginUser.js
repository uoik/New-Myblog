import { loginUser } from '../services/loader'

export default {
    namespaced: true,
    state: {
        loginUser: ''
    },
    mutations:{
        /**
         * 设置账号
         * @param {*} state 
         * @param {*} loginUser 账号
         */
        updateLogin(state, loginUser){
            state.loginUser = loginUser;
        }
    },
    actions: {
        /**
         * 登陆账号
         * @param {*} context 
         * @param {*} payload 
         */
        async login(context, payload){
            const result = await loginUser(payload).then(data => data.result);
            if(result.loginUser){
                context.commit('updateLogin', result.loginUser);
                return result.message;
            }else {
                return result.message;
            }
        }
    }
}