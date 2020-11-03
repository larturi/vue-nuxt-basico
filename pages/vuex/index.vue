
<template>
  <div class="container">
    <h2 class="mb-3">Tareas</h2>

    <div class="row mb-4">
      <div class="col">
        <form @submit.prevent="agregarTarea(tarea)" class="form-inline">
          <input type="text" class="form-control" v-model="tarea">
          <b-button type="submit" class="btn btn-primary ml-2">Agregar</b-button>
        </form>
      </div>
    </div>

    <div class="row mt-3" v-for="item in tareas" :key="item.id">
      <div class="col">
        <p>{{ item.id }}</p>
      </div>
      <div class="col">
        <p>{{ item.nombre }}</p>
      </div>
      <div class="col">
        <b-button class="btn-sm btn-warning ml-3" :to="`/vuex/${item.id}`">Editar</b-button>
        <b-button @click="eliminarTarea(item)" class="btn-sm btn-danger ml-1">Eliminar</b-button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      tarea: ''
    }
  },
  computed: {
    ...mapState(['tareas'])
  },
  methods: {
    ...mapActions(['agregarTarea', 'eliminarTarea'])
  },
}
</script>
