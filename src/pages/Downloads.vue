<template>
  <div class="downloadable-forms">
    <h1 class="text-4xl font-bold mb-6 text-primary text-center">Downloadable Forms</h1>
    <p class="text-gray-700 text-lg mb-4 text-center">
      Find the forms you need to get started. Click on the form name to download.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
      <div v-for="form in forms" :key="form.title" class="rounded-lg bg-white shadow-2xl p-6 text-center">
        <i :class="form.iconClass" class="text-5xl text-blue-900 mb-2"></i>
        <h2 class="text-2xl font-semibold mb-2">{{ form.title }}</h2>
        <a :href="form.link" class="text-primary hover:underline">Download Form</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [
        {
          title: "Member Application Form",
          link: "/forms/member-application-form.pdf",
          iconClass: "fas fa-user-edit",
        },
        {
          title: "Change of Guarantee Form",
          link: "/forms/change-of-guarantee-form.pdf",
          iconClass: "fas fa-exchange-alt",
        },
        {
          title: "Authorization to Deduct from Salary Form",
          link: "/forms/authorization-to-deduct-form.pdf",
          iconClass: "fas fa-file-signature",
        },
        {
          title: "Loan Application & Agreement Form",
          link: "/forms/loan-application-form.pdf",
          iconClass: "fas fa-file-contract",
        },
        {
          title: "Saving Registration Form",
          link: "/forms/saving-registration-form.pdf",
          iconClass: "fas fa-file-alt",
        },
        {
          title: "Member Bio Data Form",
          link: "/forms/member-bio-data-form.pdf",
          iconClass: "fas fa-id-card",
        },
        {
          title: "Newsletter",
          link: "/forms/newsletter.pdf",
          iconClass: "fas fa-newspaper",
        },
        {
          title: "Mobile Application Guide",
          link: "/forms/mobile-application-guide.pdf",
          iconClass: "fas fa-mobile-alt",
        },
        {
          title: "Biblia Housing Membership Form",
          link: "/housing-forms/membership-form.pdf",
          iconClass: "fas fa-house-user",
        },
        {
          title: "Biblia Housing Deduction Form",
          link: "/housing-forms/deduction-form.pdf",
          iconClass: "fas fa-hand-holding-usd",
        },
        {
          title: "Biblia Housing Land Application Form",
          link: "/housing-forms/land-application-form.pdf",
          iconClass: "fas fa-file-signature",
        },
        {
          title: "Biblia Housing Land Transfer Form",
          link: "/housing-forms/land-transfer-form.pdf",
          iconClass: "fas fa-exchange-alt",
        },
        {
          title: "Biblia Housing Land Consent Form",
          link: "/housing-forms/land-consent-form.pdf",
          iconClass: "fas fa-file-signature",
        },
      ],
    };
  },
};
</script>

<style scoped>
.downloadable-forms {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.text-primary {
  color: #3f83f8;
}

.text-primary:hover {
  color: #295fcc;
}
</style>
