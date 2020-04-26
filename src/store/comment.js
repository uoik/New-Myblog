import { queryNewComment, queryComment, addComment, queryById, updateComment } from '../services/loader'

// 留言信息仓库
export default {
    namespaced: true,
    state: {
        page: 1,
        pageSize: 5,
        total: 0,
        data: [],
        newComment: null,
        commentInfo: {
            name: '',
            content: '',
            email: '',
            fatherId: -1,
            parentName: '',
            isChildren: 0,
            children: []
        }
    },
    mutations: {
        /**
         * 修改仓库信息
         * @param {*} state 仓库
         * @param {*} payload 挂载对象
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
         * 添加一个留言
         * @param {*} context 
         */
        async addComment(context) {
            const { commentInfo } = context.state;
            const result = await addComment(commentInfo).then(data => data.result);
            if (commentInfo.fatherId !== -1) {
                console.log('更新children');
                context.dispatch('updateChild', {
                    fatherId: commentInfo.fatherId,
                    id: result
                });
            }
            context.dispatch('getComment');
            context.dispatch('NewComment');
            context.commit('updateState', {
                commentInfo: {
                    name: '',
                    content: '',
                    email: '',
                    fatherId: -1,
                    parentName: '',
                    isChildren: 0,
                    children: []
                }
            });
            return result;
        },

        /**
         * 更新children
         * @param {*} context 
         * @param {*} payload {fatherId: xxx, id: xxx}
         */
        async updateChild(context, { fatherId, id }) {
            const result = await queryById(fatherId).then(data => data.result);
            const children = JSON.parse(result[0].children);
            children.push(id);
            await updateComment({ id: fatherId, children });
            context.dispatch('getComment');
        },

        /**
         * 按页获取留言数据
         * @param {*} context 仓库上下文
         */
        async getComment(context) {
            const { page, pageSize } = context.state;
            const result = await queryComment(page, pageSize).then(data => data.result);
            // 判断有没有数据
            if(result == null || result.length == 0){
                return;
            }
            result.data = result.data.map(i => {
                let date = new Date(i.ctime * 1000);
                let y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let t = date.getDate();
                t = t < 10 ? '0' + t : t;
                return {
                    ...i,
                    time: `${y}-${m}-${t}`
                }
            });
            context.commit('updateState', {
                data: result.data,
                total: result.total
            })
        },

        /**
         * 查询最新留言
         * @param {*} context 仓库上下文
         */
        async NewComment(context) {
            const result = await queryNewComment().then(data => data.result);
            if(result == null || result.length == 0){
                return;
            }
            context.commit('updateState', { newComment: result });
        }
    }
}