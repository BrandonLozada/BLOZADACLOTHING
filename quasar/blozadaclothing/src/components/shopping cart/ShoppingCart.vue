<template>
  <q-drawer
    :model-value="modelValue"
    v-bind="$attrs"
    side="right"
    overlay
    behavior="mobile"
    show-if-above
  >
    <div class="absolute-top">
      <q-btn
        flat
        dense
        round
        class="q-ma-md z-max text-grey-9"
        icon="arrow_back"
        aria-label="Menú"
        @click="$emit('update:modelValue', !modelValue)"
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

    <q-tabs
      v-model="tab"
      dense
      class="bg-grey-4 text-grey-8"
      align="justify"
      active-color="dark bg-grey-5"
      indicator-color="dark"
      narrow-indicator
      no-caps
      content-class=""
    >
      <q-tab :ripple="false" label="Carrito" name="cartTab" />
      <q-tab :ripple="false" label="Envío" name="shipTab" />
      <q-tab :ripple="false" disable label="Pago" name="paymentTab" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      class=""
    >
      <q-tab-panel name="cartTab" class="">

        <q-scroll-area
            visible
            class=""
            style="height: 300px;"
          >
            <q-list class="text-weight-regular">
              <EssentialLink
                v-for="item in authNavigationMenu"
                :key="item.title"
                v-bind="item"
              />
              <EssentialLink
                v-for="item in authNavigationMenu"
                :key="item.title"
                v-bind="item"
              />
            </q-list>
          </q-scroll-area>

      </q-tab-panel>

      <q-tab-panel name="shipTab">
      </q-tab-panel>

      <q-tab-panel name="paymentTab">
      </q-tab-panel>
    </q-tab-panels>

    <ShoppingCartSummary/>

    <div v-if="tab === ''" class="my-message">
      <div class="max-width-text">
        No has agregado productos a tu carrito
      </div>
    </div>

  </q-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import ShoppingCartSummary from 'components/shopping cart/CartSummary.vue';

export interface ShoppingCartProps {
  modelValue: boolean;
  // rightDrawerOpen: boolean;
}
const props = withDefaults(defineProps<ShoppingCartProps>(), {
  // modelValue: false,
  // rightDrawerOpen: false,
});

// const props = defineProps<{
//   modelValue: false,
//   rightDrawerOpen: false,
// }>();

const tab = ref('cartTab')

const emits = defineEmits<{
  ( event: 'toggleRightDrawer', value: boolean): boolean,
  ( event: 'showRightDrawer'): boolean,
  ( event: 'mostrarRightDrawer'): void,
}>();

const authNavigationMenu: EssentialLinkProps[] = [
  {
    title: 'Categorias',
    icon: 'category',
    meta: {
      slug: '/categories',
    }
  },
  {
    title: 'Ofertas',
    icon: 'mdi-sale',
    meta: {
      slug: '/discounts',
    }
  },
  {
    title: 'Recomendaciones',
    icon: 'recommend',
    meta: {
      slug: '/recommendations',
    }
  },
  {
    title: 'Notificaciones',
    icon: 'notifications',
    meta: {
      slug: '/my-notifications',
    }
  },
  {
    title: 'Valoraciones',
    icon: 'stars',
    meta: {
      slug: '/my-valuations',
    }
  }
];
</script>

<style lang="scss" scoped>
  .q-tab-panel {
    padding: 0;
  }

  .q-list {
    padding-right: 10px;
  }
</style>
