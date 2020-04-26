import { addBlog, queryHotBlog, queryBlog, queryTag, queryAllBlog, queryBlogById } from '../services/loader'

// 博客信息仓库
export default {
    namespaced: true,
    state: {
        page: 1,
        pageSize: 5,
        data: null,
        total: 0,
        tag: '',
        HotBlog: null,
        AllBlog: null
    },
    mutations: {
        /**
         * 修改仓库信息
         * @param {*} state 仓库
         * @param {Object} payload 挂载对象
         */
        updateState(state, payload) {
            if (typeof payload !== 'object') {
                return;
            }
            for (const key in payload) {
                state[key] = payload[key]
            }
        }
    },
    actions: {
        /**
         * 添加博客
         * @param {*} content 
         * @param {*} payload {title: xxx, content: xxx, describe: xxx, tag: xxx}
         */
        async addBlog(content, payload){
            return await addBlog(payload);
        },

        /**
         * 根据ID获取博客
         * @param {*} context 
         * @param {*} id ID
         */
        async getBlogById(context, id){
            const result = queryBlogById(id).then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            return result;
        },

        /**
         * 按页获取博客
         * @param {*} context 
         */
        async getBlog(context) {
            const { page, pageSize } = context.state;
            const result = await queryBlog(page, pageSize).then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            result.data = result.data.map(i => ({ ...i, time: new Date(i.ctime * 1000).toDateString() }));
            context.commit('updateState', {
                data: result.data,
                total: result.total
            })
            return true;
        },

        /**
         * 根据标签获取博客
         * @param {*} context 
         */
        async getBlogByTag(context) {
            const { page, pageSize, tag } = context.state;
            const result = await queryTag({
                page,
                pageSize,
                tag
            }).then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            result.data = result.data.map(i => ({ ...i, time: new Date(i.ctime * 1000).toDateString() }));
            context.commit('updateState', {
                data: result.data,
                total: result.total
            });
            return true;
        },

        /**
         * 获取全部博客
         * @param {*} context 
         */
        async getAllBlog(context) {
            let result = await queryAllBlog().then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            result = result.map(i => ({ ...i, time: new Date(i.ctime * 1000).toDateString() }));
            context.commit('updateState', { AllBlog: result });
        },

        /**
         * 查询热门博客
         * @param {*} context 仓库上下文
         */
        async HotBlog(context) {
            const result = await queryHotBlog().then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            context.commit('updateState', { HotBlog: result });
        }
    }
}