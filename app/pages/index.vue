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
      <NuxtLink
        to="https://forms.hackclub.com/picture-this"
        class="opacity-100!"
      >
        <button
          class="py-3 px-5 text-white! bg-linear-to-r from-red-300 to-red-400 transition-all hover:-rotate-5 cursor-pointer hover:scale-105 rounded-2xl font-bold"
        >
          Submit now!
        </button>
      </NuxtLink>
      <p>*teens aged 13 to 18</p>
    </div>
  </div>

  <div class="mt-12 text-center">
    <EventCountdown datetime="2026-09-19T03:59:59.999Z" />
    <p class="mt-2 text-sm opacity-80">
      Deadline:
      <NuxtTime
        datetime="2026-09-19T03:59:59.999Z"
        month="long"
        day="numeric"
        year="numeric"
        hour="numeric"
        minute="2-digit"
        time-zone-name="short"
      />
    </p>
  </div>

  <div class="space-y-4 mt-12">
    <div class="bg-mist-800 rounded-2xl p-4 flex gap-4 items-center">
      <div>
        <h1>1.</h1>
      </div>
      <div>
        <h3>Build your project</h3>
        <p>
          Build an open-source coding project for 2.5 hours and track it with
          <NuxtLink to="https://hackatime.hackclub.com">Hackatime</NuxtLink>!
        </p>
      </div>
    </div>
    <div class="bg-mist-800 rounded-2xl p-4 flex gap-4 items-center">
      <div>
        <h1>2.</h1>
      </div>
      <div>
        <h3>Submit your project</h3>
        <p>
          <NuxtLink to="https://forms.hackclub.com/picture-this"
            >Fill out the form</NuxtLink
          >
          to submit your project.
        </p>
      </div>
    </div>
    <div class="bg-red-400 rounded-2xl p-4 flex gap-4 items-center">
      <div>
        <h1>3.</h1>
      </div>
      <div>
        <h3>Profit!</h3>
        <p>Get a SIGNED polaroid of zach in the mail :)</p>
      </div>
    </div>
  </div>

  <div class="mt-12 bg-mist-800 rounded-2xl p-4 space-y-4">
    <h3>FAQ</h3>
    <div>
      <p class="font-bold">Is this legit?</p>
      <p>
        Yeah! Hack Club has a history of running some
        <NuxtLink to="https://stardance.hackclub.com">cool</NuxtLink>,
        <NuxtLink to="https://campfire.hackclub.com">awesome</NuxtLink> and
        <NuxtLink to="https://midnight.hackclub.com">fun</NuxtLink> events.
        <NuxtLink to="https://hackclub.com"
          >You can learn more about Hack Club here.</NuxtLink
        >
      </p>
    </div>
    <div>
      <p class="font-bold">Who's running this?</p>
      <p>
        It's me,
        <NuxtLink to="https://hackclub.enterprise.slack.com/team/U07T7BUQMGF"
          >Emma!</NuxtLink
        >
      </p>
    </div>
    <div>
      <p class="font-bold">How long is this event running for?</p>
      <p>TWO DAYS! So get building projects before it's over!!</p>
    </div>
    <div>
      <p class="font-bold">What kind of project can I build?</p>
      <p>
        Anything you can ship to Hack Club! Make sure you ship a
        <b>functional</b> project. Make sure it's open source! If it's a
        website, make sure to host it somewhere.
      </p>
    </div>
    <div>
      <p class="font-bold">What kind of picture will I be getting?</p>
      <p>
        You'll get a one-of-a-kind, signed, Polaroid I-Type picture shot on a
        Polaroid Flip camera. We'll send it over lettermail :)
      </p>
    </div>
  </div>

  <div class="mt-12 pb-6">
    <div class="flex justify-center gap-2">
      <NuxtLink to="https://hackclub.com/privacy-and-terms"
        >Privacy & terms</NuxtLink
      >
    </div>
  </div>
</template>
