<template>
  <div class="container mx-auto mt-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Content Section -->
    <div class="lg:w-1/2 pr-8">
      <h1 class="text-3xl font-semibold mb-4">How to Sign in to the Member Portal</h1>
      <p class="text-gray-800">
        Before we register you, it is important we have key information from you. That information will help in smooth registration.
        Fill it and submit it either physically or through email. Now how to register;
      </p>
      <ol class="list-decimal pl-6 mt-4">
        <li>Open any browser on your phone or computer.</li>
        <li>On the Tab Type <strong>portal.bibliasacco.com</strong></li>
        <li>A sign-in page will appear.</li>
        <li>Enter your Full Membership number e.g., ASK01234.</li>
        <li>Enter a 4-digit password sent to your phone as an SMS (NB: 4-digit password is only sent to the phone number that one provided when filling the form). This is a one-time password.</li>
        <li>You will be prompted with Captcha verification (Please enter the captcha text above) and click validate.</li>
        <li>Then you will be prompted with OTP verification code (Please enter the one-time password received via SMS) sent to your phone (NB: OTP verification code is only sent to the phone number that one provided when filling the form).</li>
        <li>Enter the 6-digit OTP verification code.</li>
        <li>Click Validate when prompted with KYC Verification.</li>
        <li>If it's your first time, you will be required to enter a new password and confirm it.</li>
        <li>You can now Login using your membership number and the password you have just created.</li>
        <li>Done.</li>
      </ol>
    </div>

    <!-- Image Section -->
    <div class="lg:w-1/2 lg:pl-8 lg:mt-0 mt-8">
      <img src="../../assets/images/signin.jpg" alt="Member Portal" class="w-full max-w-md rounded-md shadow-lg lg:float-right"/>
    </div>
  </div>
</template>

<script setup>
// You can add script setup if needed
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Add any additional styling for responsiveness */
@media (max-width: 1024px) {
  .container {
    padding: 0 10px;
  }

  img {
    margin: 0 auto;
  }
}
</style>
