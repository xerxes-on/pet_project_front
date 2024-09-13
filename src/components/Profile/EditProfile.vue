<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile.js'
import { formatDate } from 'compatx'

const profileStore = useProfileStore()
const user = profileStore.user.user
const profile_pic = user.profile_picture !== null ? user.profile_picture : 'src/assets/images/cat.jpg'

const isFlipped = ref(false)

const flipCard = () => {
    isFlipped.value = !isFlipped.value
}
</script>

<template>
    <section class="p-6 mb-6 h-96">
        <div :class="['flip-card-inner', { flipped: isFlipped }]">
            <!-- Front Side (Profile Header) -->
            <div class="flip-card-front bg-orange p-6 rounded-2xl shadow-md w-96 h-full">
                <div class="flex justify-between">
                    <div class="flex">
                        <img :src="profile_pic" alt="User Avatar" class="w-32 h-32 rounded-full object-cover mr-6" />
                        <div>
                            <h1 class="text-2xl font-bold">{{ user.name }}</h1>
                            <p class="text-gray-600">
                                Gender: <span>{{ user.gender == null ? 'Not Specified' : user.gender }} </span>
                            </p>
                            <p class="text-gray-600">
                                Joined in: <span>{{ formatDate(user.created_at) }}</span>
                            </p>
                            <p class="text-gray-600">
                                Date of Birth: <span>{{ user.date_of_birth == null ? 'No data' : formatDate(user.date_of_birth) }} </span>
                            </p>

                            <p class="mt-2 text-gray-600">
                                Favorite Genres: <br />
                                <span v-for="(category, index) in user.genres" :key="index">{{ category.category_name }}</span>
                            </p>
                        </div>
                    </div>
                    <!-- Favorite Book -->
                    <div>
                        <img src="../../assets/images/home7.svg" alt="Favorite Book" class="w-32 h-48 rounded-lg object-cover" />
                    </div>
                </div>
                <!-- Edit Profile Button -->
                <div class="flex justify-end mt-4">
                    <button @click="flipCard" class="bg-dark_blue text-white px-4 py-2 rounded-lg">Edit Profile</button>
                </div>
            </div>

            <!-- Back Side (Edit Form) -->
            <div class="flip-card-back bg-orange p-6 rounded-2xl shadow-md w-96 h-fit">
                <h2 class="text-xl font-bold mb-4">Edit Profile</h2>
                <form>
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" v-model="user.name" id="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div class="mb-4">
                        <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
                        <input type="text" v-model="user.gender" id="gender" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div class="mb-4">
                        <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input type="date" v-model="user.date_of_birth" id="dob" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div class="flex justify-end space-x-4 mt-4">
                        <button @click="flipCard" type="button" class="bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
                        <button type="submit" class="bg-dark_blue text-white px-4 py-2 rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card-inner.flipped {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>
