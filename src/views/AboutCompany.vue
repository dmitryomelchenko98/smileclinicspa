<template>
    <div class="about_company">
        <div class="about_company_container">
            <div class="container_headline">
                <h1>О компании</h1>              
            </div>
            <div class="container-inform">
                <p>
                    В стоматологии Smile Clinic осуществляется весь спектр стоматологических услуг. Врачи клиники занимаются лечением кариеса и заболеваний десен, осуществляют профессиональную гигиену полости рта и отбеливание зубов (в том числе ZOOM4)
                </p>
                <p>
                    Стоматологи-хирурги и имплантологи берутся за удаление зубов любой сложности и проводят установку зубных имплантов.
                </p>
                <p>
                    Стоматологи-ортопеды занимаются съемным и несъемным протезированием, установкой коронок и виниров.
                </p>
                <p>
                    Лечение предоставляется как взрослым пациентам, так и детям. В клинике принимают: стоматолог-терапевт, детский стоматолог, стоматолог-хирург, имплантолог, стоматолог-ортопед, стоматолог-гигиенист, косметолог.
                </p>
                <p>
                    Прием в клинике ведется на платной основе. При оплате услуг принимается как наличный, так и безналичный расчет.
                </p>
            </div>
        </div>  
    </div>    
</template>

<script>
export default {
    name: 'AboutCompany'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.about_company {
    grid-column: 1/2;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
    .about_company_container {
        height: 100%;
        background: white;
        box-shadow: 0 0px 25px 5px rgb(156, 154, 154);
        .container_headline {
            margin-left: 10%;
            h1 {
                @include headline();
                margin: 0;
                padding-top: 20px;
            }
        }
        .container-inform {
            width: 80%;
            margin: 20px auto;
            p {
                margin: 10px 0;
            }
        }
    }
}
</style>