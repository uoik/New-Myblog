/**
 * 添加博客
 * @param {Object} blogInfo 博客信息：{title: xxx, content: xxx, describe: xxx, tag: xxx}
 */
export async function addBlog(blogInfo) {
    const url = '/api/blog/add';
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(blogInfo),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => data.json());
}

/**
 * 查询全部博客
 */
export async function queryAllBlog() {
    try {
        const url = 'api/blog/queryAllBlog';
        return await fetch(url).then(data => data.json());
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * 按页查询博客
 * @param {Number} page 页码
 * @param {Number} pageSize 页容量
 */
export async function queryBlog(page = 1, pageSize = 10) {
    const url = `/api/blog/query?page=${page}&pageSize=${pageSize}`;
    return await fetch(url).then(data => data.json());
}

/**
 * 根据ID查询博客
 * @param {Number} id ID
 */
export async function queryBlogById(id) {
    const url = `/api/blog/query/${id}`;
    return await fetch(url).then(data => data.json());
}

/**
 * 根据标签获取分页信息
 * @param {Object} tagInfo 标签信息：{page: xxx, pageSize: xxx, tag: xxx}
 */
export async function queryTag({ page, pageSize, tag }) {
    const url = `/api/blog/queryTag?page=${page}&pageSize=${pageSize}&tag=${tag}`;
    return await fetch(url).then(data => data.json());
}

/**
 * 查询热门博客
 */
export async function queryHotBlog() {
    const url = `/api/blog/queryHot`;
    return await fetch(url).then(data => data.json());
}