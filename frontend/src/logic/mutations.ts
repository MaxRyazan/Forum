// @ts-ignore
import store from "@/store/store";
// @ts-ignore
import {UserEntity} from "@/logic/entities/UserEntity";

export class Mutations{
    clearInputFields(): void{
        store.state.title = ''
        store.state.tags = ''
        store.state.subject = ''
    }
    checkUserInLocalStorage(): UserEntity{
        if(localStorage.getItem('user') === null){
            const defaultUser = {
                username: 'user'+ Date.now(),
                id: Date.now()
            }
            localStorage.setItem('user', JSON.stringify(defaultUser))
            return defaultUser
        } else {
            return JSON.parse(String(localStorage.getItem('user')))
        }
    }
}