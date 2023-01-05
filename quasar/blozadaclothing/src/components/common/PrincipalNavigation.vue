<template>
  <q-header reveal elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menú"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        B Lozada Clothing.
      </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>

<!--      Aqui va el boton del carrito de compras-->
<!--      También podemos poner el botón de cuenta-->
<!--      Y el de buscador también-->

    </q-toolbar>
  </q-header>

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
import { ref } from 'vue';
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
    title: 'Inicio',
    icon: 'home',
    meta: {
      slug: '/',
    }
  },
  {
    title: 'Categorias',
    icon: 'category',
    meta: {
      slug: '/categories',
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
    title: 'Inicio',
    caption: 'Un texto debajo solo como ejemplo y práctica',
    icon: 'home',
    meta: {
      slug: '/',
    }
  },
  {
    title: 'Categorias',
    icon: 'mail',
    meta: {
      slug: '/categories',
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
</script>
