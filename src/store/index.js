import vue from 'vue'
import Vuex from 'vuex'
import siteInfo from './siteInfo'
import blog from './blog'
import tag from './tag'
import comment from './comment'
import loginUser from './loginUser'

vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        siteInfo,
        blog,
        tag,
        comment,
        loginUser
    }
})