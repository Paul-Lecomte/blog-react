import Home from "./pages/Home.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import {useEffect, useState} from "react";
import PostPage from "./pages/PostPage.jsx";
import NewPost from "./pages/NewPost.jsx";
import {format} from "date-fns";
import post from "./components/Post.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'bujour',
            datetime: '15 octobre 2024',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam euismod sem id posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris blandit rhoncus condimentum. Vestibulum eu rhoncus urna. Mauris auctor fringilla libero, pharetra efficitur elit convallis sit amet. Morbi id condimentum justo, et luctus nunc. Suspendisse egestas sit amet turpis vitae aliquam. Nullam sed cursus velit, eu imperdiet eros. Nullam metus ipsum, pharetra sed mollis a, congue ut neque. Pellentesque mollis risus at suscipit volutpat. Nunc aliquet, arcu sit amet ornare molestie, ante mauris vulputate metus, non suscipit elit erat sed tortor. Aenean.'
        },
        {
            id: 2,
            title: 'hola que tal',
            datetime: '15 octobre 2024',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam euismod sem id posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris blandit rhoncus condimentum. Vestibulum eu rhoncus urna. Mauris auctor fringilla libero, pharetra efficitur elit convallis sit amet. Morbi id condimentum justo, et luctus nunc. Suspendisse egestas sit amet turpis vitae aliquam. Nullam sed cursus velit, eu imperdiet eros. Nullam metus ipsum, pharetra sed mollis a, congue ut neque. Pellentesque mollis risus at suscipit volutpat. Nunc aliquet, arcu sit amet ornare molestie, ante mauris vulputate metus, non suscipit elit erat sed tortor. Aenean.'
        },
        {
            id: 3,
            title: 'sumi masen',
            datetime: '15 octobre 2024',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam euismod sem id posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris blandit rhoncus condimentum. Vestibulum eu rhoncus urna. Mauris auctor fringilla libero, pharetra efficitur elit convallis sit amet. Morbi id condimentum justo, et luctus nunc. Suspendisse egestas sit amet turpis vitae aliquam. Nullam sed cursus velit, eu imperdiet eros. Nullam metus ipsum, pharetra sed mollis a, congue ut neque. Pellentesque mollis risus at suscipit volutpat. Nunc aliquet, arcu sit amet ornare molestie, ante mauris vulputate metus, non suscipit elit erat sed tortor. Aenean.'
        }
    ])

    useEffect(() => {
        const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
            ((post.title).toLowerCase()).includes(search.toLowerCase()))
        setSearchResult(filteredResults.reverse())
    },[posts, search])

    const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id)
        setPosts(postsList)
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = post.length ? posts[posts.length -1].id +1 : 1
        const datetime = format(new Date(), 'dd MMMM yyyy')
        const newPost = {
            id,
            title: postTitle,
            datetime,
            body: postBody
        }
        const allPosts = [...posts, newPost]
        setPosts(allPosts)
        setPostTitle("")
        setPostBody("")
        navigate('/')
    }


  return (
    <Routes>
        <Route path='/' element={<Layout search={search} setSearch={setSearch}/>}>
            <Route index element={<Home posts={searchResult}/>} />
            <Route path="post">
                <Route index element={
                    <NewPost
                        handleSubmit={handleSubmit}
                        postTitle={postTitle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
                    />}
                />
                <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    </Routes>
  )
}

export default App
