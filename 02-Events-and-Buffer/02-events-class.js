const Events = require("events");

class Chat extends Events {
    sendMessage(msg) {
        console.log("Sending message...");
        this.emit("send", msg);
    };
};

const myChat = new Chat();

myChat.on("send", (msg) => {
    console.log("Message sent successfully:", msg);
});

myChat.sendMessage("Hello Backend");
