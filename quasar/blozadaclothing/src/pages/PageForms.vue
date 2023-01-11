<template>
<!--  <q-layout>-->
    <div  class="row items-center justify-evenly" style="max-width: 1100px; margin: 0 auto;">
      <div class="col-12 col-md-10 col-lg-10" v-bind:class="$q.screen.lt.sm ? 'q-py-md' : 'q-pa-xl'">
        <div class="text-center">
          <p style="font-size: 30px; margin: 0 0 2px 0;">Completa el formulario</p>
          <p class="text-grey-8" style="font-size: 0.875rem; font-weight: 400;">Asegúrate que tus datos sean correctos</p>
        </div>
            <div class="row justify-center align-center">
              <div class="col-xs-12">
                <div class="q-py-sm">

<!--                  <router-view>-->

                    <UserForm v-if="this.$route.path === '/forms/userform'"/>
                    <UserForm1 v-if="this.$route.path === '/forms/userform1'"/>
                    <UserForm2 v-if="this.$route.path === '/forms/userform2'"/>
                    <UserForm3 v-if="this.$route.path === '/forms/userform3'"/>

<!--                  </router-view>-->


                </div>
              </div>
            </div>
      </div>
    </div>
<!--  </q-layout>-->
</template>

<script setup lang="ts">
import UserForm from 'components/forms/UserForm.vue';
import UserForm1 from 'components/forms/UserForm1.vue';
import UserForm2 from 'components/forms/UserForm2.vue';
import UserForm3 from 'components/forms/UserForm3.vue';
</script>
