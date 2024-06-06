@inyectable()
export class UserServices{
constructor(@Inyect('USER_REPOSITORY') private redonly userRepository :Repository<UserEntity>){}

  async findAll(){
    const users = await this.userRepository.find()
  }

  async findOneUser(){
    const users = await this.userRepository.find()
  }

  //el paginador se hace aqui 
}
