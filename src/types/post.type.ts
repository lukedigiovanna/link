// used for rendering a post. 

import { User } from "./user.type";
import { ReactionCounts } from './reactions.type';

// include all relevant information including the user that posted it
// export interface Post {
//     id: number;
//     author: User;
//     body: string;
//     reactionCounts: ReactionCounts;
//     createdAt: Date;
// }

export interface Post {
    id: number;
    body: string;
    isReply: boolean;
    replyTo?: number;
    createdAt: Date;
    authorId: string;
}