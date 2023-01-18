<template>
  <q-banner v-if="animated" dense class="q-mx-none"
            v-bind:class="$q.screen.lt.md ? background_color + ' q-py-xs'  : '' + background_color">
    <a class="my-link" :href="link">
      <div class="max-width-content ">
        <div v-if="animated"
             v-html="message"
             class="my-markup-text anim"
             v-bind:class="message_color"
        />
      </div>
    </a>
  </q-banner>

  <q-banner v-else dense class="q-ma-none text-center"
            v-bind:class="$q.screen.lt.md ? background_color + ' q-py-xs'  : '' + background_color">
    <a class="my-link" :href="link" v-bind:class="message_color">
      <span class="gt-sm">{{ message }} </span>
      <span v-if="short_message" class="lt-md">
        {{ short_message }}
      </span>
    </a>
  </q-banner>
</template>

<script setup lang="ts">
export interface AnnouncementBannerProps {
  message: string;
  short_message?: string;
  message_color?: string;
  background_color?: string;
  animated?: boolean;
  link?: string;
}
withDefaults(defineProps<AnnouncementBannerProps>(),{
  message_color: 'text-black',
  background_color: 'bg-yellow',
  animated: false,
  link: '#',
});
</script>

<style lang="scss" scoped>
.my-markup-text {
  width: 100%;
  text-align: center;
  //line-height: 1.8rem;
  white-space: nowrap;
  margin: 0 1rem;
}

.anim {
  display: block;
  padding-left: 100%;
  padding-right: 1rem;
  //position: relative;
  //right: -200px;
  width: max-content;
  animation: move 10s linear infinite;
}

@keyframes move {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideMoveLeft {
  100% {
    transform: translateX(-100%);
  }
}
</style>
