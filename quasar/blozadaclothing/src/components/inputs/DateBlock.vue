<template>
  <!-- Date Block -->
  <q-input v-if="field_type === 'birthdate'"
           dense
           outlined
           color="dark"
           :label="label"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           @update:modelValue="$refs.qDateProxy"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [val => !!val || `${label} es requerido`, isValidDate] : ''"
           v-bind="$attrs"
           mask="date"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          cover
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            color="dark"
            text-color="white"
            :model-value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
          >
            <div class="row items-center justify-end">
              <q-btn
                flat
                v-close-popup
                label="Listo"
                color="dark"
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
  <!-- Date Block -->
</template>

<script setup lang="ts">
export interface DateBlockProps {
  label: string;
  modelValue: never;
  field_type?: string;
  help_text?: string;
  required?: boolean;
}
withDefaults(defineProps<DateBlockProps>(), {
  field_type: 'birthdate',
  help_text: '',
  required: false,
});

const datePattern = /^(\d{4})(\/)(0[1-9]|1[012])\2(0[1-9]|[1-2]\d|3[01])$/

const isValidDate = (val: string) => {
  if (!!val && val !== '') {
    const result = val.match(datePattern)
    if (result) {
      const monthDays = new Date(parseInt(result[1]), parseInt(result[3]), 0).getDate();
      if (parseInt(result[4]) > monthDays) {
        return 'La fecha es inválida';
      }
    } else {
      return 'La fecha no tiene formato';
    }
  } else {
    return 'La fecha es requerida';
  }
};
</script>
