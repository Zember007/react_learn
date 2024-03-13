import React, { useEffect, useState } from "react";
import '../styles/index.css';

import PostList from "../components/PostList";
import FormPost from "../components/FormPost";
import PostFilter from "../components/PostFilter";
import Modal from "../components/ui/modal/Modal";
import PostButton from "../components/ui/button/PostButton";

import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { usePagination } from "../hooks/usePagination";
import PostPagination from "../components/ui/PostPagination";


function Posts() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false)

  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })





  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (key) => {
    setPosts(posts.filter(p => p.id !== key))
  }


  useEffect(() => {
    fetchPosts()
  }, [page])

  const sortedPosts = usePosts(posts, filter.sort, filter.query)

  const pagination = usePagination(totalPage)

  return (
    <div className="App">

      <PostButton onClick={() => setModal(true)}>
        Add post
      </PostButton>

      <Modal visible={modal} setVisible={setModal}>
        <FormPost create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>{postError}</h1>}
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
        : <PostList removePost={removePost} posts={sortedPosts} title='Post list' />
      }

     <PostPagination pagination={pagination} setPage={setPage} page={page}/>



    </div>
  );
}

export default Posts;
