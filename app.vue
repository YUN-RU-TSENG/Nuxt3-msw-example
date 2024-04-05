<script setup lang="ts">
    import axios from 'axios'

    const { data, error } = await useAsyncData(
        async () => {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            return data
        },
        // { server: false }
    )
</script>

<template>
    <div>
        <h3>Title</h3>
        <div>data: {{ data }}</div>
        <div>error: {{ error }}</div>
    </div>
</template>
