<template>
  <q-footer reveal bordered class="bg-grey-8 text-white">

    <div class="footer-contenedor bg-grey-9 text-grey-10 qq-pa-md q-pt-xl">
      <div class="max-width q-mx-auto">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-3 col-lg-3 q-pa-md">
            <div>
              <a
              :href="'/'"
              title="B Lozada Clothing."
              >
                <q-avatar square size="70px" class="q-mr-sm">
                  <img src="/img/logos/spotify_logo.png" alt="B Lozada Clothing.">
                </q-avatar>
              </a>


            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="full-height q-pb-xl">
              <q-card-section horizontal>
                <q-card-section class="text-left text-green-6">
                  <EssentialLink
                    v-for="item in essentialLinks"
                    :key="item.title"
                    v-bind="item"
                  />
                </q-card-section>
              </q-card-section>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="full-height q-pb-xl">
              <q-card-section horizontal>
                <q-card-section class="text-green-6">
                  <EssentialLink
                    v-for="item in essentialLinks"
                    :key="item.title"
                    v-bind="item"
                  />
                </q-card-section>
              </q-card-section>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="full-height q-pb-xl">
              <q-card-section horizontal>
                <q-card-section>
                  <SocialNetworks
                    class="text-green-6"
                    v-for="item in socialNetworks"
                    :key="item.title"
                    v-bind="item"
                    size="lg"
                  />
                </q-card-section>
              </q-card-section>
            </div>
          </div>

        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">

import EssentialLink, {EssentialLinkProps} from 'components/EssentialLink.vue';
import SocialNetworks, {SocialNetworksProps} from 'components/SocialNetwork.vue';

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
  }
];

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
    title: 'Enlaces útiles',
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

// const footer: EssentialLinkProps[] = [
//   {
//     title: 'Atención al cliente',
//     caption: 'Ayuda: va con Atención a cliente, ' +
//              'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal',
//     meta: {
//       slug: '/contact-support',
//     }
//   },
//   {
//     title: 'Configuración',
//     caption: 'Cuenta: Inicio de sesión' +
//              'General: Tema, País o región, Traducción, Borrar historial ',
//     meta: {
//       slug: '/settings',
//     }
//   },
//   {
//     title: 'Ayuda',
//     caption: 'Ayuda: va con Atención a cliente, ' +
//              'Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal,' +
//              'Accesibilidad: Personas con debilidad visual, Daltonismo (Cambiar los colores, etc.)' +
//              'Inclusividad: Inclusión a personas, etc. (Buscar e incluir)',
//     meta: {
//       slug: '/help',
//     }
//   },
//   {
//     title: 'Acerca de nosotros',
//     caption: 'Acerca de nosotros: ¿Quienes somos?, ¿Qué hacemos? Emprendurismo -> Misión, Visión, Valores' +
//              'Contacto: Dirección de oficina' +
//              'Patrocinio, publicidad: Se mi proveedor' +
//              'Otra opción: Alguna otra opción',
//     icon: 'business_center',
//     meta: {
//       slug: '/about-us',
//     }
//   }
// ];

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


</script>
