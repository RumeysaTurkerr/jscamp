export default class UserService{
    constructor(loggerServise){
        this.users=[]
        this.loggerServise=loggerServise
    }
    add(user){
       this.users.push(user)
       this.loggerServise.log(user)
    }
    list(){
        return this.users
    }
    getById(id){
    return this.users.find(u=>u.id ===id)
    }
}