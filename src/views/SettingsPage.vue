<script setup>
import { ref } from 'vue';
import useAPI from '@/composables/useAPI';

const { instance } = useAPI()

const empFirstName = ref('')
const empLastName = ref('')
const empUserName = ref('') 
const empTitle = ref('')
const empQuote = ref('')

const addEmployee = async() => {
    const { data } = await instance.post('api/employee/create', {
        userName: empUserName.value,
        firstName: empFirstName.value,
        lastName: empLastName.value,
        title: empTitle.value,
        qoute: empQuote.value
    })

    var inputs = document.querySelectorAll('input')
    inputs.forEach(singleInput => singleInput.value='')
}
</script>

<template>
    <form class="mx-auto mt-10 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg" @submit.prevent="addEmployee">
        <input type="text" placeholder="userName" v-model="empUserName" class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"></input>
        <input type="text" placeholder="firstName" v-model="empFirstName" class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"></input>
        <input type="text" placeholder="lastName" v-model="empLastName" class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"></input>
        <input type="text" placeholder="title" v-model="empTitle" class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"></input>
        <input type="text" placeholder="qoute" v-model="empQuote" class="rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"></input>
        <button type="submit" class="bg-green-500 px-4 py-2">Submit</button>
    </form>
</template>