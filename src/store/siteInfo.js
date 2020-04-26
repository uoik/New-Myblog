// 网页头部信息仓库
export default {
    namespaced: true,
    state:{
        title: 'Home',
        note: 'Keep on going never give up'
    },
    mutations: {
        /**
         * 修改头部标题内容
         * @param {*} state 
         * @param {*} payload {title: xxx, note: xxx}
         */
        modifyTitle(state, {title, note}){
            state.title = title;
            state.note = note;
        }
    }
}