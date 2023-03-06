import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {Actions} from "@/logic/actions";
import {Mutations} from "@/logic/mutations";

export default createStore({
    state:{
        allPosts: reactive([]),
        onePost: reactive({
            likes: 0,
            views: 0
        }),
        title: ref(''),
        tags: ref(''),
        subject: ref(''),
        isFormVisible: ref(false)
    },
    actions: Actions,
    mutations: Mutations
})