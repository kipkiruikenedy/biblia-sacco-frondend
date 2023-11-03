<template>
  <div class="membership-registration">
    <h1 class="text-4xl font-bold mb-6 text-primary text-center">Membership Registration</h1>
    <p class="text-gray-700 text-lg mb-4 text-center">Welcome to our community! To join, please provide the following information:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
      <div v-for="section in registrationSections" :key="section.title" class="rounded-lg bg-white shadow-2xl p-6 text-center">
        <div class="mb-4">
          <i :class="section.iconClass" class="text-6xl text-primary mb-2 mx-auto"></i>
          <h2 class="text-2xl font-semibold">{{ section.title }}</h2>
        </div>
        <p class="text-gray-700">{{ section.description }}</p>
        <ul class="list-disc mt-4 ml-6 text-success">
          <li v-for="item in section.items" class="text-center">
            <i :class="item.iconClass"></i>
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registrationSections: [
        {
          title: "Application / Introduction Letter",
          iconClass: "fas fa-file-alt text-primary text-4xl",
          description: "Share your enthusiasm for becoming a member and tell us about your organization's history, mission, and governance.",
          items: [],
        },
        {
          title: "Attach the Following Documents",
          iconClass: "fas fa-paperclip text-primary text-4xl",
          description: "Please attach the following documents to complete your registration:",
          items: [
            {
              iconClass: "fas fa-file-pdf text-success",
              text: "A copy of your latest audited accounts.",
            },
            {
              iconClass: "fas fa-certificate text-success",
              text: "A copy of the certificate of registration.",
            },
            {
              iconClass: "fas fa-book text-success",
              text: "A mission/faith statement.",
            },
            {
              iconClass: "fas fa-user-check text-success",
              text: "A list of at least 4 committed members with their designations and signatures.",
            },
            ],
        },
        {
          title: "Individual Registration Requirement",
          iconClass: "fas fa-user text-primary text-4xl",
          description: "Individual registration requirements:",
          items: [
            {
              iconClass: "fas fa-file-signature text-success",
              text: "Filled Membership Form.",
            },
            {
              iconClass: "fas fa-id-card text-success",
              text: "One Passport size Photo.",
            },
            {
              iconClass: "fas fa-address-card text-success",
              text: "A copy of your ID.",
            },
            {
              iconClass: "fas fa-file-contract text-success",
              text: "A copy of your KRA Pin.",
            },
            ],
        },
        ],
    };
  },
};
</script>

<style scoped>
.membership-registration {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.text-primary {
  color: #3f83f8;
}

.text-success {
  color: #28a745;
}

.text-primary:hover {
  color: #295fcc;
}
</style>
