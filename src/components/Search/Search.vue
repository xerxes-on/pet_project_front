<script setup>
import { ref } from 'vue'

// Sample group data
const groups = [
    {
        id: 1,
        name: 'Group Name (Official or Unofficial)',
        members: 234324,
        activeHours: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae Donec viverra.',
        image: 'https://img.freepik.com/free-photo/young-happy-students-studying-together-library_23-2148205098.jpg',
    },
    {
        id: 2,
        name: 'Group Name (Official or Unofficial)',
        members: 154324,
        activeHours: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae Donec viverra.',
        image: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25064.jpg',
    },
    {
        id: 3,
        name: 'Group Name (Official or Unofficial)',
        members: 154320,
        activeHours: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae Donec viverra.',
        image: 'https://img.freepik.com/free-photo/people-meeting-office-1_53876-13861.jpg',
    },
    {
        id: 4,
        name: 'Group Name (Official or Unofficial)',
        members: 194324,
        activeHours: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae Donec viverra.',
        image: 'https://img.freepik.com/free-photo/young-man-having-video-call-with-teacher_23-2148882530.jpg',
    },
]

// Sample tags
const tags = [
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4',
    'Tag 5',
    'Tag 6',
    'Tag 7',
    'Tag 8',
    'Tag 9',
    'Tag 10',
    'Tag 11',
    'Tag 12',
    'Tag 13',
    'Tag 14',
    'Tag 15',
    'Tag 16',
    'Tag 17',
    'Tag 18',
    'Tag 19',
    'Tag 20',
]

const searchQuery = ref('')

const searchGroups = () => {
    console.log(`Searching for: ${searchQuery.value}`)
}
</script>

<template>
    <div class="min-h-screen bg-primary p-6">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-6 w-full">
            <span></span>
            <h1 class="text-3xl font-bold text-center">Groups</h1>
            <button class="bg-light_blue text-white py-1 pl-3 rounded-2xl hover:bg-dark_blue">Create <i class="m-2 fa-solid fa-circle-plus"></i></button>
        </div>

        <!-- Search Section -->
        <div class="mb-8 flex justify-center">
            <input v-model="searchQuery" type="text" class="w-1/2 p-3 rounded-2xl border-none shadow-xl focus:border-blue-300" placeholder="Group Name, Book Name, Author Name" />
            <button class="ml-4 bg-light_blue text-white px-6 py-3 rounded-2xl hover:bg-dark_blue" @click="searchGroups">Search Group</button>
        </div>

        <div class="grid grid-cols-12 gap-8 ml-4">
            <!-- Featured Groups Section -->
            <div class="col-span-8">
                <h2 class="text-2xl font-semibold text-dark_blue mb-4">Featured Groups</h2>

                <div v-for="group in groups" :key="group.id" class="mb-6 bg-orange p-3 rounded-2xl shadow-md flex">
                    <!-- Group Image -->
                    <div class="w-24 h-28 bg-gray-100 rounded-md overflow-hidden mr-4">
                        <img :src="group.image" alt="Group Image" class="w-full h-full object-cover" />
                    </div>

                    <!-- Group Details -->
                    <div>
                        <h3 class="text-xl font-semibold">{{ group.name }}</h3>
                        <p class="text-gray-500">{{ group.members }} Members</p>
                        <p class="mt-2 text-gray-600">{{ group.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Browse Groups by Tags Section -->
            <div class="col-span-4">
                <div class="bg-orange p-6 rounded-2xl shadow-md">
                    <h2 class="text-xl font-semibold mb-4">Browse Groups by Tags</h2>
                    <div class="grid grid-cols-4 gap-2 bg-white p-4 rounded-2xl">
                        <button v-for="tag in tags" :key="tag" class="bg-light_blue w-fit py-2 px-4 rounded-2xl text-sm text-white hover:bg-dark_blue">
                            {{ tag }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*:focus {
    outline: none;
}
</style>
