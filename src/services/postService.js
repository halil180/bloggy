import api from "./baseUrl"

export const getPosts = async () => {
    const response = await api.get("/posts")
    return response.data
}
export const createPost = async (pNewPost) => {
    const response = await api.post("/posts",pNewPost)
    return response.data
}