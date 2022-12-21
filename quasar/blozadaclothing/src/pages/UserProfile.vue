<template>
  <q-page class="row items-center justify-evenly" style="max-width: 1100px; margin: 0 auto;">
    <div class="col-12 col-md-10 col-lg-10" v-bind:class="$q.screen.lt.sm ? 'q-py-md' : 'q-pa-xl'">
      <div class="text-center">
        <p style="font-size: 30px; margin: 0 0 2px 0;">Completar perfil</p>
        <p class="text-grey-8" style="font-size: 0.875rem; font-weight: 400;">Completa y asegúrate que tus datos sean correctos</p>
      </div>
          <div class="row justify-center align-center">
            <div class="col-xs-12">
              <div class="q-py-sm">

                    <q-form
                      @submit.prevent="submitForm"
                      ref="formularioPerfil"
                      greedy
                      class="q-gutter-lg">

                        <q-card-section class="q-gutter-md">

                          <EntryBlock
                            v-model="formData.first_name"
                            label="Nombres"
                            field_type="text"
                            required
                          />

                          <EntryBlock
                            v-model="formData.first_surname"
                            label="Primer apellido"
                            field_type="text"
                            required
                          />

                          <EntryBlock
                            v-model="formData.second_surname"
                            label="Segundo apellido (Opcional)"
                            field_type="text"
                          />

                          <EntryBlock
                            v-model="formData.birthdate"
                            label="Fecha de nacimiento"
                            field_type="date"
                          />

                          <EntryBlock
                            v-model="formData.phone_number"
                            label="Número de celular"
                            field_type="tel"
                            required
                          />

                          <div class="flex justify-end">
                            <q-btn no-caps type="submit" color="primary" label="Guardar"/>
                          </div>
                        </q-card-section>

                    </q-form>
              </div>
            </div>
          </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useQuasar, event, date} from 'quasar'
import {useRouter, useRoute} from 'vue-router'
// import {api, axios} from 'boot/axios'
import EntryBlock from 'components/Inputs/EntryBlock.vue';

// import {useAuthStore} from 'stores/auth'
import {useContextStore} from 'stores/SiteContextStore'

// const authStore = useAuthStore()

const $q = useQuasar()

const siteContext = useContextStore()
const router = useRouter()
const route = useRoute()
siteContext.current_page = route.path

const {stopAndPrevent} = event

const formData = ref({
  first_name: '',
  first_surname: '',
  second_surname: '',
  birthdate: '',
  phone_number: '',
})

const submitResult = ref([])
const responseStatus = ref(false)
const responseMessage = ref('Error: ')

// const emailPattern = /^(?=[a-zA-Z0-9@.%+-]{6,254}$)[a-zA-Z0-9.%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
// const datePattern = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
// let fecha_convertida = ref('');

// const isValidEmail = (val: string) => {
//   if (!!val) {
//     return emailPattern.test(val) || 'La dirección email no tiene formato correcto';
//   } else {
//     return 'Correo electrónico obligatorio'
//   }
// }
//
// let isValidDate = (val: string) => {
//   if (!!val && val !== '') {
//     /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
//     if (!val.match(datePattern)) {
//       return 'La fecha no tiene formato'
//     } else {
//       /* Comprobar los días del mes */
//       const day = parseInt(val.split('/')[0]);
//       const month = parseInt(val.split('/')[1]);
//       const year = parseInt(val.split('/')[2]);
//       const monthDays = new Date(year, month, 0).getDate();
//       if (day > monthDays) {
//         return 'La fecha es inválida'
//       }
//       /* Comprobar que la fecha no sea superior a la actual*/
//       const timeStamp = Date.now();
//       const currentDate = date.formatDate(timeStamp, 'DD/MM/YYYY');
//       const diferencia = date.getDateDiff(val, currentDate, 'days');
//
//       if (diferencia > 0 ) {
//         return 'La fecha no puede ser superior a la actual'
//       }
//       //return 'Fecha válida'
//       //fecha_convertida.value = date.formatDate(date.buildDate({ year, month, day}), 'YYYY/MM/DD');
//     }
//   } else {
//     return 'El campo es requerido'
//   }
// }

// let convertDate = (val: string) => {
//   const day = parseInt(val.split('/')[0]);
//   const month = parseInt(val.split('/')[1]);
//   const year = parseInt(val.split('/')[2]);
//
//   return date.formatDate(date.buildDate({ year, month, day}), 'YYYY/MM/DD');
// }

// const myLocale = {
//   /* starting with Sunday */
//   days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
//   daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
//   months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
//   monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
//   firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
//   format24h: true,
//   pluralDay: 'dias'
// }

const showNotification = (
  message: string,
  color: string,
  actions: {
    label: string;
    color: string;
    handler: () => void }[] | undefined) => {
  $q.notify({
        message: message,
        color: color,
        actions: actions
  })
}

const showLoadingBar = (message: string) => {
  $q.loading.show({
    message: message
  })
}

const submitForm = () => {
  // formData.value.user = authStore.firebaseUserData.uid;

  // $q.loading.show({
  //       message: 'Estamos enviando la información. Espere un momento por favor...'
  // })

  // showLoadingBar('Estamos enviando la información. Espere un momento por favor...' )

  // api.put(`/profiles/my/profile/${authStore.firebaseUserData.uid}/`,
  axios.put(`https://api.empleo.testing.monterrey.gob.mx/api/v1/profiles/my/profile/${authStore.firebaseUserData.uid}/`, formData.value, {
    headers: {
      'Authorization': 'JWT ' + authStore.firebaseUserData.accessToken,
    }
  }).then((response: { status: string | number; }) => {
    if (response.status === 201) {
      responseStatus.value = true
      responseMessage.value = 'Respuesta enviada exitosamente!'
    } else {
      responseMessage.value = responseMessage.value + response.status
    }
    // $q.loading.hide()
    showNotification(response.status === 200 ? 'Perfil actualizado exitosamente' : 'Ocurrió un error: ' + response.status, response.status === 200 ? 'green' : 'red', [])
    setTimeout(() => {router.push(response.status === 201 || response.status === 200 ? '/inicio' : '/')},1000)
      }).catch((error: string) => {
        showNotification('Ocurrió un error' + error, 'red', [
          { label: 'Aceptar', color: 'white', handler: () => { /* ... */ } }
        ])
    // $q.loading.hide()
      })
}

// import EntryBlock, { EntryBlockProps } from 'components/Inputs/EntryBlock.vue';

// const userForm: EntryBlockProps[] = [
//   {
//     label: 'Nombre(s)',
//     modelValue: formData.value.first_name,
//     field_type: 'text',
//     help_text: '',
//     clean_name: ''
//   },
//     {
//     label: 'Apellidos',
//     modelValue: formData.value.first_surname,
//     field_type: 'text',
//     help_text: '',
//     clean_name: ''
//   },
//     {
//     label: 'Fecha de Nacimiento',
//     modelValue: formData.value.birthdate,
//     field_type: 'date',
//     help_text: '',
//     clean_name: ''
//   },
//     {
//     label: 'Número de celular',
//     modelValue: formData.value.phone_number,
//     field_type: 'text',
//     help_text: '',
//     clean_name: ''
//   },
// ];

</script>
