<template>
  <q-drawer
    :model-value="modelValue"
    v-bind="$attrs"
    side="right"
    overlay
    behavior="mobile"
    show-if-above
  >
    <div class="fixed-top">
      <q-btn
        flat
        dense
        round
        class="q-ma-md z-max text-grey-9"
        icon="arrow_back"
        aria-label="Menú"
        @click="$emit('rightDrawerOpen', rightDrawerOpen.value)"
      />
      <q-btn
        flat
        dense
        round
        class="q-ma-md z-max text-grey-9"
        icon="arrow_back_ios"
        aria-label="Menú"
        @click="$emit('update:rightDrawerOpen', $event.target.value)"
      />
      <q-btn
        flat
        dense
        round
        class="q-ma-md z-max text-grey-9"
        icon="keyboard_return"
        aria-label="Menú"
        @click="$emit('update:rightDrawerOpen', $event.target.value)"
      />
    </div>

    <q-item-label
      class="bg-grey-3 q-py-lg text-right"
      header
    >
      Shopping cart
    </q-item-label>

    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="bg-grey-5 text-dark"
    >
      <q-tab :ripple="false" no-caps label="Carrito" name="cartTab" />
      <q-tab :ripple="false" no-caps label="Envío" name="shipTab" />
      <q-tab :ripple="false" no-caps label="Pago" name="paymentTab" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="cartTab">


        The QCard component is a great way to display important pieces of grouped content.


      </q-tab-panel>

      <q-tab-panel name="shipTab">


        With so much content to display at once, and often so little screen real-estate,
        Cards have fast become the design pattern of choice for many companies, including
        the likes of Google and Twitter.


      </q-tab-panel>

      <q-tab-panel name="paymentTab">


        With so much content to display at once, and often so little screen real-estate,
        Cards have fast become the design pattern of choice for many companies, including
        the likes of Google and Twitter.


      </q-tab-panel>
    </q-tab-panels>

    <div class="absolute-bottom full-width bg-white q-list--bordered text-grey-9">
      <div class="q-px-xl q-pt-md">

        <div class="flex justify-between">
          <div class="max-width-text"> Subtotal: </div>

          <div class="max-width-text"> 499 mxn </div>
        </div>

        <div class="flex justify-between">
          <div class="max-width-text"> Subtotal: </div>

          <div class="max-width-text"> 499 mxn </div>
        </div>

        <div class="flex justify-between">
          <div class="max-width-text"> Subtotal: </div>

          <div class="max-width-text"> 499 mxn </div>
        </div>

        <div class="flex justify-between">
          <div class="max-width-text"> Subtotal: </div>

          <div class="max-width-text"> 499 mxn </div>
        </div>
      </div>


      <q-btn
        class=""
        color="primary"
        label="Checar"
        aria-label="Checkout"
        to=""
      />

    </div>

    <div v-if="tab === ''" class="my-message">
      <div class="max-width-text">
        No has agregado productos a tu carrito
      </div>
    </div>

  </q-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue';
// export interface ShoppingCartProps {
//   modelValue: boolean;
//   rightDrawerOpen: boolean;
// }
// const props = withDefaults(defineProps<ShoppingCartProps>(), {
//   modelValue: false,
//   rightDrawerOpen: false,
// });

const props = defineProps<{
  modelValue: false,
  rightDrawerOpen: false,
}>();

const tab = ref('cartTab')

const emits = defineEmits<{
  ( event: 'toggleRightDrawer', value: boolean): boolean,
  ( event: 'showRightDrawer'): boolean,
  ( event: 'mostrarRightDrawer'): void,
}>();
</script>

<style lang="scss" scoped>
</style>
