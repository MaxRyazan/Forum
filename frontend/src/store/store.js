import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {Actions} from "@/logic/actions";
import {Mutations} from "@/logic/mutations";

export default createStore({
    state:{
        allPosts: reactive([]),
        commentToOnePost: reactive([]),
        onePost: reactive({
            id: 0,
            likes: 0,
            views: 0,
        }),
        title: ref(''),
        tags: ref(''),
        subject: ref(''),
        isFormVisible: ref(false)
    },
    actions: Actions,
    mutations: Mutations
})