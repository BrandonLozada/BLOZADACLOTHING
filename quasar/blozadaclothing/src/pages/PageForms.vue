<template>
  <div  class="row items-center justify-evenly" style="max-width: 1100px; margin: 0 auto;">
    <div class="col-12 col-md-10 col-lg-10" v-bind:class="$q.screen.lt.sm ? 'q-py-md' : 'q-pa-xl'">
      <div class="text-center">
        <p style="font-size: 30px; margin: 0 0 2px 0;">Completa el formulario</p>
        <p class="text-grey-8" style="font-size: 0.875rem; font-weight: 400;">Asegúrate que tus datos sean correctos</p>
      </div>
          <div class="row justify-center align-center">
            <div class="col-xs-12">
              <div class="q-py-sm">

                <ProfileForm v-if="this.$route.path === '/forms/profile'"/>
                <PersonalDataForm v-if="this.$route.path === '/forms/data'"/>
                <SecurityForm v-if="this.$route.path === '/forms/security'"/>
                <AddressForm v-if="this.$route.path === '/forms/address'"/>
                <PaymentsMethodsForm v-if="this.$route.path === '/forms/payment-method'"/>

              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileForm from 'components/forms/ProfileForm.vue';
import PersonalDataForm from 'components/forms/PersonalDataForm.vue';
import SecurityForm from 'components/forms/SecurityForm.vue';
import AddressForm from 'components/forms/AddressForm.vue';
import PaymentsMethodsForm from 'components/forms/PaymentsMethodsForm.vue';
</script>
