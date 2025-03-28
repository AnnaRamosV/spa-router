<template>
  <main class="bg-slate-100">
      <nav>
        <RouterLink to="#/">Home</RouterLink>
        <RouterLink to="#/features"></RouterLink>
        <RouterLink to="#/pricing"></RouterLink>
        <RouterLink to="#/contact"></RouterLink>
      </nav>
    <RouterView/>
  </main>
</template>


<script setup lang="ts">
import {RouterView} from 'vue-router';

</script>

<style scoped></style>