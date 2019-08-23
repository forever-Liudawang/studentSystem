<template>
        
            <div class="listPage moment">
                <student-search></student-search>
                <student-table></student-table>
                <turn-page></turn-page>
            </div>
       
</template>

<script>
import studentSearch from "../components/studentList/studentSearch"
import studentTable from "../components/studentList/studentTable"
import turnPage from "../components/studentList/tuenPage"
export default {
        components:{
            studentSearch,
            studentTable,
            turnPage,
        }
}
</script>

<style>

</style>