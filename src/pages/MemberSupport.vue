<template>
  <div class="bg-gradient-to-r from-blue-400 to-purple-500 p-4 text-white text-center">
    <h1 class="text-4xl font-semibold mb-4"><i class="fas fa-users text-4xl text-yellow-300"></i> Welcome, Dear Members</h1>

    <div class="mt-8 p-4 bg-white rounded-lg shadow-md text-black">
      <h2 class="text-2xl font-semibold">How to Sign In to the Member Portal</h2>
      <p>Before we can get started, we need some key information from you. This information will help facilitate your registration process. Please fill out the necessary details and submit them, either in person or through email.</p>

      <div class="flex flex-wrap items-center mb-4">
        <div class="w-full md:w-1/2">
          <img src="https://via.placeholder.com/300" alt="Member Portal" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="w-full md:w-1/2 mt-4 md:mt-0">
          <ol class="list-decimal pl-6">
            <li class="mb-2">
              <i class="fas fa-laptop text-blue-500"></i> Open any web browser on your phone or computer.
              <a href="https://portal.bibliasacco.com" class="text-blue-600 hover:underline font-semibold" target="_blank">Visit the portal</a>. A sign-in page will appear.
              Enter your Full Membership number (e.g., ASK01234).
              Enter the 4-digit password sent to your phone as an SMS. (Note: This one-time password is sent to the phone number you provided during registration).
              You'll be prompted to complete a Captcha verification
              <i class="fas fa-shield-alt text-green-500"></i>
              Please enter the captcha text above and click 'Validate'.
              Next, enter the OTP verification code
              <i class="fas fa-mobile-alt text-blue-500"></i>
              Please enter the one-time password received via SMS sent to your phone. (Note: OTP verification code is only sent to the phone number that you provided during registration).
              Enter the 6-digit OTP verification code.
              Click 'Validate' when prompted with KYC Verification.
              If it's your first time, you will be required to enter a new password and confirm it.
              You can now log in using your membership number and the newly created password.
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="mt-8 p-4 bg-white rounded-lg shadow-md text-black">
      <h2 class="text-2xl font-semibold">How to Log In</h2>

      <div class="flex flex-wrap items-center mb-4">
        <div class="w-full md:w-1/2">
          <img src="https://via.placeholder.com/300" alt="Member Portal" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="w-full md:w-1/2 mt-4 md:mt-0">
          <ol class="list-decimal pl-6">
            <li class="mb-2">
              <i class="fas fa-laptop text-blue-500"></i> Open any web browser on your phone or computer.
              <a href="https://portal.bibliasacco.com" class="text-blue-600 hover:underline font-semibold" target="_blank">Visit the portal</a>. A sign-in page will appear.
              Enter your full membership number (e.g., ASK01234).
              Enter your password and click 'Sign In'.
              You will be prompted with captcha verification
              <i class="fas fa-shield-alt text-green-500"></i>
              Please enter the captcha text above and click 'Validate'.
              Click 'Generate One Time Password (OTP) Verification'.
              Next, you will be prompted with OTP Verification
              <i class="fas fa-mobile-alt text-blue-500"></i>
              Please enter the one-time password received via SMS sent to your phone. (Note: OTP verification code is only sent to the phone number that you provided during registration).
              Enter the 6-Digit OTP verification code.
              Click 'Validate'.
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="mt-8 p-4 bg-white rounded-lg shadow-md text-black">
      <h2 class="text-2xl font-semibold">How to Navigate Around</h2>
      <p>Once you are logged in, on the top left, you'll find nine boxed dots. Click on the nine boxed dots to reveal the menu with the following options:</p>
      <ul class="list-disc pl-6">
        <li>
          <i class="fas fa-tachometer-alt text-yellow-500"></i> Dashboard
        </li>
        <li>
          <i class="fas fa-file-alt text-yellow-500"></i> My Accounts – Contains account summary, account statement, and share certificate
        </li>
        <li>
          <i class="fas fa-hand-holding-usd text-yellow-500"></i> Loans – Includes Loan Summary, Loan statements, Loan Calculator, Loans Guaranteed, and Loan Collateral
        </li>
        <li>
          <i class="fas fa-user text-yellow-500"></i> My Profile – Contains Member Profile, Data Change Request, My files, My Beneficiaries, and Change Password
        </li>
        <li>
          <i class="fas fa-bell text-yellow-500"></i> Updates – Includes Announcements, Notifications, and Branches
        </li>
        <li>
          <i class="fas fa-sign-out-alt text-red-500"></i> Logout.
        </li>
      </ul>
    </div>

    <p class="mt-4 text-xl">Enjoy your experience with the Member Portal!</p>
  </div>
</template>

<script>
export default {
  name: 'DearMembers',
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
