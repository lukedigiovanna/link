
class Endpoints {
    users = () => '/users';
    user = (name: string) => `/users/${name}`;
    posts = (replyTo?: number, all?: boolean) => `/posts?${replyTo ? `replyTo=${replyTo}&` : ""}${all ? `all=true` : ""}`;
    postsByUser = (name: string) => `/posts/${name}`;
    post = (id: number) => `/posts/${id}`;
    reactions = () => '/reactions';
    reactionsToPost = (id: number) => `/reactions/${id}`;
    reactionsCount = (id: number) => `/reactions/count/${id}`;
}

export default new Endpoints();