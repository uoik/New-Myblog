/**
 * 登录账号
 * @param {*} loginInfo 账号密码：{loginUser: xxx, passWord: xxx}
 */
export async function loginUser(loginInfo){
    const url = '/api/login/user';
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => data.json());
}