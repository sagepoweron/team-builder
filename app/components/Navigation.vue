<template>
    <nav>
        <div>
            <NuxtLink to="/"><strong>Team Builder</strong></NuxtLink>
            
        </div>
        <ul>
            <li><NuxtLink to="home">Home</NuxtLink></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #333;
        color: white;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>