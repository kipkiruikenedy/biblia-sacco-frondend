<template>
  <div class="bg-gradient-to-r from-blue-400 to-green-400 py-12">
    <div class="container mx-auto flex flex-wrap items-center p-8 rounded-lg bg-white shadow-lg">
      <div class="w-full md:w-1/2 mb-4">
        <img src="../assets/images/agm.jpg" alt="Image Description" class="max-w-full h-auto mx-auto" />
      </div>
      <div class="w-full md:w-1/2 mb-4 p-5">
        <div class="text-4xl text-gray-800 mb-4">
          <i class="fas fa-infinity text-yellow-300 text-4xl mr-2"></i> LIMITLESS POSSIBILITIES
        </div>
        <h2 class="text-3xl text-blue-600 font-semibold mb-4">
          Welcome
        </h2>
        <p class="text-lg text-gray-800 leading-7 mb-8">
          Biblia Sacco is a leading Evangelical Christian Savings and Credit Co-operative Society in Kenya for workers of churches, NGOs, Schools including Universities, Hospitals, Media houses, and others.
        </p>
        <p class="text-lg text-gray-800 leading-7">
          Biblia Sacco gives you a vehicle for savings and an opportunity to access
        competitive credit for growing your money with nothing but your
        regular savings and attractive interest rates.
       
        </p>
         <a href="#" class="read-more-button">Read more <i class="fas fa-arrow-right text-white"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeComponent",
};
</script>

<style scoped>
/* Additional CSS styles for further decoration */
.text-4xl i {
  vertical-align: middle; /* Align the Font Awesome icon vertically with the text */
}
.text-blue-600 {
  color: #2b6cb0; /* Change text color to blue */
}
/* Style the "Read more" button */
.read-more-button {
  display: inline-block;
  background-color: #2b6cb0; /* Blue background color */
  color: #fff; /* White text color */
  padding: 10px 20px; /* Adjust padding for button size */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove default link underline */
  transition: background-color 0.3s; /* Add a hover effect */
}
.read-more-button:hover {
  background-color: #1f4c88; /* Darker blue on hover */
}
/* Add more CSS styles as needed for your decorations */
</style>
