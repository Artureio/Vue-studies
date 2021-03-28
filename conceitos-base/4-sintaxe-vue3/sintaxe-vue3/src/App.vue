<template>
    <div>
        <h1>Minha lista de tarefas</h1>
        <button @click="handleShowHideList()">
            Ver a lista
        </button>
<br>
        <input type="text"
        @keyup.enter="addTask"
        v-focus
        v-model="state.currentTask">

        <ul  v-if="state.showList">
            <li 
            @dblclick="complete(task)" 
            v-for="(task, index) in state.tasks" :key="`${task}-${index}`"
            :class="{'riscado': task.isDone}">
            {{task.name}}
            <button @click="remove(task)">&times;</button>
            </li>
        </ul>
        <p v-else>Lista de tarefas ocultas</p>
    </div>
</template>

<script>
import {reactive} from 'vue';
const focus = {
    inserted:(el) => {
        el.focus()
    }
}
export default{
    directives:{
        focus
    },
    setup(){
        const state = reactive({
            showList:false,
            currentTask:'',
            tasks:[
            {name:'Zerar o Vue', isDone: false},
            ]
        })

        function handleShowHideList(){
            state.showList = !state.showList
        }
        function addTask(){
            state.tasks.push({
                name: state.currentTask,
                isDone:false,
            });
            state.currentTask = '';
        }
        function complete(task){
            state.tasks = state.tasks.map(t => {
                if (t.name === task.name){
                    return{...t, isDone: !t.isDone}
                }
                return{...t}
            })
        }
        function remove(task){
            state.tasks = state.tasks.filter(t=>t.name !== task.name)
            }

        return{
            state,
            handleShowHideList,
            complete,
            remove,
            addTask,
        }
    }
}

</script>

<style>
    .riscado{
    text-decoration: line-through;
    }
    li{
    cursor: pointer;
    }
</style>