// @ts-ignore
import store from "@/store/store";
// @ts-ignore
import {DefaultUserDto} from "@/logic/entities/dto/defaultUserDto";


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