document.getElementById("sendBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addChat("chat-outgoing", userMessage);
        userInput.value = ""; // Clear input

        // Generate a bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addChat("chat-incoming", botResponse);
        }, 1000);
    }
});

function addChat(type, message) {
    const chatbox = document.getElementById("chatbox");
    const li = document.createElement("li");
    li.className = type;
    li.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("tax return")) {
        return "A tax return is a form filed with a tax authority that reports income, expenses, and other relevant tax information.";
    } else if (lowerMessage.includes("deductions")) {
        return "Deductions reduce your taxable income. Common deductions include mortgage interest, student loan interest, and charitable contributions.";
    } else if (lowerMessage.includes("filing deadline")) {
        return "The typical filing deadline for individual tax returns is April 15th, unless extended.";
    } else if (lowerMessage.includes("how to file")) {
        return "You can file your taxes online using tax software, through a tax professional, or by mailing a paper return.";
    } else if (lowerMessage.includes("refund")) {
        return "Your deducted amount will be refunded"
    }
    else{
        return "Please give correct information"
    }
}