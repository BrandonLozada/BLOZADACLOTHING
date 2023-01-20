<template>
  <q-btn
    flat
    dense
    round
    icon="notifications"
    aria-label="Notificaciones"
  >
    <q-badge color="red" floating>2</q-badge>
  <q-tooltip :delay="3000">Mi cuenta</q-tooltip>

    <q-menu anchor="top middle" self="bottom middle" class="z-top"
            transition-show="jump-down"
            transition-hide="jump-up"
            style="width: 350px; min-width: 350px; height: auto;">
      <q-card class="my-card">

      </q-card>
    </q-menu>
  </q-btn>


</template>

<script setup lang="ts">
import { ref} from 'vue'
// import { useAuthStore } from 'stores/auth';
import {useQuasar} from 'quasar'
import {useRouter} from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const showPassword = ref(false);

const emailPattern = /^(?=[a-zA-Z0-9@.%+-]{6,254}$)[a-zA-Z0-9.%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})/;

// const authStore = useAuthStore()

const isValidEmail = (val: string) => {
  if (!!val && val !== '') {
    return emailPattern.test(val) || 'La dirección email no tiene formato correcto';
  } else {
    return 'Correo electrónico obligatorio'
  }
};

const isValidPassword = (val: string) => {
  if (!!val) {
    return passwordPattern.test(val) || 'La contraseña no cumple con los requisitos';
  } else {
    return 'Contraseña obligatoria'
  }
};

</script>

<style scoped></style>
