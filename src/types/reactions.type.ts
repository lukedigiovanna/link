
export interface ReactionCounts {
    [key: string]: number;
    like: number;
    dislike: number;
    love: number;
    haha: number;
    wow: number;
    angry: number;
}

export enum ReactionType {
    LIKE = 'like',
    DISLIKE = 'dislike',
    LOVE = 'love',
    HAHA = 'haha',
    WOW = 'wow',
    ANGRY = 'angry',
    SAD = 'sad'
}

export interface Reaction {
    string: ReactionType;
    postId: number;
}

export interface ReactionCountUpdate {
    postId: number;
    reaction: string;
}