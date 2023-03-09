// @ts-ignore
import store from "@/store/store";


export class Mutations{

    clearInputFields(): void{
        store.state.title = ''
        store.state.tags = ''
        store.state.subject = ''
    }

    getUserFromLocalStorage(){
        return JSON.parse(String(localStorage.getItem('user')))
    }

}