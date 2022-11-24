<template>
  <div class="home">
    <!-- sets the value of 'filter' to the data from the emitted event ($event) -->
    <filternav @filterChange="filter = $event" :filter="filter" />
    <div v-if="projects.length">
        <!-- always use ID for key -->
        <!-- filters through computed method 'filteredProjects()' to REACTIVELY DISPLAY PROJECTS BASED ON 'filter' PROPERTY -->
        <div v-for="project in filteredProjects" :key="project.id">
          <singleproject :project="project" @delete="handleDelete" @complete="handleComplete" />
        </div>
    </div>
  </div>
</template>

<script>
import singleproject from '../components/singleproject.vue';
import filternav from '../components/filternav.vue';

export default {
  name: 'HomeView',
  components: {
    singleproject,
    filternav,
  },
  data() {
    return {
      projects: [],
      filter: 'all',
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err))
      .catch(err => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => {
        return project.id != id}
      );
    },
    handleComplete(id) {
      let proj = this.projects.find(project => {
        return project.id === id;
      });
      proj.complete = !proj.complete;
    },
  },
  computed: {
    filteredProjects() {
      switch (this.filter) {
        case 'completed':
          return this.projects.filter(project => project.complete);
        case 'ongoing':
          return this.projects.filter(project => !project.complete);
        default:
          return this.projects;
      }
    }
  }
}
</script>
