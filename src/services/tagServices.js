/**
 * 查询全部标签
 */
export async function queryAllTag(){
    const url = '/api/tag/queryAllTag';
    return await fetch(url).then(data => data.json());
}