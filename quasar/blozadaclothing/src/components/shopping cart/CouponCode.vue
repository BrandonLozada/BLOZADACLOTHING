<template>
  <div class="full-width bg-white text-grey-9 text-weight-regular">
    <div class="q-pa-lg">

      <q-item-label class="text-weight-regular text-grey-9 q-pb-md">
        Agrega un código promocional
      </q-item-label>

      <CouponCodeForm/>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CouponCodeForm from 'components/forms/CouponCodeForm.vue';


</script>

<style lang="scss" scoped>
</style>
