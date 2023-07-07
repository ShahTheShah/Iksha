<script>
    import Container from '$component/Container.svelte';
    import Burger from '$component/Burger.svelte';


    // let menuIsOpen;

    // MenuIsOpen.subscribe(value => menuIsOpen = value);
</script>

<header id="header" class="header">
    <Container class="header-container">
        <Burger />
    </Container>
</header>

<style lang="scss">
    $class: '.header';
    #{$class} {
        position: absolute;
        top: 6%; left: 0;
        padding: 10px 0;
        width: 100vw;
        height: fit-content;
        z-index: 100;
    }
</style>