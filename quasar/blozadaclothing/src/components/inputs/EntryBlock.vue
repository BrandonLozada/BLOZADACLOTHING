<template>
  <!-- Entry Block -->
  <q-input v-if="field_type === 'text'"
           dense
           outlined
           color="dark"
           :label="label"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="text"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [val => !!val || `${label} es requerido`] : ''"
           v-bind="$attrs"
  />
  <q-input v-else-if="field_type === 'email'"
           dense
           outlined
           color="dark"
           :label="label"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="email"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [isValidEmail] : ''"
           v-bind="$attrs"
  />
  <q-input v-else-if="field_type === 'tel'"
           dense
           outlined
           color="dark"
           :label="label"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="tel"
           unmasked-value
           mask="### ### ####"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [val => !!val && val.length === 10 || `${label} es requerido`] : ''"
           v-bind="$attrs"
  />
  <q-input v-else-if="field_type === 'number'"
           dense
           outlined
           color="dark"
           :label="label"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="number"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [val => !!val || `${label} es requerido`] : ''"
           v-bind="$attrs"
  />
  <q-input v-else-if="field_type === 'url'"
           dense
           outlined
           color="dark"
           :label="label"
           prefix="https://"
           :model-value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="url"
           :hint="help_text"
           :name="label.toLowerCase().replace(' ', '_')"
           :rules="required ? [val => !!val || `${label} es requerido`] : ''"
           v-bind="$attrs"
  />
  <!-- Entry Block -->
  <!--"text" | "password" | "textarea" | "email" | "search" | "tel" | "file" | "number" | "url" | "time" | "date" | ...-->
</template>

<script setup lang="ts">
export interface EntryBlockProps {
  label: string;
  modelValue: never;
  field_type?: string;
  help_text?: string;
  required?: boolean;
}
withDefaults(defineProps<EntryBlockProps>(), {
  field_type: 'text',
  help_text: '',
  required: false,
});

const emailPattern = /^(?=[a-zA-Z0-9@.%+-]{6,254}$)[a-zA-Z0-9.%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

const isValidEmail = (val: string) => {
  if (!!val) {
    return emailPattern.test(val) || 'El correo electrónico no tiene formato correcto';
  } else {
    return 'Correo electrónico es requerido'
  }
}
</script>
