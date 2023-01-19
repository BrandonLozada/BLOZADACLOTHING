<template>
  <q-form
    @submit.prevent="submitForm"
    ref="formularioCuponPromocional"
    greedy
    class="q-gutter-lg">

      <EntryBlock
        v-model="coupon_code"
        label="Código de descuento (Opcional)"
        field_type="coupon"
        help_text="Los códigos no son válidos en las Ediciones especiales"
      />

      <div class="flex justify-center">
        <q-btn
          outline
          no-caps
          type="submit"
          color="secondary"
          class="full-width"
          label="Aplicar"/>
      </div>

  </q-form>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import EntryBlock from 'components/inputs/EntryBlock.vue';

const coupon_code = ref<string>('');

const submitForm = () => {
  const hola = 'tal'
}

</script>
