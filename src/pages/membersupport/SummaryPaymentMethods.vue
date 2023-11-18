<template>
  <div class="payment-methods-container">
    <div class="left-table">
      <h2 class="text-2xl font-bold mb-4 text-primary">Biblia Sacco Payments</h2>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Payment Method</th>
            <th class="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M-Pesa</td>
            <td>Make payments using M-Pesa with the provided paybill number and account number.</td>
          </tr>
          <tr>
            <td>Bank Transfer</td>
            <td>Transfer funds directly to the Biblia Sacco bank account. Contact us for account details.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="right-table">
      <h2 class="text-2xl font-bold mb-4 text-primary">Other Payment Methods</h2>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">Payment Method</th>
            <th class="text-left">Description</th>
            <th class="text-left">Additional Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Credit Card</td>
            <td>Securely pay using your credit card online.</td>
            <td>Accepts major credit cards.</td>
          </tr>
          <tr>
            <td>PayPal</td>
            <td>Use your PayPal account for quick and convenient payments.</td>
            <td>Requires a valid PayPal account.</td>
          </tr>
          <tr>
            <td>Check</td>
            <td>Mail a check to our office address.</td>
            <td>Allow processing time for check clearance.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// You can add any necessary logic here
</script>

<style scoped>
.payment-methods-container {
  display: flex;
  justify-content: space-between;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.text-primary {
  color: #3498db; /* You can replace this color with your brand color */
}

/* Add any additional styling here */
</style>
