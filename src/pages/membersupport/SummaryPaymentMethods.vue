<template>
  <div class="payment-methods-container">
    <div class="left-table">
      <h2 class="table-title text-2xl font-bold mb-4 text-primary">Biblia Sacco Product Codes</h2>
      <table class="table">
        <thead>
          <tr>
            <th class="table-header">Old Names</th>
            <th class="table-header">New Name</th>
            <th class="table-header">Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-cell">Normal Loan/Development</td>
            <td class="table-cell">Ufanisi</td>
            <td class="table-cell">UFL</td>
          </tr>
          <tr>
            <td class="table-cell">EMERGENCY LOAN</td>
            <td class="table-cell">UPEZI</td>
            <td class="table-cell">UPL</td>
          </tr>
          <tr>
            <td class="table-cell">SCHOOL FEES LOAN</td>
            <td class="table-cell">ELIMU</td>
            <td class="table-cell">EML</td>
          </tr>
          <tr>
            <td class="table-cell">SINKING FUND LOAN</td>
            <td class="table-cell">DARAJA</td>
            <td class="table-cell">DRL</td>
          </tr>
          <tr>
            <td class="table-cell">REFINANCE LOAN</td>
            <td class="table-cell">REFINANCE LOAN</td>
            <td class="table-cell">RFL</td>
          </tr>
          <tr>
            <td class="table-cell">INSURANCE PREMIUM LOANS</td>
            <td class="table-cell">INSURANCE PREMIUM LOANS</td>
            <td class="table-cell">ISL</td>
          </tr>
          <tr>
            <td class="table-cell">ASSETS FINANCE LOAN/PRODUCT</td>
            <td class="table-cell">ASSETS FINANCE LOAN/PRODUCT</td>
            <td class="table-cell">ASL</td>
          </tr>
          <tr>
            <td class="table-cell">MAKAO POA LOAN</td>
            <td class="table-cell">MAKAO POA LOAN</td>
            <td class="table-cell">MPL</td>
          </tr>
          <tr>
            <td class="table-cell">--</td>
            <td class="table-cell">M-BIBILIA LOAN</td>
            <td class="table-cell">MBL</td>
          </tr>
          <tr>
            <td class="table-cell">--</td>
            <td class="table-cell">DIGITECH LOAN</td>
            <td class="table-cell">DGL</td>
          </tr>
          <tr>
            <td class="table-cell">--</td>
            <td class="table-cell">DIVIDEND LOAN</td>
            <td class="table-cell">DAL</td>
          </tr>
          <tr>
            <td class="table-cell">DEPOSIT</td>
            <td class="table-cell">--</td>
            <td class="table-cell">--</td>
          </tr>
          <tr>
            <td class="table-cell">NORMAL SHARES</td>
            <td class="table-cell">--</td>
            <td class="table-cell">DEP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="right-table">
      <h2 class="table-title text-2xl font-bold mb-4 text-primary">Bibilia Sacco - Payment Modes</h2>
      <table class="table">
        <thead>
          <tr>
            <th class="table-header" colspan="2">EMPLOYERS OR BANKER'S CHEQUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-cell" colspan="2">PAYABLE TO: BIBILIA SACCO SOCIETY LIMITED</td>
          </tr>
          <tr>
            <th class="table-header" colspan="2">BANK DEPOSIT, EFT, RTGS, OR STANDING ORDER</th>
          </tr>
          <tr>
            <td class="table-cell">ACCOUNT NAME</td>
            <td class="table-cell">BIBILIA SACCO SOCIETY LIMITED</td>
          </tr>
          <tr>
            <td class="table-cell">ACCOUNT NUMBER</td>
            <td class="table-cell">011-2000-0539-200</td>
          </tr>
          <tr>
            <td class="table-cell">BANK NAME</td>
            <td class="table-cell">CO-OPERATIVE BANK OF KENYA</td>
          </tr>
          <tr>
            <td class="table-cell">BANK BRANCH</td>
            <td class="table-cell">GREENHOUSE MALL, NAIROBI</td>
          </tr>
          <tr>
            <td class="table-cell">BANK CODE</td>
            <td class="table-cell">11153</td>
          </tr>
          <tr>
            <td class="table-cell">SWIFT CODE</td>
            <td class="table-cell">KCOOKENA</td>
          </tr>
          <tr>
            <td class="table-cell">REFERENCE</td>
            <td class="table-cell">FULL NAMES and /or MEMBERSHIP NO</td>
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
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

.left-table,
.right-table {
  flex: 1;
  max-width: 48%;
  margin-bottom: 20px;
}

.table-title {
  margin-top: 0;
  color: #3498db;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  overflow-x: auto;
}

.table-header {
  background-color: #3498db;
  color: #fff;
  padding: 12px;
  text-align: left;
  font-weight: 600; /* Bold text */
}

.table-cell {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  font-weight: 500; /* Semi-bold text */
}

/* Responsive styling */
@media (max-width: 768px) {
  .left-table,
  .right-table {
    max-width: 100%;
  }
}
</style>
