var axios = require("axios");

async function authUser(url = "", data = {}) {
    const response = await axios({
        method: "post",
        url: url,
        data: data
    });
    return await response.data; // parses JSON response into native JavaScript objects
}

async function finishAuth(url = "", data = {}) {
    const response = await axios({
        method: "post",
        url: url,
        data: data
    });
    console.log(response.data);
    return await response.data;
}

module.exports = authUser;
module.exports = finishAuth;
