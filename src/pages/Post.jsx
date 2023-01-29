import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as userService from "../services/userService"
import * as commentService from "../services/commentService"
import DOMPurify from 'dompurify'
import Comments from "../components/Comments";

function Post() {
    const [userName,setUserName]= useState(null)
    const [comments,setComments] = useState([])
    const {postId} =  useParams()
    let location = useLocation();
    let postData = location.state.post;
    const getUserName = async() => {
        const userName = await userService.getUserName(postData.userId)
        setUserName(userName.name)
    }
    const getComments = async () => {
        const userComments = await commentService.getCommentsByPostId(postId)
        setComments(userComments)
        console.log(userComments)
    }
    useEffect(() => {
        getUserName()
        getComments()
        return () => {
        };
    }, []);
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(postData.content)
    })

    return (
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
            <div className="w-full px-4 md:px-6 text-xl leading-normal">
                <div className="font-sans">
                    <p className="text-base md:text-sm text-accent font-bold">
                        &lt;{" "}
                        <Link
                            to="/posts"
                            className="text-base md:text-sm text-accent font-bold no-underline hover:underline"
                        >
                            BACK TO BLOG
                        </Link>
                    </p>
                    <h1 className="font-bold font-sans break-normal  pt-6 pb-2 text-3xl md:text-4xl">
                        {postData.title}
                    </h1>
                    <p className="text-sm md:text-base font-normal text-gray-600">
                        {" "}
                        Published{" "}
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(postData.createdAt))}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={sanitizedData()}/>
  
             
            </div>

            <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
            {comments.map((comment) =>    <Comments key={comment.id} comment={comment}/> )}


            <div className="flex w-full items-center font-sans px-4 py-12">
                <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                />
                <div className="flex-1 px-2">
                    <p className="text-base font-bold  md:text-xl leading-none mb-2">
                       by {userName}
                    </p>
                    <p className="text-gray-600 text-xs md:text-base">
                       see all posts by selo <a
                            className="text-accent no-underline hover:underline"
                            href="https://www.tailwindtoolbox.com"
                        >
                            TailwindToolbox.com
                        </a>
                    </p>
                </div>
            </div>

            <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
        </div>
    );
}

export default Post;
