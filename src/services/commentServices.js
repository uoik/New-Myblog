/**
 * 添加留言
 * @param {Object} commentInfo {name: xxx, content: xxx, email: xxx, fatherId: xxx, parentName: xxx, isChildren: xxx, children: xxx}
 */
export async function addComment(commentInfo) {
    const url = '/api/comment/add';
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(commentInfo),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => data.json());
}

/**
 * 按页查询留言
 * @param {Number} page 页码
 * @param {Number} pageSize 页容量
 */
export async function queryComment(page = 1, pageSize = 10) {
    const url = `/api/comment/query?page=${page}&pageSize=${pageSize}`;
    const result =  await fetch(url).then(data => data.json());
    return result;
}

/**
 * 查询最新的前十位留言
 */
export async function queryNewComment() {
    const url = '/api/comment/queryNew';
    return await fetch(url).then(data => data.json());
}

/**
 * 根据ID查询留言
 * @param {Number} id 
 */
export async function queryById(id){
    const url = `/api/comment/queryById?id=${id}`;
    return await fetch(url).then(data => data.json());
}

/**
 * 更新对应ID的children
 * @param {Object} updateInfo 更新对象 {id: xxx, children: xxx}
 */
export async function updateComment(updateInfo){
    const url = '/api/comment/update';
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(updateInfo),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => data.json());
}