<template>
  <q-header elevated>

    <AnnouncementBanner
      v-for="item in betaAnnouncement"
      :key="item.message"
      v-bind="item"
    />

    <q-toolbar class="q-py-none justify-between">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menú"
        @click="leftDrawerOpen = !leftDrawerOpen"
      >
        <q-tooltip :delay="3000" anchor="bottom middle" self="top left">Menú</q-tooltip>
      </q-btn>

      <q-toolbar-title>
        <q-btn
          to="/"
          title="B Lozada Clothing"
          :ripple="false"
          class="q-px-none q-pr-sm-sm no-border no-border-radius no-box-shadow no-outline no-shadow no-hovereable"
        >
          <img
            class=""
            style="max-width: 170px; max-height: 80px;"
            height="90"
            width="300"
            src="/img/logos/spotify_logo.png"
            alt="B Lozada Clothing."
          />
        </q-btn>
      </q-toolbar-title>

        <div class="q-gutter-x-sm row items-center no-wrap">
          <!-- <SearchBar/> -->

          <AccountButton/>

          <NotificationButton/>

          <q-btn
            flat
            dense
            round
            icon="mdi-shopping"
            aria-label="Checkout"
            @click="toggleRightDrawer"
          >
            <q-tooltip :delay="1000" anchor="bottom middle" self="top right">Carrito</q-tooltip>
            <q-badge color="red" floating>4</q-badge>
          </q-btn>

        </div>

    </q-toolbar>

    <AnnouncementBanner
      v-for="item in animatedAnnouncement"
      :key="item.message"
      v-bind="item"
    />

  </q-header>

  <NavigationMenu
    v-model="leftDrawerOpen"
  />

  <ShoppingCart
    v-model="rightDrawerOpen"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';
// import SearchBar from 'components/common/SearchBar.vue';
import NotificationButton from 'components/common/NotificationButton.vue';
import AnnouncementBanner, { AnnouncementBannerProps } from 'components/banners/AnnouncementBanner.vue';
import AccountButton from 'components/common/AccountButton.vue';
import ShoppingCart from 'components/shopping cart/ShoppingCart.vue';
import NavigationMenu from 'components/common/NavigationMenu.vue';

const betaAnnouncement: AnnouncementBannerProps[] = [
  {
    message: 'Esto es una prueba de la beta B Lozada Clothing y puede tener errores. Si encuentras algún error, por favor repórtalo.',
    short_message: 'Esto es la Beta B Lozada Clothing',
    background_color: 'bg-orange',
    message_color: 'text-white',
    type: 'beta'
  }
];

const animatedAnnouncement: AnnouncementBannerProps[] = [
  {
    message: '💥¡VENTA!💥 Hasta un 20% de descuento en artículos seleccionados y envío gratis a partir de 999 pesos mxn 😎❤👀',
    background_color: 'bg-dark',
    message_color: 'text-white',
    link: 'https://www.youtube.com/',
    type: 'animated'
  }
];

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
  return rightDrawerOpen.value;
}
</script>
