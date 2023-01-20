<template>
  <q-banner v-if="type === 'normal'" dense class="text-center"
            v-bind:class="$q.screen.lt.md ? background_color + ' q-py-xs'  : '' + background_color">
    <a class="my-link" :href="link" v-bind:class="message_color">
      <span class="gt-sm" v-html="message"/>
      <span v-if="short_message" class=" lt-md" v-html="short_message"/>
    </a>
  </q-banner>
  <q-banner v-else-if="type === 'beta'" dense class="q-ma-none q-py-none text-center"
            v-bind:class="background_color">
    <div v-bind:class="message_color">
      <span class="gt-sm" v-html="message"/>
      <span v-if="short_message" class=" lt-md" v-html="short_message"/>
    </div>
  </q-banner>
  <q-banner v-else-if="type === 'animated'" dense class="my-banner"
            v-bind:class="$q.screen.lt.md ? background_color + ' q-py-xs'  : '' + background_color">
    <a class="my-link" :href="link">
      <div v-html="message"
           class="anim"
           v-bind:class="message_color"
      />
    </a>
  </q-banner>
</template>

<script setup lang="ts">
export interface AnnouncementBannerProps {
  message: string;
  short_message?: string;
  message_color?: string;
  background_color?: string;
  type?: string;
  link?: string;
}
withDefaults(defineProps<AnnouncementBannerProps>(),{
  message_color: 'text-black',
  background_color: 'bg-yellow',
  type: 'normal',
  link: '#',
});
</script>

<style lang="scss" scoped>
.my-banner {
  overflow: hidden;
  position: relative;
  justify-content: center;
}
.anim {
  display: block;
  padding-left: 100%;
  padding-right: 1rem;
  width: max-content;
  animation: slideMoveLeft 10s linear infinite;
}
@keyframes slideMoveLeft {
  100% {
    transform: translateX(-100%);
  }
}
</style>
