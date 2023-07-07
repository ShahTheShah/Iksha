<script>
    import Link from '$component/Link.svelte';

    export let links = [];

</script>

<nav class="nav {$$props.class}">
    <ul class="nav-list {$$props.class}-list">
        {#each links as { name, href }, index (index)}
            <li class="nav-list-item {$$props.class}-list-item">
                <Link class="{$$props.class}_link" {href}>
                    {name}
                </Link>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">

</style>