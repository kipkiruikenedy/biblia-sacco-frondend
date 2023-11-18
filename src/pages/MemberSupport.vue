<template>
<h1 class="text-2xl text-center font-bold">Dear Members</h1>
<Signin/>
<Login/>
<Navigate />
<Payment />
</template>


<script setup>
import Signin from "./membersupport/Signin.vue"
import Login from "./membersupport/Login.vue"
import Navigate from "./membersupport/NavigateAround.vue"
import Payment from "./membersupport/PaymentMethods.vue"
</script>