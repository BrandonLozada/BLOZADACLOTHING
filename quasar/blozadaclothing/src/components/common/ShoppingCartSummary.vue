<template>
  <div class="absolute-bottom full-width bg-white q-list--bordered text-grey-9 text-weight-regular">
    <div class="q-pa-lg">

      <div class="flex justify-between">
        <div class="max-width-text"> Subtotal: </div>

        <div class="max-width-text"> 999 MXN </div>
      </div>

      <div class="flex justify-between">
        <div class="max-width-text"> Envío: </div>

        <div class="max-width-text"> 99 MXN </div>
      </div>

      <div class="flex justify-between text-green-8">
        <div class="max-width-text"> Descuento: </div>

        <div class="max-width-text"> -200.00 MXN </div>
      </div>

      <div class="flex justify-between text-weight-medium">
        <div class="max-width-text"> TOTAL: </div>

        <div class="max-width-text"> 898 MXN </div>
      </div>

      <div class="flex justify-center q-pt-md">
        <q-btn
          class="full-width"
          color="primary"
          label="Checar"
          aria-label="Checar"
          to=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>
