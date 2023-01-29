import React, { useEffect } from 'react'
import { useState } from 'react'
import * as  userService from "../services/postService"
import { useNavigate } from 'react-router-dom';


function Posts() {
    let navigate = useNavigate();


    const [posts,setPosts] = useState([])

    const getPosts  =async () => {
        const posts = await userService.getPosts();
        console.log(posts);
        setPosts(posts)
    }
    useEffect(() => {
        getPosts()
        return () => {
        };
    }, []);
    

const handleClick = (postId,post) => {
    navigate(`/post/${postId}`, { state: { post } });
};
    return (
<>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-7  m-11 items-center  ">
            {posts.map((post) => (           
                <div className="card card-compact w-full bg-base-100 shadow-xl" key={post.id} >
                    <figure><img src="https://via.placeholder.com/300/09f/fff.png " alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <button className='btn' onClick={() => handleClick(post.id,post)}>See the post</button>
                        <div className="card-actions justify-end">
                            <span > posted on  {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(post.createdAt))}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

{/* 

<div className="btn-group">
  <button className="btn">«</button>
  <button className="btn">Page 22</button>
  <button className="btn">»</button>
</div> */}

</>
  


    )
}

export default Posts