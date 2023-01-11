<template>
  <q-input class="width-50" dense standout="bg-primary" v-model="search" placeholder="Buscar en la tienda">
    <template v-slot:prepend>
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
</script>

<style scoped>

</style>
