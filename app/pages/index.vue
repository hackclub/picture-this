<template>
  <div class="text-center gap-2">
    <h1 class="italic">Picture this!</h1>
    <p class="mt-3">
      code for <span class="bg-red-400 px-2 py-1 rounded-2xl">2.5 hours</span>,
      get a
      <span class="bg-red-400 px-2 py-1 rounded-2xl">
        signed polaroid of zach
      </span>
    </p>
    <NuxtImg src="/img/zach_2x.png" class="mx-auto mt-12 rotate-7" />
  </div>
  <div class="flex justify-center mt-8">
    <div class="text-center flex gap-2 flex-col">
      <NuxtLink to="https://forms.hackclub.com" class="opacity-100!">
        <button
          class="py-3 px-5 bg-linear-to-r from-red-300 to-red-400 transition-all hover:-rotate-5 cursor-pointer hover:scale-105 rounded-2xl font-bold"
        >
          Submit now!
        </button>
      </NuxtLink>
      <p>Teens aged 13 to 18</p>
    </div>
  </div>
</template>
