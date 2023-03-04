import {createStore} from "vuex";
import {reactive, ref} from "vue";

export default createStore({
    state:{
        allPosts: reactive([]),
        title: ref(''),
        tags: ref(''),
        subject: ref(''),
    }
})