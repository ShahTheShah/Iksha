<script>
    import { isOpen as MenuIsOpen } from "$store/Menu.js";
</script>

<button class="burger" on:click={() => MenuIsOpen.update((value) => !value)}>
    <span />
    <span />
    <span />
</button>

<style lang="scss">
    $class: ".burger";
    #{$class} {
        position: relative;
        width: 40px;
        height: 25px;
        background-color: transparent;

        span {
            position: absolute;
            left: 4px;
            display: block;
            width: calc(100% - 4px - 4px);
            height: 4px;
            background-color: white;
            border-radius: 10px;

            &:nth-child(1) {
                top: 0;
            }
            &:nth-child(2) {
                top: calc(50% - 2px);
            }
            &:nth-child(3) {
                bottom: 0;
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: -8px;
                width: 4px;
                height: 4px;
                background-color: #fff;
                border-radius: 10px;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
