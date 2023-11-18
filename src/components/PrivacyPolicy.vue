<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>

    <section>
      <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
      <p>
        Welcome to Biblia Sacco Privacy Policy. This Privacy Policy describes how we collect, use, and disclose
        your personal information when you use our website and services.
      </p>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-semibold mb-2">2. Information We Collect</h2>
      <p>
        Biblia Sacco collects and processes personal information for the following purposes:
      </p>
      <ul class="list-disc ml-6">
        <li>Contact Information: We may collect your name, email address, and phone number.</li>
        <li>Membership Data: Information related to your membership with Biblia Sacco.</li>
        <li>Financial Information: Details about your transactions with us.</li>
        <!-- Add more categories as needed -->
      </ul>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
      <p>
        Biblia Sacco uses the collected information for the following purposes:
      </p>
      <ul class="list-disc ml-6">
        <li>Providing and maintaining our services.</li>
        <li>Processing your membership and financial transactions.</li>
        <li>Communicating with you and providing customer support.</li>
        <!-- Add more purposes as needed -->
      </ul>
    </section>

    <section class="mt-4">
      <h2 class="text-2xl font-semibold mb-2">4. Your Privacy Matters</h2>
      <p>
        Biblia Sacco values your privacy, and we want to assure you that:
      </p>
      <ul class="list-disc ml-6">
        <li>We do not sell your personal information to third parties.</li>
        <li>We do not use your information for any commercial purposes.</li>
        <li>We do not share your personal details with third parties.</li>
      </ul>
    </section>

    <!-- Add more sections as needed -->

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const leavePrivacyPolicy = () => {
  // Add any logic you need before leaving the privacy policy page
  // ...

  // Navigate to a different route (e.g., home) to trigger the route change
  router.push('/');
};
</script>