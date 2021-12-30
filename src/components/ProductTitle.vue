<template>
  <div class="product">
    <h3>Product title</h3>
    <span class="price">Price: ${{ price }}</span>
    <input type="range" min="1" max="20" v-model="amount" step="1" />
    <div class="total-price row container">
      <div class="amount col-md-5">Amount: {{ amount }}</div>
      <div class="col-md-2"></div>
      <div class="total col-md-5">Total: ${{ totalPrice }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      amount: 1,
      price: 50,
    };
  },
  computed: {
    totalPrice: function () {
      return this.amount * this.price;
    },
  },
  name: "product-title",
};
</script>
<style scoped lang="scss">
.product {
  background-color: #878282;
  width: 50%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0 0 20px;
    font-weight: bold;
  }
  input {
    width: 80%;
    margin: 20px auto;
  }
  .price {
    color: #09080e;
    font-weight: bold;
  }
  .total-price {
    margin-top: 20px;
    .amount,
    .total {
      background-color: #eee;
      padding: 10px 20px;
      font-weight: bold;
      border-radius: 5px;
    }
  }
}
</style>
