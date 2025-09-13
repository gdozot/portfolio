<template>
    <div class="container mx-auto max-w-2xl">
        <TheHeader />
        <main class="p-2 mt-10">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: '%s',
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
    ]
})
</script>

<style>
body {
    font-family: 'Roboto';
}

body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>