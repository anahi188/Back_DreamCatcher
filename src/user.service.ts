@inyectable()
export class UserServices{
constructor(@Inyect('USER_REPOSITORY') private redonly userRepository :Repository<UserEntity>){}

  async findAll(){
    const users = await this.userRepository.find()
  }

  async findOneUser(id){
    const user = await this.userRepository.findOne({
      where: {id:id},)
    return user
  }

  async filter(id,name){
    const user = await this.userRepository.findOne({
      where: {id:id}, 
             {name: name})
    return user
  }

  
  createUaser(payload : any){
    const newUser = this userRepository.create();
    newUser.firtName = payload.firtName;

    this.userRepository.save(newUser);
  }

   async actualizarUaser(id : any,payload : any){
    const editUser = this.userRepository.findOne(
      {where : {id : id})
    );
     
    editUser.firtName = payload.firtName;

    this.userRepository.save(editUser);
  }

     async deleteUaser(id : any){
    const editUser = this.userRepository.delete(id);
  }

  //el paginador se hace aqui 
}
