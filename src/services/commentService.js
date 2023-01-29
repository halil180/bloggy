import api from "./baseUrl"

export const getCommentsByPostId = async (postId) => {
    const response = await api.get(`/comments?postId=${postId}`)
    return response.data
}