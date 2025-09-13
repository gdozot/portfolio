<template>
    <header class="flex justify-between items-center mt-5">
        <div class="flex items-center space-x-12">
            <div>
                <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-300">{{ config.public.logoName }}
                </NuxtLink>
            </div>
            <Menu />
        </div>
        <ClientOnly>
            <ColorModeSelector />
        </ClientOnly>
    </header>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
</script>