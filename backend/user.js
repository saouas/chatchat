const users = [];

const addUser = ({ id, name, room }) => {
    console.log(`ADD ${name} to ${room} id:${id}`)
    if (name != undefined && room != undefined){
        name = name.trim().toLowerCase();
        room = room.trim().toLowerCase();

        const existingUser = users.find((user) => user.room === room && user.name === name)

        if(existingUser){
            return { error: 'Username is already taken'};
        }

        const user = { id, name, room };
        users.push(user);

        return { user };
    }

    else return { error: "Username or Room not defined" };
    
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index != -1){
        console.log(`DELETTE ${id}`)
        return users.splice(index,1)[0];

    }
};

const getUser = (id) => {
    return users.find((user) => (user.id === id))
};

const getUsersInRoom = (room) => {
    let usersList = [];
    users.map((user) => {
        if(user.room == room)
            usersList.push(user.name);
    })
    return usersList;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };