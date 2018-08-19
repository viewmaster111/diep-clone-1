class chatServer {
    constructor(config, serverManager) {
        this.config = config;
        this.serverManager = serverManager;
        this.status = 'off';
        this.messages = [];
    }

    init() {
        this.status = 'launching';
        this.status = 'on';
        console.log('[\x1b[36mConsole\x1b[0m] chatServer Launched');
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
