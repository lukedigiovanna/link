import { useEffect } from 'react';
import { UserList } from '../components/lists/UserList';
import { PostList } from '../components/lists/PostList';
import api from '../api';
import endpoints from '../api/endpoints';
import { useDispatch } from 'react-redux';
import { setPosts } from '../store/posts';
import { HorizontalSpacer, VerticalSpacer } from '../utils/styles';
import theme from '../constants/theme';
import { fetchAllPosts } from '../store/posts';
import store from '../store';

export default function MainPage(props: {searchTerm?: string}) {
    const dispatch = useDispatch<typeof store.dispatch>();

    // get all posts
    useEffect(() => {
        // fetch posts from api
        dispatch(fetchAllPosts())
    });

    return (
        <>
            <UserList /> 
            <VerticalSpacer height={theme.spacing.navbarHeight} />
            <PostList searchTerm={props.searchTerm}/>
        </>
    );
}