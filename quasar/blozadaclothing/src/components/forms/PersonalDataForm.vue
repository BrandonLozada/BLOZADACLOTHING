<template>
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

  <div>{{formData}}</div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {api, axios} from 'boot/axios'
// import {useAuthStore} from 'stores/auth'
import {useQuasar, event, date} from 'quasar'
import {useRouter, useRoute} from 'vue-router'
import {useContextStore} from 'stores/SiteContextStore'
import EntryBlock from 'components/inputs/EntryBlock.vue';

// const authStore = useAuthStore()

const $q = useQuasar()

const siteContext = useContextStore()
const router = useRouter()
const route = useRoute()
siteContext.currentPage = route.path

const {stopAndPrevent} = event
const submitResult = ref([])
const responseStatus = ref(false)
const responseMessage = ref('Error: ')

const formData = ref({
  first_name: '',
  first_surname: '',
  second_surname: '',
  birthdate: '',
  phone_number: '',
})

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

  //put o post, wherever
  // api.post(`/profiles/my/profile/${authStore.firebaseUserData.uid}/`,
  api.post(`/profiles/my/profile/`, formData.value, {
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

</script>
