<template>
  <div class="member-portal-container">
    <div class="member-portal">
      <div class="content">
        <h1 class="text-4xl font-bold mb-6 text-primary">How to Make Payments via M-Pesa</h1>

        <p class="text-gray-700 mb-6">
          To make payments using M-Pesa, follow these simple steps:
        </p>

        <ol class="list-decimal text-gray-700 mb-8">
          <li>Go to your M-Pesa menu on your phone.</li>
          <li>Select "Lipa na M-Pesa."</li>
          <li>Choose "Pay Bill."</li>
          <li>Enter the Paybill number: <span class="font-semibold">332750</span>.</li>
          <li>Enter the Account number: <span class="font-semibold">UFLBIBO100</span> (Replace UFL with your product code and BIBO100 with your full membership number).</li>
          <li>Enter the amount you want to pay.</li>
          <li>Enter your M-Pesa PIN to confirm the payment.</li>
          <li>Review your payment details and click "Submit" or "Confirm" on the member portal.</li>
          <li>Your payment will be processed, and you will receive a confirmation message from M-Pesa.</li>
          <li>Done! Your M-Pesa payment is complete.</li>
        </ol>

        <p class="text-green-500 font-semibold">Thank you for your M-Pesa payment!</p>
      </div>

      <div class="image-container">
        <!-- Add your M-Pesa payment image here -->
        <img src="../../assets/images/mpesa.svg" alt="Make Payments via M-Pesa" class="w-full h-auto rounded-lg shadow-lg">
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

.content {
  flex: 1;
  max-width: 600px;
}

.image-container {
  flex: 1;
  padding-left: 20px;
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
