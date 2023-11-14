<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-700 p-8 text-white text-center">
    <h1 class="text-5xl font-extrabold mb-6"><i class="fas fa-users text-5xl text-yellow-300"></i> Welcome, Dear Members</h1>

    <section class="mt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="md:order-2">
          <img src="https://via.placeholder.com/600" alt="Member Portal" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="md:order-1 text-left">
          <h2 class="text-3xl font-semibold mb-4">How to Sign In to the Member Portal</h2>
          <p class="mb-4">Before we register you, it is important we have key information from you. That information will help in smooth registration. Fill it and submit it either physically or through email. Now, how to register:</p>

          <ol class="list-decimal pl-6">
            <li class="mb-2">
              Open any browser on your phone or computer.
              <a href="https://portal.bibliasacco.com" class="text-blue-600 hover:underline font-semibold" target="_blank">Visit the portal</a>. A sign-in page will appear.
              Enter your Full Membership number (e.g., ASK01234).
              Enter a 4 -digit password send on your phone as an SMS (NB: 4 -digit password is only sent to the phone number that one provided when filling the form). This is a one-time password.
              You will be prompted with Captcha verification (Please enter the captcha text above ) and click validate.
              Then you will be prompted with OTP verification code (Please enter the one-time password received via SMS) sent to your phone (NB: OTP verification code is only sent to the phone number that one provided when filling the form).
              Enter the 6 – digit OTP verification code.
              Click Validate when prompted with KYC Verification.
              If it's your first time, you will be required to enter a new password and confirm it.
              You can now Login using your membership number and the password you have just created.
              Done.
            </li>
          </ol>

          <h2 class="text-3xl font-semibold mb-4 mt-8">How to Login</h2>
          <ol class="list-decimal pl-6">
            <li class="mb-2">
              Open any browser on your phone or computer.
              On the tab type <a href="https://portal.bibliasacco.com" class="text-blue-600 hover:underline font-semibold" target="_blank">portal.bibliasacco.com</a>. A sign-in page will appear.
              Enter your full membership number (e.g., ASK01234).
              Enter your password and click Sign in.
              You will be prompted with captcha verification (Please enter the captcha text above) and click validate.
              Click Generate One Time Password (OTP) Verification.
              Then you will be prompted with OTP Verification (Please enter the one-time password received via SMS) sent to your phone (NB: OTP verification code is only sent to the phone number that one provided when filling the form).
              Enter the 6-Digit OTP verification code.
              Click Validate.
              Done.
            </li>
          </ol>

          <h2 class="text-3xl font-semibold mb-4 mt-8">How to Navigate Around</h2>
          <p class="mb-4">Once you are logged in, on the top left there are nine boxed dots.</p>
          <ol class="list-decimal pl-6">
            <li class="mb-2">
              Click on the nine boxed dots.
              A menu will appear containing the following:
              <ul>
                <li>i. Dashboard</li>
                <li>ii. My Accounts – Contain account summary, account statement, and share certificate</li>
                <li>iii. Loans – Contain Loan Summary, Loan statements, Loan Calculator, Loans Guaranteed and Loan Collateral</li>
                <li>iv. My Profile – Contain Member Profile, Data Change Request, My files, My Beneficiaries and Change Password</li>
                <li>v. Updates – Contain Announcements, Notifications and Branches</li>
                <li>vi. Logout.</li>
              </ul>
              Enjoy.
            </li>
          </ol>
        </div>
      </div>
    </section>

    <p class="mt-12 text-xl">Experience the Member Portal like never before. Start exploring now!</p>
  </div>
</template>

<script>
export default {
  name: 'DearMembers',
};
</script>

<style scoped>
/* Add any custom styling here */
.list-decimal li {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

h2 {
  color: #3b82f6; /* Blue color */
}

p {
  color: #4b5563; /* Gray color */
}

/* Styling for the section with a background color */
section {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styling for the buttons */
a {
  color: #3182ce;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2c5282;
}
</style>
