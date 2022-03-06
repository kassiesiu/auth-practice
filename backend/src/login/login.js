// Returns a user obj from body
const parseRequestToUser = (req) => {
    return 
}


const login = (req, res) => {
    console.log(req)
    user = parseRequestToUser(req)
    userFound = checkDatabaseForUser(user)
}

module.exports = {login}
