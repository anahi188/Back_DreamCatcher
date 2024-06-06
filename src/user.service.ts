@inyectable()
export class UserServices{
constructor(@Inyect('USER_REPOSITORY') private redonly userRepository :Repository<UserEntity>){}

  async findAll(){
    const users = await this.userRepository.find()
  }

  async findOneUser(id,name,lastname,email,password){
    const user = await this.userRepository.find(id,name,lastname,email,password)
  }

  //el paginador se hace aqui 
}
