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

        console.log('WSS RECEIVED: ', message)
        
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
                    message: message.message,
                    attachments: message.attachments
                })

                chat.users[socket.user].lastMessage = message.message

                server.clients.forEach(client => {
                    client.send(JSON.stringify({
                        type: 'message',
                        id: socket.user,
                        time: time,
                        message: message.message,
                        attachments: message.attachments
                    }))
                })

                break

            case 'webrtc-start':
                console.log('   WEBRTC START: ', message.uid)
                
                let otherParty = null
                for (let client of server.clients) {
                    if (client.user === message.user) {
                        otherParty = client
                        break
                    }
                }
                if (otherParty) {
                    chat.webrtcs[message.uid] = {
                        receiver: socket,
                        sender: otherParty
                    }

                    socket.send(JSON.stringify({
                        type: 'webrtc-accept',
                        uid: message.uid,
                        result: 'accepted'
                    }))

                    otherParty.send(JSON.stringify({
                        type: 'webrtc-request',
                        uid: message.uid
                    }))
                } else {
                    socket.send(JSON.stringify({
                        type: 'webrtc-accept',
                        uid: message.uid,
                        result: 'rejected'
                    }))
                }

                break

            case 'webrtc-description':
                let webrtcconn = chat.webrtcs[message.uid]
                if (!webrtcconn) {
                    console.log('UNKNOWN WEBRTC UID ', message.uid)
                } else {
                    (webrtcconn.sender === socket ? webrtcconn.receiver : webrtcconn.sender).send(JSON.stringify({
                        type: 'webrtc-description',
                        uid: message.uid,
                        desc: message.desc
                    }))
                }
                break
        }
    })
}

module.exports = wss
