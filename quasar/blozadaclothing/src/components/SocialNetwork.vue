<template>
  <!--Botones de redes sociales -->
  <q-btn
    flat
    round
    dense
    :href="link"
    :icon="icon"
    target="_blank"
    class="q-mr-sm"
    size="md"
  >
    <q-tooltip :delay="3000">{{title}}</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
export interface SocialNetworksProps {
  title: string;
  icon: string;
  link: string;
}
withDefaults(defineProps<SocialNetworksProps>(),{
  icon: '',
  link: '#',
});
</script>
