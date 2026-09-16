<template>
  <div class="fixed inset-0 z-10 overflow-scroll">
    <div class="flex px-4">
      <NuxtImg src="/img/flag-orpheus-top.svg" />
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
