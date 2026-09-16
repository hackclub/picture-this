<template>
  <div class="fixed inset-0 z-10 overflow-scroll">
    <div class="flex px-4 justify-between items-center">
      <NuxtLink to="https://hackclub.com">
        <NuxtImg src="/img/flag-orpheus-top.svg" />
      </NuxtLink>
      <NuxtLink
        class="pe-4"
        to="https://hackclub.enterprise.slack.com/archives/C0C208VFZLJ"
      >
        #picture-this on Slack
      </NuxtLink>
    </div>
    <div class="flex justify-center pt-15">
      <div class="container max-w-150">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
