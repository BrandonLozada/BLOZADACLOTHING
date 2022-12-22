<template>
  <!-- Entry Block -->
  <q-input
    dense
    outlined
    :label="label"
    :model-value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="field_type"
    :hint="help_text"
    :name="clean_name"
    :rules="required ? [val => !!val || `Campo requerido` + `: ${label}`] : ''"
    v-bind="$attrs"/>
</template>

<script setup lang="ts">
export interface EntryBlockProps {
  label: string;
  modelValue: never; // modelValue: any;
  field_type?: string;
  help_text?: string;
  clean_name?: string;
  required?: boolean;
}
withDefaults(defineProps<EntryBlockProps>(), {
  field_type: 'text',
  help_text: '',
  clean_name: '',
  required: false,
});

</script>
