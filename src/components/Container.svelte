<script>
</script>

<div class="container {$$props.class}">
    <slot />
</div>

<style lang="scss">
    $class: ".container";
    #{$class} {
        height: 100%;
        @include mediaQueryMin($breakpoint-xs) {
            margin: 0 auto;
            width: 100%;
        }
        @include mediaQueryMax($breakpoint-sm) {
            padding: 0 10px;
        }

        @include mediaQueryMin($breakpoint-sm) {
            width: 540px;
        }

        @include mediaQueryMin($breakpoint-md) {
            width: 700px;
        }

        @include mediaQueryMin($breakpoint-lg) {
            width: 930px;
        }

        @include mediaQueryMin($breakpoint-xl) {
            width: 1140px;
        }

        @include mediaQueryMin($breakpoint-xxl) {
            width: 1320px;
        }
    }
</style>
