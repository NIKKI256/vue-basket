<template>
    <div class="container" v-if="product">
        <img class="img_product" :src="require('@/assets/img/' + product.imgN)">
        <h2>{{index + 1}}</h2>
        <h2>{{product.title}}</h2>
        <h2>Цена {{product.cost}}$</h2>
        <h2><input type="number" v-model="product.count" @change="costProducts" ></h2>
        <button class="btn" v-if="product.count > 0" @click="addToBasket" :disabled="product.inBasket">Добавить в корзину</button>
        <h4 v-if="product.title == 'Папайя'">($25 за 3 шт)</h4>

        <Popup v-if="isVisPopup" @closePopup="isVisPopup=false">
            <div>
                <h2>Артикул: {{index + 1}}</h2>
                <h2>Наименование: {{product.title}}</h2>
                <h2>Кол-во: {{product.count}}$</h2>
                <h2>Общая стоимость: {{totalCost}}$</h2>
            </div>
        </Popup>
    </div>
</template>

<script>
import Popup from '@/components/Popup'

export default {
    data(){
        return{
            isVisPopup:false,
            cost:0,
            prdValue:3,
            totalCost:0
        }
    },
    props:{
        product:{
            type: Object,
            default: function () {
                return { }
            }
        },
        index:Number
    },
    components:{
        Popup
    },
    methods:{
        addToBasket(){
            this.costProducts()
            this.isVisPopup = !this.isVisPopup;
            this.$emit('disBtn',this.product.id)

            var newProduct = {
                id:Date.now(),
                title:this.product.title,
                cost:this.totalCost,
                count:this.product.count
            }

            this.$emit('addNewProduct',newProduct)
        },
        costProducts(){
            if(this.product.title == 'Папайя'){
            var twFv = 25
            
            if(this.product.count % this.prdValue == 0 && this.product.count >= this.prdValue){
                this.cost = (this.product.count / this.prdValue) * twFv
            }
            else{
                this.cost = this.cost + this.product.cost
            }
            this.totalCost = this.cost
            }
            else{
                this.totalCost = this.product.count * this.product.cost
            }
        }
    },
}
</script>

<style scoped>
    .container{
        padding: 5px;
        width: 300px;
        border: solid 1px rgb(228, 228, 228);
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(34, 34, 34, 0.5);
    }

    .img_product{
        max-height: 150px;
    }

    .btn{
        outline: none;
        cursor: pointer;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background: rgb(132, 226, 38);
        transition: box-shadow 0.5s;
    }

    .btn:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>