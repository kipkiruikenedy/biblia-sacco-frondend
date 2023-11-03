<template>
  <div class="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold">About Us</h1>
      <p class="text-lg">Empowering Your Financial Future</p>
    </div>

    <!-- Historical Background -->
    <section class="mb-8">
 
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-lg">
            The Society was founded by dedicated employees of the Bible Society of Kenya and the United Bible Society in 1976. Since then, it has grown to a membership of over 10,000 with approximately 190 affiliated units. Our primary area of operation is within the Republic of Kenya, including organizations headquartered in Nairobi.
          </p>
        </div>
        <div>
             <div class="flex items-center">
        <i class="fas fa-history text-2xl text-blue-900 mr-4"></i>
        <h2 class="text-2xl font-semibold text-center">Historical Background</h2>
      </div>
          <img src="../assets/images/agm.jpg" alt="Historical Background" class="rounded-lg shadow-md p-3 m-3" />
        </div>
      </div>
    </section>

    <!-- Common Bond -->
    <section class="mb-8">
  
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <div class="flex items-center">
        <i class="fas fa-handshake text-2xl text-blue-900 mr-4"></i>
        <h2 class="text-2xl font-semibold">Common Bond</h2>
      </div>
          <img src="../assets/images/agm.jpg" alt="Common Bond" class="rounded-lg shadow-md p-3 m-3" />
        </div>
        <div>
          <p class="text-lg">
            We proudly serve employees of Christian Evangelical Organizations, including churches, church-sponsored autonomous organizations, para-church organizations, mission agencies, Christian welfare groups, and Christian NGOs.
          </p>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="mb-8">
 
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-lg">
            Our philosophy is to provide competitive and affordable financial services to all members, promoting economic well-being and prosperity through shared resources.
          </p>
        </div>
        <div>
             <div class="flex items-center">
        <i class="fas fa-lightbulb text-2xl text-blue-900 mr-4"></i>
        <h2 class="text-2xl font-semibold">Philosophy</h2>
      </div>
          <img src="../assets/images/agm.jpg" alt="Philosophy" class="rounded-lg shadow-md p-3 m-3" />
        </div>
      </div>
    </section>

    <!-- Our Objectives -->
    <section class="mb-8">
      <div class="flex items-center">
        <i class="fas fa-bullseye text-4xl text-blue-900 mr-4"></i>
        <h2 class="text-2xl font-semibold">Our Objectives</h2>
      </div>
      <ul class="list-disc list-inside text-lg">
        <li>Mobilize savings and deposits for loan granting to members and productive investments for the benefit of the members.</li>
        <li>Promote the economic interests of the members, thereby enabling them to increase their standards of living.</li>
        <li>Ensure quality service to members.</li>
      </ul>
    </section>

    <!-- Our Principles -->
    <section class="mb-8">
      <div class="flex items-center">
        <i class="fas fa-balance-scale text-2xl text-yellow-300 mr-4"></i>
        <h2 class="text-2xl font-semibold">Our Principles</h2>
      </div>
      <ul class="list-disc list-inside text-lg">
        <li>The society operates under the following principles:</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>The Lordship of Jesus Christ.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Democratic member control.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Autonomy and independence.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Co-operation among cooperatives.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Voluntary and open membership.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Economic participation by members.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Education, training, and information.</li>
        <li><i class="fas fa-check text-green-300 mr-2"></i>Concern for the community in general.</li>
      </ul>
    </section>

    <div class="text-center">
      <p class="text-2xl font-semibold mb-4">Let's Do It Together</p>
      <button @click="onInvestClick" class="bg-blue-300 hover:bg-blue-400 text-blue-700 px-6 py-3 rounded-lg transition duration-300">
        Get Started <i class="fas fa-chevron-right ml-2"></i>
      </button>
    </div>
  </div>
</template>
