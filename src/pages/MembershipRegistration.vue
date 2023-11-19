<template>
  <div class="membership-registration bg-gray-100 min-h-screen p-8">
    <header class="text-center mb-8">
      <h1 class=" text-lg md:text-5xl font-bold text-primary mb-4">Welcome to Our Community!</h1>
      <p class="text-gray-700 text-md md:text-lg leading-relaxed">
        Embark on a journey to become a valued member of our community. Choose your affiliation type and provide the necessary details.
      </p>
    </header>

    <div class="md:registration-sections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="section in registrationSections" :key="section.title" class="registration-card bg-white rounded-lg p-6 shadow-md">
        <div class="card-header mb-4">
          <i :class="section.iconClass" class="md:text-8xl text-primary"></i>
          <h2 class="text-3xl font-semibold mt-4">{{ section.title }}</h2>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed">{{ section.description }}</p>
        <ol class="list-decimal mt-6 ml-8 text-gray-700">
          <li v-for="item in section.items" :key="item.text" class="text-left">
            {{ item.text }}
          </li>
        </ol>
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
          title: "Unit Affiliation",
          iconClass: "fas fa-layer-group",
          description: "Apply for unit affiliation by providing the following information:",
          items: [
            {
              iconClass: "fas fa-file-alt",
              text: "Application / Introduction Letter. Explain your interest to join, a brief history about the organization, e.g., what it does, how it is governed, etc.",
            },
            {
              iconClass: "fas fa-file-pdf",
              text: "Attach a copy of your latest audited accounts.",
            },
            {
              iconClass: "fas fa-certificate",
              text: "A copy of the certificate of registration.",
            },
            {
              iconClass: "fas fa-book",
              text: "A copy of the Mission/Faith statement.",
            },
            {
              iconClass: "fas fa-users",
              text: "A list of at least 4 permanently employed interested members showing their designations and signatures for commitment.",
            },
            ],
        },
        {
          title: "Individual Membership",
          iconClass: "fas fa-user",
          description: "Apply for individual membership by providing the following information:",
          items: [
            {
              iconClass: "fas fa-file-signature",
              text: "Filled Membership Form.",
            },
            {
              iconClass: "fas fa-id-card",
              text: "One Passport size Photo.",
            },
            {
              iconClass: "fas fa-address-card",
              text: "A copy of your ID.",
            },
            {
              iconClass: "fas fa-file-contract",
              text: "A copy of your KRA Pin.",
            },
            ],
        },
        {
          title: "Group/Church/Chama Membership",
          iconClass: "fas fa-users",
          description: "Apply for group/church/chama membership by providing the following information:",
          items: [
            {
              iconClass: "fas fa-file-alt",
              text: "Introduction letter stating interest to join Sacco.",
            },
            {
              iconClass: "fas fa-file-pdf",
              text: "6 months bank statement / latest audited accounts.",
            },
            {
              iconClass: "fas fa-users",
              text: "At least four members interested in joining.",
            },
            {
              iconClass: "fas fa-book",
              text: "Faith / mission statement.",
            },
            {
              iconClass: "fas fa-certificate",
              text: "Certificate of Registration.",
            },
            {
              iconClass: "fas fa-clipboard-check",
              text: "A copy of minutes stating that they have resolved to join the Sacco.",
            },
            {
              iconClass: "fas fa-money-bill-alt",
              text: "Registration fee: KES 3,000.",
            },
            {
              iconClass: "fas fa-money-check-alt",
              text: "Minimum contribution of KES 5,000 per month.",
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
  text-align: center;
}

.text-primary:not(.card-header i) {
  color: black;
}

.text-success {
  color: #4caf50; /* Adjusted color for a more harmonious palette */
}

.registration-sections {
  display: flex;
  justify-content: space-around;
}

.registration-card {
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: left;
  transition: transform 0.3s;
}

.registration-card:hover {
  transform: translateY(-10px);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-header i {
  color: #3f83f8;
  transition: color 0.3s;
}

.card-header i:hover {
  color: #295fcc;
}

.registration-card h2 {
  color: #333;
  font-weight: bold; /* Make titles bold */
}

.registration-card p {
  color: #666;
}

.registration-card ul {
  color: black; /* Set text color to black */
  list-style-type: none; /* Remove bullets */
}

.registration-card li {
  margin-left: 0; /* Remove default left margin */
}

.registration-card li i {
  margin-right: 8px;
}
</style>



