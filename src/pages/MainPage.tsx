import React, { useEffect } from 'react';
import { UserList } from '../components/UserList';
import { PostList } from '../components/PostList';
import { Col, Row } from 'react-bootstrap';
import api from '../api';
import endpoints from '../api/endpoints';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../store/posts';
import { Post } from '../types/post.type'

export default function MainPage() {
    const posts = useSelector((state: any) => state.posts?.posts);
    const dispatch = useDispatch();

    // get all posts
    useEffect(() => {
        // fetch posts from api
        api.get(endpoints.posts()).then((response) => {
            console.log(response.data);
            const data = response.data.map((post: any) => {
                return {
                    id: post.id,
                    body: post.body,
                    createdAt: post.created_at,
                    authorId: post.user_id,
                    isReply: post.is_reply,
                }
            })
            dispatch(setPosts(data));
            console.log("posts", posts);
        });
    }, []);

    return (
        <div>
            <Row>
                <Col xs={3} className="user-list">
                    <UserList />
                </Col>
                <Col xs={9} className="posts-list">
                    <PostList posts={posts}/>
                </Col>
            </Row>
        </div>
    );
}