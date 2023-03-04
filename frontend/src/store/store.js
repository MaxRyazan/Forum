import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {Actions} from "@/logic/actions";
import {Mutations} from "@/logic/mutations";

export default createStore({
    state:{
        allPosts: reactive([]),
        title: ref(''),
        tags: ref(''),
        subject: ref(''),
        isFormVisible: ref(false)
    },
    actions: Actions,
    mutations:Mutations
})