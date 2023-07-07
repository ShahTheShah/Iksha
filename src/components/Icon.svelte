<script>
    // import { onMount } from "svelte";

</script>

<svg class="icon {$$props.class}" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href='assets/icons/sprite.svg#{$$props.name}'  />
</svg>

<style lang="scss">
    $class: '.icon';
    #{$class} {
        fill: $blue;
        // stroke: red;
        aspect-ratio: 1 / 1;
        width: 50px;
    }
</style>