@inyectable()
export class UserServices{
constructor(@Inyect('USER_REPOSITORY') private redonly userRepository :Repository<UserEntity>){}

  async findAll(){
    const users = await this.userRepository.find()
  }
}
