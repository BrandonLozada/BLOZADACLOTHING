<template>
  <!-- meta | Para los que dirigen a páginas que no contienen hijas -->
  <q-item
    clickable
    v-ripple
    v-if="!children && !link"
    :to="meta.slug"
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

  <!-- children | Para los que contienen y que se despliegan las páginas hijas -->
  <q-expansion-item
    switch-toggle-side
    v-if="children"
    :label="title"
    default-opened
  >
    <q-item
      v-for="elemento in children"
      :key="elemento.id"
      :to="elemento.meta.slug"
      class="q-pl-xl"
      clickable
      v-ripple
    >
      <q-item-section
        v-if="elemento.icon"
        avatar>
        <q-icon :name="elemento.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ elemento.title }}</q-item-label>
        <q-item-label caption>{{ elemento.caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>

  <!-- link | Los que mandan a referencia externa -->
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
</template>

<script setup lang="ts">
// Comprobar más el de meta y luego replicar para children
// Agregar el children
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  meta?: MetaProps;
  children?: EssentialLinkProps[];
  // meta?: {
  //   slug: string;
  // };
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  // meta: '',
  // slug: '',
  // link: '#',
  icon: '',
});

export interface MetaProps {
  slug: string;
}

// export interface ChildrenProps {
//   EssentialLinkProps: EssentialLinkProps
// }

</script>
