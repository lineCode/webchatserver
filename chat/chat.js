function Chat() {
    this.title = "New chat"

    this.users = {
        "test": {
            firstName: "Some", lastName: "Guy",
            lastMessage: "Don't shoot me, I want to live!"
        },
        "freeman": {
            firstName: "Gordon", lastName: "Freeman",
            lastMessage: "..."
        },
        "guy": {
            firstName: "Doom", lastName: "Guy",
            lastMessage: "Where are demons?"
        },
        "jesse": {
            firstName: "Jesse", lastName: "Pinkman",
            lastMessage: "Bitch!"
        },
        "rick": {
            firstName: "Rick", lastName: "Grimes",
            lastMessage: "How many people did you kill?"
        },
        "neo": {
            firstName: "Thomas", lastName: "Anderson",
            lastMessage: "I followed the white rabbit"
        },
        "jones": {
            firstName: "Jessica", lastName: "Jones",
            lastMessage: "Got some booze?"
        },
    }

    // only for mock data testing
    const Time = (hours, minutes) => {
        let date = new Date()
        date.setHours(hours)
        date.setMinutes(minutes)
        return date
    }

    const User = (id) => {
        const user = this.users[id]
        return {
            id: id,
            firstName: user.firstName,
            lastName: user.lastName
        }
    }

    this.messages = [
        {
            user: User("freeman"),
            time: Time(13, 25),
            message: "...",
            attachments: []
        },
        {
            user: User("guy"),
            time: Time(13, 32),
            message: "Give me a gun!",
            attachments: []
        },
        {
            user: User("guy"),
            time: Time(13, 33),
            message: "I need to shoot some demons now! I need to shoot some demons now! I need to shoot some demons now! I need to shoot some demons now!",
            attachments: []
        },
        {
            user: User("guy"),
            time: Time(13, 34),
            message: "Where are demons?",
            attachments: []
        },
        {
            user: User("test"),
            time: Time(13, 36),
            message: "I'm not a demon!",
            attachments: []
        },
        {
            user: User("test"),
            time: Time(13, 37),
            message: 'Very very very very very very very long long long long looooooooooooooooooooooooong message. Was not long enough though',
            attachments: []
        },
        {
            user: User("test"),
            time: Time(13, 38),
            message: "Don't shoot me, I want to live!",
            attachments: []
        },
        {
            user: User("jesse"),
            time: Time(13, 39),
            message: "I'm not a demon too\nDon't even try to shoot me!",
            attachments: []
        },
        {
            user: User("jesse"),
            time: Time(13, 42),
            message: "Bitch!",
            attachments: []
        },
        {
            user: User("rick"),
            time: Time(13, 44),
            message: "Hey, Doom Guy",
            attachments: []
        },
        {
            user: User("rick"),
            time: Time(13, 45),
            message: "How many people did you kill?",
            attachments: []
        },
        {
            user: User("neo"),
            time: Time(13, 51),
            message: "I followed the white rabbit",
            attachments: []
        },
        {
            user: User("jones"),
            time: Time(13, 58),
            message: "Got some booze?",
            attachments: [ { type: 0, name: "booze.jpg" }, { type: 0, name: "morebooze.jpg" } ]
        },
    ]
}

module.exports = new Chat()
