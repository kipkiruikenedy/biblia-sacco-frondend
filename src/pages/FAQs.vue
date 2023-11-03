<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="faq in faqs" :key="faq.id">
        <div @click="toggleAnswer(faq.id)" class="cursor-pointer bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ faq.question }}</h2>
            <i :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
          </div>
          <div v-if="faq.open" class="mt-4 text-gray-600">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    id: 1,
    question: 'Who is eligible to access Biblia Sacco Credit facilities?',
    answer: 'Membership eligibility criteria will determine eligibility for accessing credit facilities.',
    open: false,
  },
  {
    id: 2,
    question: 'When does a member become eligible for a loan?',
    answer: 'A member becomes eligible for a loan after meeting certain conditions and being in good standing.',
    open: false,
  },
  {
    id: 3,
    question: 'How is a loan application made?',
    answer: 'To apply for a loan, you need to follow a specific application process. Our experts are here to guide you through it.',
    open: false,
  },
  {
    id: 4,
    question: 'What is the difference between Shares, Deposits, and Savings?',
    answer: 'Discover the distinctions between shares, deposits, and savings offered by Biblia Sacco.',
    open: false,
  },
  {
    id: 5,
    question: 'Does interest charged by the Sacco fluctuate during the term of the loan?',
    answer: 'Learn about the stability of interest rates during the loan term.',
    open: false,
  },
  {
    id: 6,
    question: 'Who decides on what interest to charge?',
    answer: 'Find out who determines the interest rates for loans.',
    open: false,
  },
  {
    id: 7,
    question: 'Can a member capitalize interest rebates or dividends to boost one\'s shares?',
    answer: 'Learn whether interest rebates or dividends can be used to increase your shares.',
    open: false,
  },
  {
    id: 8,
    question: 'Can a member use dividends or interest rebates to clear loans?',
    answer: 'Discover if dividends or interest rebates can be used for loan repayments.',
    open: false,
  },
  {
    id: 9,
    question: 'Can one alter the loan repayment period during the repayment of the loan?',
    answer: 'Find out if the loan repayment period can be changed during the loan term.',
    open: false,
  },
  {
    id: 10,
    question: 'What are the acceptable Securities for a loan?',
    answer: 'Learn about the types of securities accepted for loans.',
    open: false,
  },
  {
    id: 11,
    question: 'Who is eligible to be a guarantor?',
    answer: 'Find out the eligibility criteria for becoming a guarantor.',
    open: false,
  },
  {
    id: 12,
    question: 'What is the role of a guarantor?',
    answer: 'Learn about the responsibilities and role of a guarantor.',
    open: false,
  },
  {
    id: 13,
    question: 'What are the rights of a guarantor?',
    answer: 'Discover the rights and protections available to a guarantor.',
    open: false,
  },
  {
    id: 14,
    question: 'What does a borrower need to know about a loan that he/she is guaranteeing?',
    answer: 'Find out what information a borrower should be aware of when guaranteeing a loan.',
    open: false,
  },
  {
    id: 15,
    question: 'What are available disbursement channels?',
    answer: 'Learn about the channels through which loan disbursements are made.',
    open: false,
  },
  {
    id: 16,
    question: 'Can one clear a loan in full before repayment is over?',
    answer: 'Find out whether borrowers can pay off their loans in full before the scheduled repayment period ends.',
    open: false,
  },
  {
    id: 17,
    question: 'Who is a nominee?',
    answer: 'A nominee is the person designated by a member to receive the proceeds of any payable funds upon the death of the member. All members are required to provide details of nominee(s) upon registering as members. One can change and/or update their nominee information as needed.',
    open: false,
  },
]);

const toggleAnswer = (faqId) => {
  const faq = faqs.value.find((f) => f.id === faqId);
  if (faq) {
    faq.open = !faq.open;
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Add any custom styling here */
</style>
