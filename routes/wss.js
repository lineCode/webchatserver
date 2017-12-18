var chat = require('../chat/chat')

function wss(server, socket) {
    console.log("WSS connection")

    socket.on('close', (code, reason) => {
        if (socket.user) {
            server.clients.forEach(client => {
                if (client !== socket) {
                    client.send(JSON.stringify({
                        type: 'left',
                        id: socket.user
                    }))
                }
            })
        }
    })

    socket.on('message', msg => {
        const message = JSON.parse(msg)
        
        if (message.type === 'login' && !socket.user) {
            socket.user = message.id
            socket.send(JSON.stringify({ type: 'accepted', data: message.id }))

            const user = chat.users[message.id]

            server.clients.forEach(client => {
                if (client !== socket) {
                    client.send(JSON.stringify({
                        type: 'joined',
                        id: socket.user,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }))
                }
            })

            return
        }
        
        if (!socket.user) {
            console.log('WSS message UNASSIGNED')
            return
        }

        switch (message.type) {
            case 'message':
                console.log(`WSS message MESSAGE: ${message.message} by ${socket.user}`)

                const time = new Date(message.time)
                const user = chat.users[socket.user]

                chat.messages.push({
                    user: { id: socket.user, firstName: user.firstName, lastName: user.lastName },
                    time: time,
                    message: message.message
                })

                chat.users[socket.user].lastMessage = message.message

                server.clients.forEach(client => {
                    client.send(JSON.stringify({
                        type: 'message',
                        id: socket.user,
                        time: time,
                        message: message.message
                    }))
                })

                break
        }
    })
}

module.exports = wss
