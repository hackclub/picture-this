<script setup>
const props = defineProps({
  datetime: {
    type: [String, Number, Date],
    required: true,
  },
})

const targetTime = computed(() => new Date(props.datetime).getTime())
const remainingMs = ref(0)
const isMounted = ref(false)

let intervalId

const updateRemaining = () => {
  remainingMs.value = Math.max(targetTime.value - Date.now(), 0)
}

const timeParts = computed(() => {
  const totalSeconds = Math.floor(remainingMs.value / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [
    { label: 'days', value: String(days) },
    { label: 'hours', value: String(hours).padStart(2, '0') },
    { label: 'minutes', value: String(minutes).padStart(2, '0') },
    { label: 'seconds', value: String(seconds).padStart(2, '0') },
  ]
})

onMounted(() => {
  isMounted.value = true
  updateRemaining()
  intervalId = setInterval(updateRemaining, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="mt-4 space-y-3">
    <p class="font-bold text-lg">Time left to submit:</p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
      <div
        v-for="part in timeParts"
        :key="part.label"
        class="bg-mist-800 rounded-2xl px-4 py-3"
      >
        <p class="text-3xl font-bold tabular-nums">
          {{ isMounted ? part.value : '--' }}
        </p>
        <p class="text-sm opacity-80 uppercase tracking-wide">
          {{ part.label }}
        </p>
      </div>
    </div>
  </div>
</template>
