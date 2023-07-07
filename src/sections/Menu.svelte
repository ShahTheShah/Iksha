<script>
    import Container from "$component/Container.svelte";
    // import Burger from "$component/Burger.svelte";
    import { isOpen as MenuIsOpen } from "$store/Menu.js";

    let isOpen;

    MenuIsOpen.subscribe(value => isOpen = value);


</script>

<aside class="menu { isOpen ? 'open' : '' }">
    <Container class="menu-container">
        <ul class="menu-list">
            <li class="menu-list_item">БРОНИРОВАНИЕ</li>
            <li class="menu-list_item">КАРТА ТЕРРИТОРИИ</li>
            <li class="menu-list_item">О НАС</li>
            <li class="menu-list_item">РАЗВЛЕЧЕНИЯ</li>
            <li class="menu-list_item">ГАЛЕРЕЯ</li>
        </ul>
    </Container>
</aside>

<style lang="scss">
    $class: '.menu';
    #{$class} {
        position: absolute;
        z-index: 15;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: #fff url(/images/grass-bg.png) center center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        transition: all .50s ease-in-out;
        opacity: 0;
        user-select: none;
        pointer-events: none;

        &.open {
            opacity: 1;
            user-select: inherit;
            pointer-events: inherit;
        }

        :global(.container) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-list {
            padding: 20px;
            width: 80%;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: #FFEFE4;
        }
    }
</style>