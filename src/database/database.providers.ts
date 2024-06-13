import { CommentEntity } from 'src/entites/comment.entity';
import { CountryEntity } from 'src/entites/country.entity';
import { FriendshipEntity } from 'src/entites/friendship.entity';
import { LikeEntity } from 'src/entites/like.entity';
import { PostEntity } from 'src/entites/post.entity';
import { ResolverEntity } from 'src/entites/resolver.entity';
import { RoleEntity } from 'src/entites/role.entity';
import { StateRevisorEntity } from 'src/entites/stateRevisor.entity';
import { StoryEntity } from 'src/entites/story.entity';
import { UserEntity } from 'src/entites/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'dreamcatcher',
        entities: [UserEntity, RoleEntity, StoryEntity, StateRevisorEntity, ResolverEntity, ResolverEntity, PostEntity, LikeEntity, CountryEntity, CommentEntity , FriendshipEntity],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
