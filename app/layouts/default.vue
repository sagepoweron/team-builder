<script setup lang="ts">
    import Navigation from '~/components/Navigation.vue';

</script>

<template>
    <div>
        <Navigation></Navigation>
        <main>
            <slot>

            </slot>
        </main>
    </div>
</template>