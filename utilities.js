function getEmail() {
    return process.argv[2];
}

function getPassword() {
    return process.argv[3];
}


module.exports = {
    getEmail,
    getPassword,
}
