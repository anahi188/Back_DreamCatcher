import { Inject, Injectable } from "@nestjs/common";
import { CommentEntity } from "src/entites/comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentService{
    constructor(@Inject('COMMENT_REPOSITORY') private readonly commentRepository: Repository<CommentEntity>){

    }

    async finAll(){
        const comments = await this.commentRepository.find();
        return comments;
    }

    async finAOne(id: string){
        const comments = await this.commentRepository.findOne({where : {id}});
        return comments;
    }

    create(payload : any ){
        const comment = this.commentRepository.create()
        comment.comment = payload.comment;
        comment.comment_date = payload.comment_date;
       

        return this.commentRepository.save(comment);
    }
    async update(id: string, payload : any ){
        const comment = await this.commentRepository.findOne({where : {id}})
        comment.comment = payload.comment;
        comment.comment_date = payload.comment_date;

        return this.commentRepository.save(comment)
        
    }
    async delete(id : string){
        const comments = await this.commentRepository.findOne({where : {id}})

        return this.commentRepository.delete(id)
        
    }
}