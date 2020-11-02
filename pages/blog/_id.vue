<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-body">
        <h1>Articulo {{ $route.params.id }}</h1>
        <p>Autor: {{ articulo.nombreAutor }}</p>
        <h3 class="text-info">{{ articulo.title }}</h3>
        <p>{{ articulo.body }}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {

    }
  },
  async created() {

  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id);
      const articulo = res.data;

      const resAutor = await axios.get('https://jsonplaceholder.typicode.com/users/' + articulo.userId);
      articulo.nombreAutor = resAutor.data.name;

      return {articulo};
    } catch (error) {
      return {error: error}
    }
  },
}
</script>
