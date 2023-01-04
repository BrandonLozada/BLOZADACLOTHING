<template>
  <q-footer reveal bordered class="bg-grey-11 text-white">

    <div class="justify-center bg-grey-10 text-grey-9 q-pa-md q-py-xl">
      <div class="max-width-content q-mx-auto bg-grey-8">

        <div class="row">

          <div class="bg-grey-7 col-6 col-md-3">
            <div class="full-height q-pb-xl">

              <q-card-section class="text-left text-green-6">
                <div class="bg-white">
                  <a
                    :href="'/'"
                    title="B Lozada Clothing."
                  >
                    <q-img
                      class="bg-grey-5"
                      style="max-width: 200px; max-height: 100px;"
                      height="100"
                      width="200"
                      fit="contain"
                      src="/img/logos/spotify_logo.png"
                      alt="B Lozada Clothing."
                    />
                  </a>
                </div>
              </q-card-section>

            </div>
          </div>

          <div class="bg-grey-6 col-12 col-md-3">
            <div class="full-height q-pb-xl">

              <q-card-section class="text-left text-green-6">
                <div class="text-subtitle2">COMPAÑIA</div>
                <ul class="q-pl-none" style="list-style-type: none;">
                  <template
                    v-for="(item, index) in company"
                    :key="index">
                    <li class="q-px-none">
                      <a :href="item.meta.slug" target="_blank">{{item.title}}</a>
                    </li>
                  </template>
                </ul>
              </q-card-section>

            </div>
          </div>

          <div class="bg-grey-5 col-12 col-md-3">
            <div class="full-height q-pb-xl">

                <q-card-section class="text-green-6">
                  <div class="text-subtitle2">ENLACES ÚTILES</div>
                  <ul class="q-pl-none" style="list-style-type: none;">
                    <template
                      v-for="(item, index) in usefulLinks"
                      :key="index">
                      <li class="q-px-none">
                        <a :href="item.meta.slug" target="_blank">{{item.title}}</a>
                      </li>
                    </template>
                  </ul>
                </q-card-section>

            </div>
          </div>

          <div class="bg-grey-4 col-12 col-md-3">
            <div class="full-height q-pb-xl">

              <SocialNetworks
                class="text-green-6"
                v-for="item in socialNetworks"
                :key="item.title"
                v-bind="item"
                size="lg"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import {EssentialLinkProps} from 'components/EssentialLink.vue';
import SocialNetworks, {SocialNetworksProps} from 'components/SocialNetwork.vue';

// Redes sociales
    // Facebook
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
// Enlaces útiles (Directo a la página final)
    // Atención al cliente
    // Configuración
    // Ayuda
// Compañia
    // Acerca de
    // Contacto: Nosotros (Emprendurismo -> Misión, Visión, Valores)
    // Contacto
    // Patrocinio

// Aviso de privacidad | Transparencia
// Seguido de la empresa dueña o marca de la pagina, Copyright (R) 2023. Mty, NL, México
// Developed by Brandon Lozada in Quasar <3 (liga a LinkedIn: https://www.linkedin.com/in/brandon-lozada/)

// Uso de Cookies y caché, (rastreo y seguimiento de datos)
// Me gusta el aviso de abajo
// https://www.videojet.mx/mx/homepage/resources/glossary/product-tracking-traceability/product-tracking.html

const company: EssentialLinkProps[] = [
  {
    title: 'Acerca de',
    //    Acerca de: Condiciones de uso, privacidad, Datos personales, Publicidad, Legal
    meta: {
      slug: '/about-us',
    }
  },
  {
    title: 'Contacto',
    //    Contacto: Dirección de oficina' Patrocinio, Publicidad (Se mi proveedor)
    meta: {
      slug: '/contact',
    }
  },
  {
    title: 'Emprendedurismo',
    //    Emprendedurismo: ¿Quienes somos?, ¿Qué hacemos? 0-> Misión, Visión, Valores
    //    Alguna otra opción
    meta: {
      slug: '/entrepreneurship',
    }
  }
];

  // {
  //   title: 'Enlaces útiles',
  //   //    Accesibilidad: Personas con debilidad visual, Daltonismo (Cambiar los colores, etc.)
  //   //    Inclusividad: Inclusión a personas, etc. (Buscar e incluir)'
  //   meta: {
  //     slug: '/help',
  //   }
  // }

const usefulLinks: EssentialLinkProps[] = [
  {
    title: 'Ayuda',
    //    Ayuda: Todoo lo relacionado con la ayuda como la Atención a cliente
    meta: {
      slug: '/help',
    }
  },
  {
    title: 'Atención al cliente',
    //    Atención al cliente: es parte de la ayuda pero este link va directo a la atención del cliente
    meta: {
      slug: '/contact-support',
    }
  },
  {
    title: 'Configuración',
    //    Configuración:  Cuenta -> Inicio de sesión' +
    //                   General -> Tema, País o región, Traducción, Borrar historial
    meta: {
      slug: '/settings',
    }
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




</script>
