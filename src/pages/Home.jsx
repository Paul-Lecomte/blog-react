import React from 'react';
import Feed from "../components/Feed.jsx";

const Home = ({posts}) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{marginTop: '2rem' }}>Pas d'article a afficehr</p>
            )}
        </main>
    );
};

export default Home;