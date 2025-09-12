<template>
    <div class="container mx-auto max-w-2xl">
        <TheHeader />
        <main class="p-2 mt-10">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>