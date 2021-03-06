import axios from 'axios'
const API_URL = 'https://api.blog.steinjun.net/api'

let user = JSON.parse(localStorage.getItem('userData'))
let tokenHeader = false

if (user !== null) {
    tokenHeader = { headers: { Authorization: `Bearer ${user.token}` } }
} else {
    tokenHeader = false
}
const getValidError = exception => {
    if (exception.response !== undefined && exception.response.data !== undefined && exception.response.data.errors !== undefined) {
        return exception.response.data.errors
    }
    return exception
}
const API = {
    refreshUserData() {
        // user = JSON.parse(localStorage.getItem('userData'))
        // if (user !== null) {
        //   tokenHeader = { headers: { Authorization: `Bearer ${user.token}` } }
        // } else {
        //   tokenHeader = false
        // }
    },
    async getAxios(url) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.get(url, tokenHeader) : await axios.get(url)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async getAxiosBinary(url) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.get(url, tokenHeader) : await axios.get(url)
            return res
        } catch (e) {
            // console.log(e);
            return { error: getValidError(e) }
        }
    },
    async getAxiosZip(url) {
        this.refreshUserData()
        try {
            const res = user.token ? await axios.get(url, { headers: { Authorization: `Bearer ${user.token}`, accept: 'application/x-zip-compressed' } }) : await axios.get(url, { headers: { accept: 'application/x-zip-compressed' } })
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async getAxiosWithParams(url, param) {
        this.refreshUserData()
        try {
            const res = await axios.get(url, {
                params: param,
            }, tokenHeader)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async postAxios(url, data) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.post(url, data, tokenHeader) : await axios.post(url, data)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async postAxiosFormData(url, data) {
        this.refreshUserData()
        try {
            const res = user.token ? await axios.post(url, data, { headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' } }) : await axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async patchAxios(url, data) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.patch(url, data, tokenHeader) : await axios.patch(url, data)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },
    async patchAxiosFormData(url, data) {
        this.refreshUserData()
        try {
            const res = user.token ? await axios.patch(url, data, { headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' } }) : await axios.patch(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },

    async putAxios(url) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.put(url, tokenHeader) : await axios.put(url)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },

    async deleteAxios(url) {
        this.refreshUserData()
        try {
            const res = tokenHeader ? await axios.delete(url, tokenHeader) : await axios.delete(url)
            return res
        } catch (e) {
            return { error: getValidError(e) }
        }
    },

    // api start
    async getCategories() {
        const categoriesRes = await this.getAxios(
            `${API_URL}/blog/categories`
        )
        return categoriesRes
    },
    async getPostList() {
        const postListRes = await this.getAxios(
            `${API_URL}/blog/post`
        )
        return postListRes
    },
    async getHomePostList() {
        const postListRes = await this.getAxios(
            `${API_URL}/blog/post/get_main_page_list`
        )
        return postListRes
    },
    async getPost(id) {
        const postRes = await this.getAxios(
            `${API_URL}/blog/post/${id}`
        )
        return postRes
    },
    async postCategory(category) {
        const loginRes = await this.postAxios(
            `${API_URL}/blog/categories/`,
            category
        )
        return loginRes
    },
    async postProfile(img) {
        const postProfileRes = await this.postAxiosFormData(
            `${API_URL}auth/profile/`,
            img
        )
        return postProfileRes
    },
    async patchUser(userData) {
        const userRes = await this.patchAxios(
            `${API_URL}auth/user/`,
            userData
        )
        return userRes
    },
    async deleteTask(taskId) {
        const deleteRes = await this.deleteAxios(
            `${API_URL}task/task/${taskId}/`
        )
        return deleteRes
    },

}
export default API