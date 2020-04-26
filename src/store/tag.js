import { queryAllTag } from '../services/loader';

// 博客信息仓库
export default {
    namespaced: true,
    state:{
        tags: null
    },
    mutations: {
        /**
         * 更新tags
         * @param {*} state 
         * @param {Array} payload 标签对象
         */
        updateTags(state, payload){
            state.tags = payload;
        }
    },
    actions: {
        /**
         * 查询全部标签
         * @param {*} context 仓库上下文
         * @param {*} payload 
         */
        async queryAllTag(context){
            const result = await queryAllTag().then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            context.commit('updateTags', result);
        }
    }
}