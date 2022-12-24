<template>
  <q-page-container class="row items-center justify-evenly" style="max-width: 1100px; margin: 0 auto;">
    <div class="col-12 col-md-10 col-lg-10" v-bind:class="$q.screen.lt.sm ? 'q-py-md' : 'q-pa-xl'">
      <div class="text-center">
        <p style="font-size: 30px; margin: 0 0 2px 0;">Completar perfil</p>
        <p class="text-grey-8" style="font-size: 0.875rem; font-weight: 400;">Completa y asegúrate que tus datos sean correctos</p>
      </div>
          <div class="row justify-center align-center">
            <div class="col-xs-12">
              <div class="q-py-sm">

                <q-page>
                  <router-view />
                </q-page>

              </div>
            </div>
          </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">

</script>
