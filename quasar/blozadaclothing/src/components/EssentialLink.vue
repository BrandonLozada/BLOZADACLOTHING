<template>
  <!-- essentialLinks | Los que mandan a referencia externa-->
  <q-item v-if="link"
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <!-- Para los que dirigen a páginas -->
  <q-item v-if="meta.slug"
    clickable
    v-ripple
    :key="id"
    :to="meta.slug"
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      {{ title }}
    </q-item-section>
  </q-item>

  <!-- Para los que se despliegan las páginas hijas -->
  <q-expansion-item v-if="children"
    switch-toggle-side
    :key="id"
    :label="title"
    default-opened
  >
    <q-item
      v-for="item in children"
      :key="item.id"
      :to="item.meta.slug"
      class="q-pl-xl"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
        {{ item.title }}
      </q-item-section>
    </q-item>
  </q-expansion-item>

</template>

<script setup lang="ts">
// Comprobar más el de meta y luego replicar para children
// Agregar el children
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  meta?: {
    slug: string;
  };
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  // meta: '',
  slug: '',
  link: '',
  icon: '',
});
</script>
