<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          B Lozada Clothing.
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          authNavigationMenu
        </q-item-label>

        <EssentialLink
          v-for="item in authNavigationMenu"
          :key="item.title"
          v-bind="item"
        />

        <q-separator></q-separator>

        <q-item-label
          header
        >
          Mis accesos - myNavigationMenu
        </q-item-label>

        <EssentialLink
          v-for="item in myNavigationMenu"
          :key="item.title"
          v-bind="item"
        />

        <q-separator></q-separator>

        <q-item-label
          header
        >
          especialNavigationMenu
        </q-item-label>

        <EssentialLink
          v-for="item in especialNavigationMenu"
          :key="item.title"
          v-bind="item"
        />

        <q-separator></q-separator>

        <q-item-label
          header
        >
          essentialLinks
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-separator></q-separator>

        <q-item-label
          header
        >
          myProfileNavigationMenu
        </q-item-label>

        <EssentialLink
          v-for="item3 in myProfileNavigationMenu"
          :key="item3.title"
          v-bind="item3"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import NavigationMenu from 'components/common/NavigationMenu.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const authNavigationMenu: EssentialLinkProps[] = [
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
    caption: 'Un texto debajo solo como ejemplo y práctica',
    icon: 'favorite',
    meta: {
      slug: '/my-favorites',
    }
  },
  {
    title: 'Guardados',
    caption: 'Favoritos y Guardados pueden ser el mismo, ' +
              'ya que ya se encuentra Lista de deseos',
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
    caption: 'Ayuda: va con Atención a cliente, ' +
      'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal',
    icon: 'contact_support',
    meta: {
      slug: '/contact-support',
    }
  },  {
    title: 'Configuración',
    caption: 'Cuenta: Inicio de sesión' +
             'General: Tema, País o región, Traducción, Borrar historial ',
    icon: 'settings',
    meta: {
      slug: '/settings',
    }
  },
  {
    title: 'Ayuda',
    caption: 'Ayuda: va con Atención a cliente, ' +
      'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal,' +
      'Accesibilidad: Personas con debilidad visual, Daltonismo (Cambiar los colores, etc.)' +
      'Inclusividad: Inclusión a personas, etc. (Buscar e incluir)',
    icon: 'help',
    meta: {
      slug: '/help',
    }
  }
];

const footer: EssentialLinkProps[] = [
  {
    title: 'Atención al cliente',
    caption: 'Ayuda: va con Atención a cliente, ' +
             'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal',
    meta: {
      slug: '/contact-support',
    }
  },
  {
    title: 'Configuración',
    caption: 'Cuenta: Inicio de sesión' +
             'General: Tema, País o región, Traducción, Borrar historial ',
    meta: {
      slug: '/settings',
    }
  },
  {
    title: 'Ayuda',
    caption: 'Ayuda: va con Atención a cliente, ' +
             'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal,' +
             'Accesibilidad: Personas con debilidad visual, Daltonismo (Cambiar los colores, etc.)' +
             'Inclusividad: Inclusión a personas, etc. (Buscar e incluir)',
    meta: {
      slug: '/help',
    }
  },
  {
    title: 'Acerca de nosotros',
    caption: 'Acerca de nosotros: ¿Quienes somos?, ¿Qué hacemos? Emprendurismo -> Misión, Visión, Valores' +
             'Contacto: Dirección de oficina' +
             'Patrocinio, publicidad: Se mi proveedor' +
             'Otra opción: Alguna otra opción',
    icon: 'business_center',
    meta: {
      slug: '/about-us',
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
        icon: 'location_home',
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

// Redes sociales (Pueden ser solo iconos debajo del logo del sitio)
    // Facebook
    // Twitter - opcional
    // YouTube - opcional
    // Instagram
// Blog
    // Noticias
// Contacto
    // Oficina AX3 SAS
    // Campestre 303
    // Casa Blanca San Ángel, N.L. C.P. 66475
    // Celular: (+52) 818-025-1208 = href tel:+528180251208
// Chat
    // Messenger
// Enlaces (Directo a la página final)
    // Atención al cliente
    // Configuración
    // Ayuda
    // Acerca de nosotros (Emprendurismo -> Misión, Visión, Valores)
    // Contacto
    // Patrocinio

// Aviso de privacidad | Transparencia
// Seguido de la empresa dueña o marca de la pagina, Copyright (R) 2023. Mty, NL, México
// Developed by Brandon Lozada in Quasar <3 (liga a LinkedIn: https://www.linkedin.com/in/brandon-lozada/)

// Uso de Cookies y caché, (rastreo y seguimiento de datos)
// Me gusta el aviso de abajo
// https://www.videojet.mx/mx/homepage/resources/glossary/product-tracking-traceability/product-tracking.html

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
