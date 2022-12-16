<template>
  <div class="q-py-lg">
    <!-- Entry Block -->
    <q-input
      dense
      outlined
      :label="label"
      :v-model="modelValue"
      :type="field_type"
      :hint="help_text"
      :name="clean_name"
      :rules="required ? [val => !!val || `Campo requerido` + `: ${help_text}`] : ''"
    />
  </div>
</template>

<script setup lang="ts">
export interface EntryBlockProps {
  label: string;
  modelValue?: never; // modelValue?: any;
  field_type?: string;
  help_text?: string;
  clean_name?: string;
  required?: string;
}
withDefaults(defineProps<EntryBlockProps>(), {
  label: '',
  field_type: 'text',
  help_text: '',
  // required: '',
});
</script>
