class chatServer {
    constructor(config) {
        this.config = config;
        this.messages = [];
    }

    init() {
        console.log('chatServer Launched');
    }

    getMessages() {
        return this.messages;
    }

    setMessages(messages) {
        this.messages = messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
    delMessage(message) {
        this.messages.splice(message, 1)
    }
    clearMessages() {
        this.messages = [];
    }
};

module.exports = chatServer;
