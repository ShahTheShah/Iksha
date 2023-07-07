<script>
    import { onMount } from "svelte";

    let isVisible = false;
    onMount(() => {
        // isVisible = true;
        setTimeout(() => isVisible = true, 500);
    });
</script>

<div class="aboutus { isVisible ? 'visible' : '' }">
    <img class="aboutus_cloud aboutus_cloud--second" src="/images/cloud-2.png" alt="AboutUs Cloud number 2!" />
    <img class="aboutus_cloud aboutus_cloud--first" src="/images/cloud-1.png" alt="AboutUs Cloud number 1!" />
    <div class="aboutus-content">
        <img class="aboutus_table" src="/images/aboutus-table.png" alt="AboutUs Table!" />
        <a class="aboutus_link aboutus_link--about" href="/aboutus">
            <img src="/images/aboutus.png" alt="AboutUs!" />
        </a>
        <a class="aboutus_link aboutus_link--phone" href="tel:+7(961) 50-122-33">
            <img src="/icons/phone.svg" alt="AboutUs!" />
        </a>
    </div>
</div>

<style lang="scss">
    $class: '.aboutus';
    #{$class} {
        position: absolute;
        top: -10px; left: 0;
        width: 100vw;

        &.visible {
            #{$class} {
                &_cloud {
                    &--second {
                        left: -100%;
                    }
                    &--first {
                        right: -100%;
                    }
                }
                &-content {
                    top: 0;
                }
            }
        }

        &_link {
            position: absolute;
            bottom: 22%; left: calc(50% - 50px);
            display: block;
            aspect-ratio: 129 / 43;
            width: 100px;

            img {
                width: 100%; height: 100%;
                object-fit: cover;
            }

            &--phone {
                bottom: 9%;
                left: calc(50% - 17.5px);
                width: 35px; height: 35px;

            }
        }

        &_cloud {
            position: absolute;
            height: 150px;
            width: 55%;
            object-fit: fill;
            top: 0;
            z-index: 10;
            transition: all 2s ease;

            &--second {
                left: 0;
            }
            &--first {
                right: 0;
            }
        }
        &-content {
            position: absolute;
            top: calc(-240px * 290 / 260);
            left: calc(50% - 115px);
            width: 230px;
            transition: all 1s ease .2s;
            z-index: 12;
        }
        &_table {
            object-fit: contain;
            aspect-ratio: 260 / 290;
            width: 230px;
            // z-index: 10;
        }
    }
</style>