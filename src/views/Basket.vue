<template>
    <div>
        <table>
            <tr>
                <th>Артикул товара</th>
                <th>Наименование</th>
                <th>Общая стоимость</th>
                <th>Кол-во</th>
            </tr>
            <tr v-for="(prod,index) in basket" :key="index">
                <td>{{prod.id}}</td>
                <td>{{prod.title}}</td>
                <td>{{prod.cost}} $</td>
                <td>{{prod.count}} шт</td>
            </tr>
        </table>
        <div class="btnsBlock">
            <h1 @click="goodOrder">Оформить заказ</h1>
            <h1 @click="clearBasket">Очистить корзину</h1>
        </div>
    </div>
</template>

<script>
import Popup from '@/components/Popup'
import BasketJs from '@/JsFiles/BasketJs'

export default {
    data(){
        return{
            basket:[],
            isVisPopup:true
        }
    },
    components:{
        Popup
    },
    methods:{
        goodOrder(){
            if(this.basket.length > 0){
                alert('Заказ ушёл на обработку,вы будете перенаправлены на главную страницу!')
                this.$router.push({ path: '/vue-basket'})
            }
            else{
                alert('Корзина пуста,вы будете перенаправлены на главную страницу!')
                this.$router.push({ path: '/vue-basket'})
            }
        },
        clearBasket(){
            this.basket.splice(0,this.basket.length)
            alert('Корзина очищена,вы будете перенаправлены на главную страницу!')
            this.$router.push({ path: '/vue-basket'})
        }
    },
    mounted(){
        this.basket = BasketJs
    }
}
</script>

<style scoped>
    table {
        margin: auto;
        width: 70%;
        border-spacing: 0 10px;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
    }
    
    th {
        padding: 10px 20px;
        background: #9ed88c;
        color: #000000;
        border-right: 2px solid; 
        font-size: 0.9em;
    }

    th:last-child {
        border-right: none;
    }

    td {
        vertical-align: middle;
        padding: 10px;
        font-size: 14px;
        text-align: center;
        border-top: 2px solid #56433D;
        border-bottom: 2px solid #56433D;
        border-right: 2px solid #56433D;
    }

    td:first-child {
        border-left: 2px solid #56433D;
    }

    .btnsBlock{
        width: 50%;
        margin: auto;
        margin-top: 1%;
        display: flex;
        justify-content: space-around;
        border: solid 1px #c7c7c7;
        border-radius: 5px;
    }

    .btnsBlock h1{
        cursor: pointer;
        transition: 1s;
    }

    .btnsBlock h1:first-child:hover{
        font-size: 2.2em;
        color: rgb(68, 207, 75);
    }

    .btnsBlock h1:last-child:hover{
        font-size: 2.2em;
        color: rgb(231, 49, 49);
    }
</style>