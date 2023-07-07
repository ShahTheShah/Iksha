<script>
    import Container from "$component/Container.svelte";

    let date_1, date_2, count;

</script>

<section class="welcome">
    <div class="welcome-bg">
        <img class="welcome_house" src="/images/house.png" alt="Boy!" />
        <img class="welcome_plant welcome_plant--first" src="/images/plant-1.png" alt="Boy!" />
        <img class="welcome_plant welcome_plant--second" src="/images/plant-2.png" alt="Boy!" />
        <img class="welcome_boy" src="/images/boy.png" alt="Boy!" />
        <img class="welcome_boombox" src="/images/boombox.png" alt="Boy!" />
        <img class="welcome_ball" src="/images/ball.png" alt="Boy!" />
        <img class="welcome_fridge" src="/images/fridge.png" alt="Boy!" />
    </div>
    <Container class="welcome-container">
        <form class="welcome-form" on:submit={_e => _e.preventDefault()}>
            <label class="welcome-form_label" for="in">
                Заезд { date_1 ? `- ${date_1}` : ''}
                <input on:change={_e => date_1 = _e.target.value} id="in" name="in" class="welcome-form_input" type="date">
            </label>
            <label class="welcome-form_label" for="out">
                Выезд { date_2 ? `- ${date_2}` : ''}
                <input on:change={_e => date_2 = _e.target.value} id="out" name="out" class="welcome-form_input" type="date">
            </label>
            <label class="welcome-form_label" for="count">
                Количество человек { count > 0 ? `- ${count}` : '' }
                <input on:input={_e => count = _e.target.value} id="count" name="count" class="welcome-form_input" type="number">
            </label>
            <button  class="welcome-form_submit" type="submit">Посмотреть</button>
        </form>
    </Container>
</section>

<style lang="scss">
    $class: '.welcome';
    #{$class} {
        position: relative;
        background: #fff url(/images/bg-1.png) center center;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        &-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 5;
        }

        :global(.container) {
            position: relative;
            padding-bottom: 80px;
            z-index: 10;

            display: flex;
            flex-direction: column;
            justify-content: end;
        }
        &_house {
            position: absolute;
            top: 50%;
            transform: translateY(-70%);
            left: calc(50% - 150px * 394 / 344);
            aspect-ratio: 394 / 344;
            height: 300px;
            object-fit: contain;
            width: auto;
        }
        &_plant {
            position: absolute;
            top: 50%;
            &--first {
                left: 0;
            }
            &--second {
                right: 0;
            }
        }
        &_boy {
            position: absolute;
            bottom: 10%; left: 22%;
            width: 70%; height: auto;
        }
        &_boombox {
            position: absolute;
            bottom: 10%; left: 0;
            width: 25%; height: auto;
        }
        &_ball {
            position: absolute;
            bottom: 0; left: 0;
            width: 25%; height: auto;
        }
        &_fridge {
            position: absolute;
            bottom: 0; right: 0;
            width: 25%; height: auto;
        }

        &-form {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            gap: 10px;
            width: 80%;
            label {
                display: flex;
                justify-content: space-between;

                padding: 10px;
                border: 1px solid black;
                border-radius: 30px;
                background-color: rgba(208, 201, 201, 0.71);
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                width: 100%;
                font-family: MontserratAlternates;
                font-weight: 500;

                input {
                    width: 0; height: 0;
                    overflow: hidden;
                }
            }

            &_submit {
                padding: 10px;
                border: 1px solid black;
                border-radius: 30px;
                background-color: rgba(12, 242, 89, 0.50);
                color: white;
                font-family: MontserratAlternates;
                font-weight: 600;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            }
        }
    }
</style>