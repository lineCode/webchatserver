function Chat() {
    this.title = "New chat"

    this.users = {
        "test": {
            firstName: "You", lastName: "Are",
            lastMessage: ""
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

    this.messages = [
        {
            user: "freeman",
            time: Time(13, 25),
            message: "..."
        },
        {
            user: "guy",
            time: Time(13, 32),
            message: "Give me a gun!"
        },
        {
            user: "guy",
            time: Time(13, 33),
            message: "I need to shoot some demons now! I need to shoot some demons now! I need to shoot some demons now! I need to shoot some demons now!"
        },
        {
            user: "guy",
            time: Time(13, 34),
            message: "Where are demons?"
        },
        {
            user: "test",
            time: Time(13, 37),
            message: "I'm not a demon!"
        },
        {
            user: "test",
            time: Time(13, 37),
            message: 'Very very very very very very very long long long long looooooooooooooooooooooooong message. Was not long enough though'
        },
        {
            user: "test",
            time: Time(13, 37),
            message: "Don't shoot me, I want to live!"
        },
        {
            user: "jesse",
            time: Time(13, 38),
            message: "I'm not a demon too\nDon't even try to shoot me!"
        },
        {
            user: "jesse",
            time: Time(13, 39),
            message: "Bitch!"
        },
        {
            user: "rick",
            time: Time(13, 44),
            message: "Hey, Doom Guy"
        },
        {
            user: "rick",
            time: Time(13, 45),
            message: "How many people did you kill?"
        },
        {
            user: "neo",
            time: Time(13, 51),
            message: "I followed the white rabbit"
        },
        {
            user: "jones",
            time: Time(13, 58),
            message: "Got some booze?"
        },
    ]
}

module.exports = new Chat()
