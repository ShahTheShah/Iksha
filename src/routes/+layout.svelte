<script>
    import '$lib/vendors/app.scss';
    import Header from '$section/Header.svelte';
    import Menu from '$section/Menu.svelte';
    import { Body } from 'svelte-body';

    import { isOpen as MenuIsOpen } from "$store/Menu.js";

    let menuIsOpen;

    MenuIsOpen.subscribe(value => menuIsOpen = value);
</script>

<Body class="{menuIsOpen ? 'cropBody' : ''}" />

<Menu />
<Header />
<slot />

<style lang="scss">

</style>