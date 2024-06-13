import { Inject, Injectable } from "@nestjs/common";
import { PostEntity } from "src/entites/post.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostService{
    constructor(@Inject('POST_REPOSITORY') private readonly postRepository: Repository<PostEntity>){

    }

    async finAll(){
        const post = await this.postRepository.find();
        return post;
    }

    async finAOne(id: string){
        const post = await this.postRepository.findOne({where : {id}});
        return post;
    }

    create(payload : any ){
        const post = this.postRepository.create()
        post.text = payload.text;
        post.tag = payload.tag;
        post.image = payload.image;

        return this.postRepository.save(post);
    }
    async update(id: string, payload : any ){
        const post = await this.postRepository.findOne({where : {id}})
        post.text = payload.text;
        post.tag = payload.tag;
        post.image = payload.image;

        return this.postRepository.save(post)
        
    }
    async delete(id : string){
        const post = await this.postRepository.findOne({where : {id}})

        return this.postRepository.delete(id)
        
    }

}