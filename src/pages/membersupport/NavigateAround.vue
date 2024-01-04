<template>
  <div class="member-portal-container">
    <div class="member-portal">
      <div class="content">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary">How to Navigate Around</h1>

        <p class="text-gray-700 mb-4 md:mb-6">
          Once you are logged in, on the top left there are nine boxed dots.
        </p>

        <ol class="list-decimal text-gray-700 mb-6 md:mb-8">
          <li>Click on the nine boxed dots.</li>
          <li>A menu will appear containing the following:</li>
          <ul class="list-disc ml-4 md:ml-6">
            <li>Dashboard</li>
            <li>My Accounts – Contains account summary, account statement, and share certificate</li>
            <li>Loans – Contains Loan Summary, Loan statements, Loan Calculator, Loans Guaranteed, and Loan Collateral</li>
            <li>My Profile – Contains Member Profile, Data Change Request, My files, My Beneficiaries, and Change Password</li>
            <li>Updates – Contains Announcements, Notifications, and Branches</li>
            <li>Logout</li>
          </ul>
        </ol>

        <p class="text-green-500 font-semibold mb-4">Enjoy!</p>
      </div>

      <div class="image-container">
        <!-- Add your navigation image here -->
        <img src="../../images/navigate.jpg" alt="Navigate" class="w-full h-auto rounded-lg shadow-lg">
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
  min-height: 100vh;
}

.member-portal {
  max-width: 95vw;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  max-width: 100%;
}

.image-container {
  padding-top: 20px;
  max-width: 100%;
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

@media screen and (min-width: 768px) {
  .member-portal {
    flex-direction: row;
  }

  .content {
    max-width: 600px;
    margin-right: 20px;
  }

  .image-container {
    padding-top: 0;
  }
}
</style>
