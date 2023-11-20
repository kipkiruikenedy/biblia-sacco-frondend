<template>
  <div class="member-portal-container">
    <div class="member-portal">
      <div class="content">
        <div class="text-container">
          <h1 class="text-4xl font-bold mb-6 text-primary">How to Sign in to the Member Portal</h1>

          <p class="text-gray-700 mb-6">
            Before we register you, it is important to have key information from you. This information will help in a smooth registration process. Fill it and submit it either physically or through email. Now, here's how to register:
          </p>

          <ol class="list-decimal text-gray-700 mb-8">
            <li>Open any browser on your phone or computer.</li>
            <li>Visit <span class="font-semibold">portal.bibliasacco.com</span>.</li>
            <li>A sign-in page will appear.</li>
            <li>Enter your Full Membership number (e.g., ASK01234).</li>
            <li>Enter the 4-digit password sent to your phone as an SMS (one-time password).</li>
            <li>Complete the Captcha verification and click validate.</li>
            <li>Enter the OTP verification code sent to your phone.</li>
            <li>Enter the 6-digit OTP verification code.</li>
            <li>Click Validate when prompted with KYC Verification.</li>
            <li>If it's your first time, set a new password.</li>
            <li>Login using your membership number and the new password.</li>
          </ol>

          <p class="text-green-500 font-semibold">Done!</p>
        </div>
      </div>

      <div class="image-container">
        <!-- Add your sign-in image here -->
        <img src="../../assets/images/signin.jpg" alt="Sign In" class="w-full h-auto rounded-lg shadow-lg">
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any necessary logic here
</script>

<style scoped>
.member-portal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.member-portal {
  max-width: 95vw;
  width: 100%;
  padding: 20px; /* Adjust padding for smaller screens */
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column; /* Adjust layout for smaller screens */
}

.content {
  flex: 1;
}

.text-container {
  max-width: 100%; /* Adjust max-width for smaller screens */
}

.image-container {
  flex: 1;
  margin-top: 20px; /* Adjust margin for smaller screens */
}

.text-primary {
  color: #3498db; /* You can replace this color with your brand color */
}

.text-green-500 {
  color: #27ae60; /* You can replace this color with your brand color */
}

.font-semibold {
  font-weight: 600;
}

/* Add any additional styling here */

@media screen and (max-width: 768px) {
  /* Adjust styles for screens with a maximum width of 768 pixels */
  .member-portal {
    padding: 10px;
  }

  .image-container {
    margin-top: 10px;
  }
}
</style>
