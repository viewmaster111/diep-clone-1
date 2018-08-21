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

    async shutdown() {
        this.status = 'closing';
        this.status = 'off';
        console.log('[\x1b[36mConsole\x1b[0m] chatServer Closed');
    }

    getMessages() {
        if(this.status !== 'on') return
        return this.messages;
    }

    setMessages(messages) {
        if(this.status !== 'on') return
        this.messages = messages;
    }
    addMessage(message) {
        if(this.status !== 'on') return
        this.messages.push(message);
    }
    delMessage(message) {
        if(this.status !== 'on') return
        this.messages.splice(message, 1)
    }
    clearMessages() {
        if(this.status !== 'on') return
        this.messages = [];
    }
};

module.exports = chatServer;
