import { createRouter, createWebHistory } from 'vue-router';

import UnitAffiliation from './pages/register/UnitAffiliation.vue'; // Replace with your actual component file path
import IndividualMembership from './pages/register/IndividualMembership.vue'; // Replace with your actual component file path
import GroupMembership from './pages/register/GroupMembership.vue'; 

// Import your page components
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import MembershipRegistration from './pages/MembershipRegistration.vue';
import MemberSupport from './pages/MemberSupport.vue';
import Downloads from './pages/Downloads.vue';
import Gallery from './pages/Gallery.vue';
import FAQs from './pages/FAQs.vue';
import Loan from './pages/Loan.vue';
import Savings from './pages/Savings.vue';
import HousingScheme from './pages/HousingScheme.vue';
import OrganizationStructure from './pages/OrganizationStructure.vue';
import AGM from './pages/AGM.vue';
import Career from './pages/Career.vue';
import ContactUs from './pages/ContactUs.vue';

import PrivacyPolicy from './components/PrivacyPolicy.vue';
import CookiesPolicy from './components/CookiesPolicy.vue';

import Files from './pages/Files.vue';

const routes = [
    {
        path: '/unit-affiliation',
        name: 'unitAffiliation',
        component: UnitAffiliation,
      },
      {
        path: '/individual-membership',
        name: 'individualMembership',
        component: IndividualMembership,
      },
      {
        path: '/group-membership',
        name: 'groupMembership',
        component: GroupMembership,
      },

    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/membership-registration', component: MembershipRegistration },
    { path: '/member-support', component: MemberSupport },
    { path: '/downloads', component: Downloads },
    { path: '/gallery', component: Gallery },
    { path: '/faqs', component: FAQs },
    { path: '/loan', component: Loan },
    { path: '/savings', component: Savings },
    { path: '/housing-scheme', component: HousingScheme },
    { path: '/organization-structure', component: OrganizationStructure },
    { path: '/agm', component: AGM },
    { path: '/career', component: Career },
    { path: '/contact', component: ContactUs },

//    PRIVACY POLICY
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/cookies-policy', component: CookiesPolicy },

    { path: '/files', component: Files },

    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
