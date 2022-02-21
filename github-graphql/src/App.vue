<template>
  <div id="app">
    <div class="container" @click="showOptions = false">
      <Select 
        :options="searchRepository" 
        :showOptions="showOptions" 
        :search="true" 
        :selectValue="selectValue" 
        :searchValue="searchValue"
        @select="changeSelected" 
        @show="changeShowOptions"
        @input="changeSearchValue"
      />
      <List 
        class="list-issue"
        type="issue" 
        :list="ISSUES" 
        :hasData="HAS_ISSUES"
      />
    </div>
  </div>
</template>

<script>
import Select from './components/Select'
import List from './components/List'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    List, Select
  },
  data() {
    return {
      selectValue: 'Выберите репозиторий',
      searchValue: "",
      selectID: "",
      showOptions: false
    }
  },
  computed: {
    ...mapGetters(['REPOSITORIES', 'ISSUES','HAS_ISSUES']),
    searchRepository() {
      let result = this.REPOSITORIES
      if (this.searchValue === "") {
        return result
      } 
      if (this.searchValue) {
        result = result.filter(el => {
          const repo = el.name
          if (repo.includes(this.searchValue)) {
            return el
          }
        })
      } 
      return result
    }
  },
  methods: {
    ...mapActions(['GET_REPOSITORIES', 'GET_ISSUES']),
    changeSelected(option) {
      this.selectValue = option.name
      this.selectID = option.id
      this.GET_ISSUES(option.name.replace("octocat/", ""))
    },
    changeShowOptions(value) {
      this.showOptions = value
    },
    changeSearchValue(value) {
      this.searchValue = value
    }
  },
  mounted() {
    this.GET_REPOSITORIES()
  }
}
</script>


