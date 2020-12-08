<template>
    <div class="products" v-if="products && products.length">
        <ProductPage
            v-for="(product,index) in products" :key="product.id"
            :product="product"
            :index="index"
            @addNewProduct="addProduct"
            @disBtn="disBtn"
        />
    </div>
</template>

<script>
import ProductPage from '@/components/ProductPage'
export default {
    props:{
        products:{
            type: Array,
            default:[]
        }
    },
    components:{
        ProductPage
    },
    methods:{
        disBtn(id){
            this.$emit('disBtn',id)
        },
        addProduct(newProduct){
            this.$emit('addNewProduct',newProduct)
        }
    }
}
</script>

<style>
    .products{
        display: flex;
        justify-content: space-evenly;
    }
</style>