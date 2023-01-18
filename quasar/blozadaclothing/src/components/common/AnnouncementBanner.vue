<template>
<!--  <q-banner dense v-bind:class="`${background_color} ` + $q.screen.lt.md ? ' q-py-xs' : ' '">-->
  <q-banner dense v-bind:class="$q.screen.lt.md ? background_color + ' q-py-xs'  : '' + background_color">

    <a class="my-link" :href="link">
      <div class="max-width-content ">
        <div
          v-html="message"
          class="my-markup-text anim"
          v-bind:class="message_color"
        />
      </div>
    </a>
  </q-banner>
</template>

<script setup lang="ts">
export interface AnnouncementBannerProps {
  message: string;
  message_color?: string;
  background_color?: string;
  // icons?: IconsProps[];
  link?: string;
}
withDefaults(defineProps<AnnouncementBannerProps>(),{
  message_color: 'text-black',
  background_color: 'bg-yellow',
  link: '#',
  // icons: () => [],
});

// export interface IconsProps {
//   icon: number;
//   size: string;
//   color: string;
// }
</script>

<style lang="scss" scoped>

.my-markup-text {
  width: 100%;
  text-align: center;
  line-height: 1.8rem;
  white-space: nowrap;
  margin: 0 1rem;
}

.anim {
  display: block;
  padding-left: 100%;
  padding-right: 1rem;
  //width: -moz-max-content;
  width: max-content;
  //-webkit-animation: move 10s linear infinite;
  animation: slideMoveLeft 10s linear infinite;
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



//.anim {
//  animation: move 6s infinite;
//  position: relative;
//  right: -200px;
//}
//@keyframes move {
//  0% {
//    left: 100%;
//  }
//  100% {
//    left: -200px;
//  }
//}
</style>
