import { db } from '@/plugins/firebase.js';

export const state = () => ({
  tareas: '',
  tarea: ''
});

export const mutations = {
  setTareas(state, payload) {
    state.tareas = payload;
  },
  setTarea(state, payload) {
    state.tareas.push(payload);
  },
  deleteTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas.splice(index, 1);
  },
  updateTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas[index].nombre = payload.nombre;
  },
  setTareaIndividual(state, payload) {
    state.tarea = payload;
  }
};

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    return db.collection('tareas').get()
    .then(queryData => {
     const tareas = [];
     queryData.forEach(element => {
       let tarea = element.data();
       tarea.id = element.id;
       tareas.push(tarea);
     });

     return commit('setTareas', tareas);
    })
    .catch(error => {
      console.error(error);
    });
  },
  async agregarTarea({commit}, payload) {
    try {
      const doc = await db.collection('tareas').add({
        nombre: payload,
        fecha: new Date()
      });
      commit('setTarea', {nombre: payload, id: doc.id});
    } catch (error) {
      console.error(error);
    }
  },
  eliminarTarea({commit}, payload) {
    db.collection('tareas').doc(payload.id).delete()
      .then(() => {
        commit('deleteTarea', payload.id);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  editarTarea({commit}, payload) {
    db.collection('tareas').doc(payload.id).update({
      nombre: payload.nombre
    }).then(() => {
      commit('updateTarea', payload);
      this.app.router.push('/vuex');
    }).catch(error => {
      console.error(error);
    });
  }
};
