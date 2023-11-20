<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-semibold mb-4">Explore Our Loan Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="loan in loans" :key="loan.id">
        <div @click="toggleDescription(loan.id)" class="cursor-pointer bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ loan.name }}</h2>
            <i :class="loan.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
          </div>
          <div v-if="loan.open" class="mt-4 text-gray-600">
            <ul>
              <li v-for="point in loan.description" :key="point"> <i class="fas fa-check mr-1"></i><span class="ml-1">{{ point }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loans = ref([
  {
    id: 1,
    name: 'Ufanisi Loan',
    description: [
      'Maximum three times a member’s deposits, subject to a ceiling of Kshs 7.5 million, or an amount set by the Board of Directors.',
      'Interest shall be charged at 1% monthly on reducing balance and may be varied from time to time by the BOD.',
      'The maximum repayment period shall be 60 months which may be varied by the Board of Directors from time to time as the cash flow dictates.',
    ],
    open: false,
  },
  {
    id: 2,
    name: 'Asset Finance Loan / Product Loan',
    description: [
      'For purchase of other products, household goods, vehicles or land.',
      'Interest rate shall be charged at 12% p.a or any other interest to be determined by the Board of Directors from time to time.',
      'Members to apply for in the normal terms.',
      'Repayment period is 60 months.',
      'Maximum amount is Kshs.10million.',
      'Applicable to members with deposits of at least 15% of the loan applied.',
    ],
    open: false,
  },
  {
    id: 3,
    name: 'Refinancing Loan',
    description: [
      'Members to apply for the loan under the normal terms.',
      'Member to apply after at least 6 months of servicing the current loan.',
      'Interest shall be charged at 12% p.a on reducing balance and may be varied from time to time by the BOD.',
      'These loans are provided depending on the availability of funds in the Society and on a first come first served basis.',
      'The refinancing fee shall be 1% on the outstanding balance.',
      'Maximum amount should not exceed Kshs. 7.5 million or an amount set by BOD.',
      'Maximum repayment period shall be 60 months.',
    ],
    open: false,
  },
  {
    id: 4,
    name: 'Daraja Loan',
    description: [
      'Maximum amount shall be Kshs 400,000.00 or an amount set by the BOD.',
      'Interest shall be charged at 13% pa on reducing balance or a rate set by BOD.',
      'Maximum repayment period shall be 24 months.',
    ],
    open: false,
  },
  {
    id: 5,
    name: 'M-Biblia Loan',
    description: [
      'This is a mobile banking facility that allows members the opportunity to access loans via their phones.',
      'Maximum loan of 50,000 but to be graduated from Ksh. 5,000.00.',
      'Interest rate of 5% per month on reducing balance.',
      'Repayment period up to a maximum of 3 months.',
      'The monthly repayment is facilitated by the member.',
      'The member can access up to 80% of his free deposits.',
      'In case of default the loan balance is recovered from the members’ deposit.',
    ],
    open: false,
  },
  {
    id: 6,
    name: 'Insurance Premium Loan',
    description: [
      'Members to apply for the loan under the normal terms.',
      'Member must be contributing deposits and repaying their loans consistently.',
      'Repayment period 12 months.',
      'Interest shall be charged at 13% per annum on reducing balance.',
      'Maximum subject to premium payable.',
      'Cheque is payable directly to the insurance company.',
    ],
    open: false,
  },
  {
    id: 7,
    name: 'Elimu Loan',
    description: [
      'Maximum amount shall be Kshs. 500,000.00 or an amount set by BOD.',
      'Interest shall be charged at 12% p.a on reducing balance and may be varied from time to time by the BOD.',
      'Maximum repayment period shall be 24 months.',
      'Application for school fees loan should be submitted together with a signed and stamped fee structure.',
    ],
    open: false,
  },
  {
    id: 8,
    name: 'Makao Poa Loan',
    description: [
      'This product is designed to help members in their investment and development plans e.g.acquire a plot, renovate, finish or even construct commercial, rental and residential properties.',
      'Minimum loan shall be Kshs. 1million and Maximum loan amount shall be Kshs.10 million subject to ability to repay.',
      'Interest rate charged on the loan is 12% p.a. on reducing balance.',
      'Maximum repayment period of 72 months.',
      'The loan must be fully secured by guarantors and/or collateral.',
      'Member must have a good credit history and ability to repay.',
      'This loan shall not be used to refinance any other loan.',
      'Applicable to members with deposits of at least 15% of the loan applied.',
    ],
    open: false,
  },
  {
    id: 9,
    name: 'Upesi Loan',
    description: [
      'Maximum amount shall be Kshs. 300,000.00, or an amount determined by the BOD from time to time.',
      'Interest shall be charged at 14% p.a on reducing balance and may be varied from time to time by the BOD.',
      'Maximum repayment period shall be 24 months.',
      'The applicant will be required to state reasons for emergency',
    ],
    open: false,
  },
  {
    id: 10,
    name: 'Digitech Loan',
    description: [
      'The Sacco will finance at 1.2% per month for a period of up to 12 months.',
      'Maximum amount shall be Kshs. 100,000.',
      'The loan should be fully secured by guarantors.',
      'Items to be purchased include but not limited to; Tank, office furniture, Electronic appliances e.g Mobile, Television, Laptops.',
      'Partnerships with relevant suppliers to be initiated e.g. safaricom, Hotpoint, top tank',
    ],
    open: false,
  },
]);

const toggleDescription = (loanId) => {
  const loan = loans.value.find((l) => l.id === loanId);
  if (loan) {
    loan.open = !loan.open;
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Add any custom styling here */
</style>
