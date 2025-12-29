<script setup lang="ts">
    const props = defineProps<{ url: string }>()
    console.log(props.url);
</script>


<template>
    <div class="container">
            <div class="cube">
                <!--<div class="front"><img class="pixelated" src={{props.url}}></img></div>
                <div class="back"><img class="pixelated" src={{props.url}}></img></div>-->
            </div>
        </div>
</template>

<style scoped>
    .cube{
        width: 100px;
        height: 100px;
    }
</style>