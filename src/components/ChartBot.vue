<template>
  <div>
    <!-- Floating button for the chat bot on the right side -->
    <div @click="toggleChat" class="chat-bot-button fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
      <i class="far fa-comments"></i>
    </div>

    <!-- Floating chat modal -->
    <div v-if="showChat" class="chat-modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
      <!-- Header with close button -->
      <div class="header flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Chat with Bot</h3>
        <button @click="closeChat" class="close-button bg-blue-500 text-white p-2 rounded-full cursor-pointer">&times;</button>
      </div>

      <!-- Chat messages -->
      <div v-for="(message, index) in chatMessages" :key="index" class="chat-message" :class="{ 'user-message': message.isUser }">
        {{ message.text }}
      </div>

      <!-- User input area -->
      <div class="user-input mt-4">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message..." class="border-2 border-blue-500 rounded p-2 w-full" />
        <button @click="sendMessage" class="bg-blue-500 text-white p-2 rounded-full cursor-pointer ml-2">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChat: false,
      chatMessages: [],
      userInput: "",
    };
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat;
    },
    closeChat() {
      this.showChat = false;
    },
    sendMessage() {
      if (this.userInput.trim() !== "") {
        this.chatMessages.push({ text: this.userInput, isUser: true });
        // Simulate bot response
        this.chatMessages.push({ text: "Bot's response goes here", isUser: false });
        this.userInput = "";
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.chat-bot-button i {
  font-size: 1.5em;
}

.chat-modal {
  max-width: 300px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}

.close-button {
  font-size: 1.5em;
}

.chat-message {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.user-message {
  background-color: #e2f7fe;
}

.user-input input {
  border: 1px solid #ccc;
}

.user-input button {
  background-color: #007bff;
}
</style>
