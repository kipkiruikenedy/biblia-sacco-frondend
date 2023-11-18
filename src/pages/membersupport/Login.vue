<template>
  <div class="member-portal-container">
    <div class="member-portal">
      <div class="image-container">
        <!-- Add your login image here -->
        <img src="../../assets/images/login.jpg" alt="Login" class="w-full h-auto rounded-lg shadow-lg">
      </div>

      <div class="content p-1">
        <h1 class="text-4xl font-bold mb-6 text-primary">How to Login</h1>

        <ol class="list-decimal text-gray-700 mb-8 ml-10">
          <li>Open any browser on your phone or computer.</li>
          <li>Visit <span class="font-semibold">portal.bibliasacco.com</span>.</li>
          <li>A sign-in page will appear.</li>
          <li>Enter your full membership number (e.g., ASK01234).</li>
          <li>Enter your password and click Sign in.</li>
          <li>You will be prompted with captcha verification (Please enter the captcha text above) and click validate.</li>
          <li>Click Generate One Time Password (OTP) Verification.</li>
          <li>Then you will be prompted with OTP Verification (Please enter the one-time password received via SMS) sent to your phone (NB: OTP verification code is only sent to the phone number that one provided when filling the form).</li>
          <li>Enter the 6-Digit OTP verification code.</li>
          <li>Click Validate.</li>
        </ol>

        <p class="text-green-500 font-semibold">Done!</p>
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
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
}

.image-container {
  flex: 1;
}

.content {
  flex: 1;
  padding-left: 20px;
  max-width: 600px;
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
</style>
