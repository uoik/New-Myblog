/**
 * 
 * @param {Object} files 缓存图片对象
 */
export async function uploadImgs(files) {
    const formData = new FormData();
    for (const file in files) {
        formData.append('imgFiles', files[file]);
    }
    const url = '/api/upload'
    const result = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: { "Content.Type": "multipart/form-data" }
    }).then(data => data.json());
    return result;
}