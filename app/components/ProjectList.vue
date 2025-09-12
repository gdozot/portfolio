<template>
    <div>
        <p class="mb-10">
            Take a look at my GuitHub projects!
        </p>
        <section v-if="pending">Loading...</section>
        <section v-else-if="error">Something went wrong... Try again!</section>
        <section v-else="">
            <ul class="grid grid-cols-1 gap-4">
                <li v-for="repository in repositories" :key="repository.id"
                    class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 mono-font">
                    <a :href="repository.html_url" target="_blank">
                        <div class="flex items-center justify-between">
                            <div class="font-semibold text-sm">{{ repository.name }}</div>
                            <div>{{ repository.stargazers_count }} ★</div>
                        </div>
                        <p class="text-sm">{{ repository.description }}</p>
                    </a>
                </li>

            </ul>
        </section>
    </div>

</template>

<script setup lang="ts">
interface RepositoryItem {
    id: number,
    html_url: string,
    name: string,
    description: string,
    stargazers_count: number
}

const { data, error, pending } = await useFetch('https://api.github.com/users/gdozot/repos');

const repositories = computed(() => (data.value as Array<RepositoryItem>).filter(repo => repo.description).sort((a, b) => b.stargazers_count - a.stargazers_count));
</script>