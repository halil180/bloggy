import React, { useEffect, useState } from 'react'
import * as userService from "../services/userService"

function Comments({ comment }) {
    const [userCommented, setUserCommented] = useState(null);

    const getUserName = async () => {
        const userName = await userService.getUserName(comment.userId)
        setUserCommented(userName)
    }

    useEffect(() => {
        getUserName()
    }, []);
    
    return (
        <section>
            <div >
                <div
                    className="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  sm:w-full">
                    <div className="flex flex-row md-10">
                        <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                        <div className="flex-col mt-1">
                            <div className="flex items-center flex-1 px-4 font-bold leading-tight">{userCommented?.name}
                                <span className="ml-2 text-xs font-normal text-gray-500"><div>{Math.round((new Date().getTime() - new Date(comment.createdAt).getTime()) / (1000 * 3600 * 24))} days ago</div></span>
                            </div>
                            <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">{comment.content}
                            </div>
                    
                        </div>
                    </div>
                </div>

            </div>
        </section>)
}

export default Comments