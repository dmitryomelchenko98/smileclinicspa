<template>
    <div class="contacts">
        <div class="contacts_container">
            <div class="container_headline">
                <h1>Контакты</h1>
            </div>
            <div class="container_info">
                <span>email: smileclinic@mail.ru</span>
                <span>phone: +7-(918)-000-00-00</span>
                <span>phone: +7-(918)-000-11-11</span>
            </div>
            <div class="container_headline">
                <h1>На карте</h1>
                <span>г.Краснодар, ул Чекистов 1</span>
            </div>
            <div class="container_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.8371529477868!2d38.90096051580916!3d45.02823117044782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04ec2ec7bc997%3A0x60ed116a4a1fee55!2z0L_RgC4g0KfQtdC60LjRgdGC0L7QsiwgMSwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDg5!5e0!3m2!1sru!2sru!4v1590435731480!5m2!1sru!2sru" width="100%" height="300px" frameborder="0" style="border:0; overflow: hidden;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>  
    </div>    
</template>

<script>
export default {
    name: 'Contacts'
    
}
</script>

<style lang="scss" >
@import "../assets/mixin/_mixin.scss";

.contacts {
    grid-column: 1/2;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
    .contacts_container {
        background: white;
        height: 100%;
        box-shadow: 0 0px 25px 5px rgb(156, 154, 154);
        .container_headline {
            margin-left: 10%;
            h1 {
                @include headline();
                margin: 0;
                padding: 20px 0;
            }
            span {
                font-size: 24px;
                margin-bottom: 15px;
            }
        }
        .container_info {
            @include flex();
            flex-direction: column;
            align-items: flex-start;
            margin-left: 10%;
            span {
                font-size: 24px;
                margin-bottom: 15px;
            }
        }
        .container_map {
            border-radius: 15px;
            width: 80%;
            margin: 30px auto;
            overflow: hidden;
            border: 1px solid #000000;
        }
    }
}

</style>