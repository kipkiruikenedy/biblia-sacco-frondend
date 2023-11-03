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
          <div v-if="loan.open" class="mt-4 text-gray-600">{{ loan.description }}</div>
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
    description: `
      Maximum three times a member’s deposits, subject to a ceiling of Kshs 7.5 million, or an amount set by the Board of Directors.
      Interest shall be charged at 1% monthly on reducing balance and may be varied from time to time by the BOD.
      The maximum repayment period shall be 60 months which may be varied by the Board of Directors from time to time as the cash flow dictates.
    `,
    open: false,
  },
  {
    id: 2,
    name: 'Asset Finance Loan / Product Loan',
    description: `
      • For purchase of other products, household goods, vehicles or land.

Interest rate shall be charged at 12% p.a or any other interest to be determined by the Board of Directors from time to time.
Members to apply for in the normal terms.
Repayment period is 60 months.
Maximum amount is Kshs.10million.
Applicable to members with deposits of at least 15% of the loan applied..
    `,
    open: false,
  },
  {
    id: 3,
    name: 'Refinancing Loan',
    description: 'Description for Refinancing Loan goes here.',
    open: false,
  },
  {
    id: 4,
    name: 'Daraja Loan',
    description: 'Description for Daraja Loan goes here.',
    open: false,
  },
  {
    id: 5,
    name: 'M-Biblia Loan',
    description: 'Description for M-Biblia Loan goes here.',
    open: false,
  },
  {
    id: 6,
    name: 'Insurance Premium Loan',
    description: 'Description for Insurance Premium Loan goes here.',
    open: false,
  },
  {
    id: 7,
    name: 'Elimu Loan',
    description: 'Description for Elimu Loan goes here.',
    open: false,
  },
  {
    id: 8,
    name: 'Makao Poa Loan',
    description: 'Description for Makao Poa Loan goes here.',
    open: false,
  },
  {
    id: 9,
    name: 'Upesi Loan',
    description: 'Description for Upesi Loan goes here.',
    open: false,
  },
  {
    id: 10,
    name: 'Digitech Loan',
    description: `
      The Sacco will finance at 1.2% per month for a period of up to 12 months.
      Maximum amount shall be Kshs. 100,000.
      The loan should be fully secured by guarantors.
      Items to be purchased include but not limited to; Tank, office furniture, Electronic appliances e.g Mobile, Television, Laptops.
      Partnerships with relevant suppliers to be initiated e.g. safaricom, Hotpoint, top tank.
    `,
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
