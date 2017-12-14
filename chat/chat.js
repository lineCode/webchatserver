function Chat() {
    this.title = "New chat"

    this.users = {
        "0": {
            firstName: "You", lastName: "Are",
            lastMessage: ""
        },
        "1": {
            firstName: "Gordon", lastName: "Freeman",
            lastMessage: "..."
        },
        "2": {
            firstName: "Doom", lastName: "Guy",
            lastMessage: "Where are demons?"
        },
        "3": {
            firstName: "Jesse", lastName: "Pinkman",
            lastMessage: "Bitch!"
        },
        "4": {
            firstName: "Rick", lastName: "Grimes",
            lastMessage: "How many people did you kill?"
        },
        "5": {
            firstName: "Thomas", lastName: "Anderson",
            lastMessage: "I followed the white rabbit"
        },
        "6": {
            firstName: "Jessica", lastName: "Jones",
            lastMessage: "Got some booze?"
        },
    }

    this.messages = []
}

module.exports = new Chat()
