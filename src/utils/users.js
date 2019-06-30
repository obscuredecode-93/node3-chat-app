const users = []

const adduser = ({ id,username,room}) => {
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate data

    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    //check for existing user

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })


    //Validate username
    if(existingUser){
        return{
            error:'Username is in use'
        }
    }

    //Store user
    const user = {id, username, room}
    users.push(user)
    return{
        user
    }
}

const getUser = (id) => {
    const user = users.find((user) => user.id === id)
    return user
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

module.exports = {
    adduser,
    getUser,
    getUsersInRoom,
    removeUser
}




