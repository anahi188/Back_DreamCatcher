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

  
  createUaser(payload : any){
    const newUser = this userRepository.create();
    newUser.firtName = payload.firtName;

    this.userRepository.save(newUser);
  }

   actualizarUaser(payload : any){
    const editUser = this userRepository.();
    newUser.firtName = payload.firtName;

    this.userRepository.save(newUser);
  }

  //el paginador se hace aqui 
}
