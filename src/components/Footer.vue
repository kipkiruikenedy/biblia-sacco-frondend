<template>
  <footer class="footer bg-blue-900 text-white">
    <div class="container mx-auto flex flex-wrap justify-between items-start py-6">
      <div class="w-full md:w-1/2 lg:w-1/4">
        <h4 class="text-2xl font-semibold mb-4">Quick Links</h4>
        <ul>
          <li><i class="fas fa-home"></i> Home</li>
          <li><i class="fas fa-info-circle"></i> About Us</li>
          <li><i class="fas fa-info-circle"></i> Know More</li>
          <li><i class="fas fa-cubes"></i> Products</li>
          <li><i class="fas fa-balance-scale"></i> Governance</li>
          <li><i class="fas fa-briefcase"></i> Career</li>
          <li><i class="fas fa-envelope"></i> Contact Us</li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 mt-4 md:mt-0">
        <h4 class="text-2xl font-semibold mb-4">Follow Us</h4>
        <div class="flex space-x-2">
          <a href="#" class="text-4xl text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-4xl text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-4xl text-white"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 mt-4 md:mt-0">
        <p class="text-sm">© 2023 Biblia Sacco Ltd</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Additional CSS styles for further decoration */
.footer {

  padding: 20px 0;
}

.footer h4 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer i {
  margin-right: 10px;
}

.footer p {
  color: #ccc;
  font-size: 0.875rem;
}

/* Add more decoration as needed */
.footer .flex space-x-2 a {
  transition: color 0.3s;
}

.footer .flex space-x-2 a:hover {
  color: #ffbb00;
}
</style>
