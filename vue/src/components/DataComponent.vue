<template>
  <div>
    <h2>Данные из базы</h2>
    
    <div>
      <button @click="fetchStaff">Загрузить сотрудников</button>
      <button @click="fetchProducts">Загрузить продукты</button>
    </div>

    <div v-if="loading">Загрузка...</div>
    
    <div v-else>
      <!-- Сотрудники -->
      <div v-if="staff.length">
        <h3>Сотрудники:</h3>
        <div v-for="person in staff" :key="person.id">
          {{ person.name }} - {{ person.place_of_work }}
        </div>
      </div>

      <!-- Продукты -->
      <div v-if="products.length">
        <h3>Продукты:</h3>
        <div v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.product_type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DataComponent',
  data() {
    return {
      staff: [],
      products: [],
      orders: [],
      loading: false
    }
  },
  methods: {
    async fetchStaff() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3001/api/staff');
        this.staff = response.data;
      } catch (error) {
        console.error('Ошибка загрузки сотрудников:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Ошибка загрузки продуктов:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrders() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3001/api/orders');
        this.orders = response.data;
      } catch (error) {
        console.error('Ошибка загрузки заказов:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  mounted() {
    // Автоматически загружаем данные при монтировании
    this.fetchStaff();
    this.fetchProducts();
  }
}
</script>