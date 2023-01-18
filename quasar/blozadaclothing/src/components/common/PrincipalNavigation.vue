<template>
  <q-header elevated>

    <q-toolbar class="q-py-none justify-between">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menú"
        @click="toggleLeftDrawer"
      />

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
<!--          <SearchBar/>-->

          <AccountButton/>

          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menú"
            @click="toggleRightDrawer"
          />

          <q-btn
            flat
            dense
            round
            icon="mdi-cart"
            aria-label="Carrito"
            @click="$emit('update:toggleRightDrawer', $event.target.value)"
          />

        </div>

    </q-toolbar>

    <AnnouncementBanner
      message="Esto es una prueba de la beta B Lozada Clothing y puede tener errores. Si encuentras algún error, por favor repórtalo."
      short_message="Esto es la Beta deB Lozada Clothing"
      background_color="bg-orange"
      message_color="text-white"
    />

    <AnnouncementBanner
      message="💥¡VENTA!💥 Hasta un 20% de descuento en artículos seleccionados y envío gratis a partir de 999 pesos mxn 😎❤👀 [Animada]"
      background_color="bg-dark"
      message_color="text-white"
      animated
      link="https://www.youtube.com/"
    />

  </q-header>

  <ShoppingCart
    v-model="rightDrawerOpen"
  />

  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    show-if-above
  >
    <q-btn
      flat
      dense
      round
      class="q-ma-md fixed-top-right z-max text-grey-9"
      icon="close"
      aria-label="Menú"
      @click="toggleLeftDrawer"
    />

    <q-list class="text-weight-regular">
      <q-item-label class="bg-grey-3 q-py-lg"
        header
      >
        Hola Brandon
      </q-item-label>

      <EssentialLink
        v-for="item in authNavigationMenu"
        :key="item.title"
        v-bind="item"
      />

      <q-separator></q-separator>

      <q-item-label
        header
        class="text-grey-9"
      >
        Mis accesos
      </q-item-label>

      <EssentialLink
        v-for="item in myNavigationMenu"
        :key="item.title"
        v-bind="item"
      />

      <q-separator></q-separator>

      <EssentialLink
        v-for="item in especialNavigationMenu"
        :key="item.title"
        v-bind="item"
      />

      <q-separator></q-separator>

      <q-item class="absolute-bottom full-width justify-center bg-white q-list--bordered text-grey-9">
        <SocialNetworks
          v-for="item in socialNetworks"
          :key="item.title"
          v-bind="item"
        />
      </q-item>

    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import {ref, computed, onUpdated} from 'vue';
// import SearchBar from 'components/common/SearchBar.vue';
// import NotificationButton from 'components/common/NotificationButton.vue';
import AnnouncementBanner from 'components/common/AnnouncementBanner.vue';
import AccountButton from 'components/common/AccountButton.vue';
import ShoppingCart from 'components/common/ShoppingCart.vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import SocialNetworks, { SocialNetworksProps } from 'components/SocialNetwork.vue';

const socialNetworks: SocialNetworksProps[] = [
  {
    title: 'Instagram',
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com/'
  },
  {
    title: 'YouTube',
    icon: 'mdi-youtube',
    link: 'https://www.youtube.com/channel/UCONlIZwwZcCQCbrhSEDgQjw'
  },
  {
    title: 'Facebook',
    icon: 'mdi-facebook',
    link: 'https://es-la.facebook.com/'
  }
];

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

const noAuthNavigationMenu: EssentialLinkProps[] = [
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
  }
];

const myNavigationMenu: EssentialLinkProps[] = [
  {
    title: 'Favoritos',
    icon: 'favorite',
    meta: {
      slug: '/my-favorites',
    }
  },
  {
    title: 'Guardados',
    icon: 'book',
    meta: {
      slug: '/my-bookmarks',
    }
  },
  {
    title: 'Compras',
    icon: 'shopping_bag',
    meta: {
      slug: '/my-purchases',
    }
  },
  {
    title: 'Lista de deseos',
    icon: 'collections_bookmark',
    meta: {
      slug: '/my-wishlists',
    }
  }
];

const especialNavigationMenu: EssentialLinkProps[] = [
  {
    title: 'Atención al cliente',
    icon: 'contact_support',
    meta: {
      slug: '/contact-support',
    }
  },  {
    title: 'Configuración',
    icon: 'settings',
    meta: {
      slug: '/settings',
    }
  },
  {
    title: 'Ayuda',
    icon: 'help',
    meta: {
      slug: '/help',
    }
  }
];

const myProfileNavigationMenu: EssentialLinkProps[] = [
  {
    title: 'Inicio',
    icon: 'home',
    meta: {
      slug: '/',
    }
  },
  {
    title: 'Mi perfil',
    icon: 'person',
    meta: {
      slug: '/my-profile',
    },
    children: [
      {
        title: 'Datos personales',
        icon: 'business',
        meta: {
          slug: '/personal-information',
        }
      },
      {
        title: 'Direcciones',
        icon: 'home',
        meta: {
          slug: '/my-addreses',
        }
      },
      {
        title: 'Mis formas de pago',
        icon: 'payments',
        meta: {
          slug: '/my-payments',
        }
      }
    ]
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
  // return leftDrawerOpen.value;
}

const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
  return rightDrawerOpen.value;
}

// const emits = defineEmits<{
//   ( event: 'toggleRightDrawer', value: boolean): boolean,
//   ( event: 'showRightDrawer'): boolean,
// }>();
</script>
