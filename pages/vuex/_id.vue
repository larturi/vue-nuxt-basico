<template>
  <div class="container mb-4">
    <h2>Editar</h2>

    <div class="row mb-4">
      <div class="col">
        <form class="form-inline" @submit.prevent="editarTarea(tarea)">
          <input type="text" class="form-control" v-model="tarea.nombre">
          <b-button type="submit" class="btn btn-primary ml-2">Editar</b-button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { db } from '@/plugins/firebase';
import { mapState, mapActions } from 'vuex';
export default {
  fetch({store, params}) {
    return db.collection('tareas').doc(params.id).get()
      .then(doc => {
        if(doc.exists) {
          let tarea = doc.data();
          tarea.id = doc.id;
          return store.commit('setTareaIndividual', tarea)
        }
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed: {
    tarea: {
      get() {
        return {
          nombre: this.$store.state.tarea.nombre,
          id: this.$store.state.tarea.id
        }
      }
    }
  },
  methods: {
    ...mapActions(['editarTarea'])
  },
}
</script>
