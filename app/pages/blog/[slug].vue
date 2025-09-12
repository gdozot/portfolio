<template>
    <div>
        We are inside a blog post: {{ route.params.slug }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>