<script>
    import Container from '$component/Container.svelte';
</script>

<header id="header" class="header">
    <Container class="header-container">
        <button class="burger">
            <span />
            <span />
            <span />
        </button>
    </Container>
</header>

<style lang="scss">
    $class: '.header';
    #{$class} {
        .burger {
            background-color: red;
            width: 40px; height: 40px;
        }
    }
</style>