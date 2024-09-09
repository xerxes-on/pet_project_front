<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile.js'
import { formatDate } from 'compatx'
import Input from '@/components/common/Input.vue'

const profileStore = useProfileStore()
const user = profileStore.user.user
const profile_pic = user.profile_picture !== null ? user.profile_picture : 'src/assets/images/cat.jpg'

const isFlipped = ref(false)

const flipCard = () => {
    isFlipped.value = !isFlipped.value
}
</script>

<template>
    <section class="mb-6 h-[32rem]">
        <div :class="['flip-card-inner', { flipped: isFlipped }]">
            <!-- Front Side (Profile Header) -->
            <div class="flip-card-front bg-orange p-6 rounded-2xl shadow-md w-96 h-full">
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <img :src="profile_pic" alt="User Avatar" class="h-64 w-48 rounded-2xl object-cover mr-6" />
                        <div>
                            <h1 class="text-2xl font-extra-light">Details</h1>
                            <p class="text-dark_blue font-extralight inline">Gender:</p>
                            <span class="mr-2">{{ user.gender == null ? 'Not Specified' : user.gender }} </span>
                            <br />
                            <p class="text-dark_blue inline">Date of Birth:</p>
                            <span>{{ user.date_of_birth == null ? 'No data' : formatDate(user.date_of_birth) }} </span>
                        </div>
                    </div>
                    <div class="p-2">
                        <h1>{{ user.name }}</h1>
                        <span>{{ user.username }}</span>
                        <div class="flex justify-between p-4 w-full">
                            <div class="bg-light_blue p-4 m-4 rounded-2xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <h2 class="font-bold text-2xl">100</h2>
                                <p class="text-dark_blue">Followers</p>
                            </div>
                            <div class="bg-light_blue p-4 m-4 rounded-2xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <h2 class="font-bold text-2xl">100</h2>
                                <p class="text-dark_blue">Followers</p>
                            </div>
                            <div class="bg-light_blue p-4 m-4 rounded-2xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <h2 class="font-bold text-2xl">100</h2>
                                <p class="text-dark_blue">Followers</p>
                            </div>
                        </div>
                        <h1 class="text-2xl font-extra-light">Details</h1>

                        <p class="text-dark_blue inline">Joined in:</p>
                        <span class="mr-4">{{ formatDate(user.created_at) }}</span>
                        <br />
                        <p class="mt-2 text-gray-600">
                            Favorite <span class="text-dark_blue text-lg">Genres</span>: <br />
                            <span v-for="(category, index) in user.genres" :key="index">{{ category.category_name }}</span>
                        </p>
                        <h1 class="text-2xl mt-2">My BookShelves</h1>
                        <div class="flex justify-between">
                            <div class="bg-dark_blue px-8 py-2 m-4 rounded-xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <p class="">Read</p>
                                <p class="text-xl">100</p>
                            </div>
                            <div class="bg-dark_blue py-2 px-4 m-4 rounded-xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <p class="">Reading</p>

                                <p class="text-xl">100</p>
                            </div>
                            <div class="bg-dark_blue py-2 px-4 m-4 rounded-xl shadow-2xl text-white flex flex-col justify-center items-center">
                                <p class="">Want to read</p>
                                <p class="text-xl">100</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h1 class="text-center text-xl py-5">My Favourite book</h1>
                        <img src="../../assets/images/home7.svg" alt="Favorite Book" class="w-44 rounded-lg object-cover" />
                        <button @click="flipCard" class="m-5 bg-dark_blue text-white px-4 py-2 rounded-lg mt-10">Edit Profile</button>
                    </div>
                </div>
            </div>

            <!-- Back Side (Edit Form) -->
            <div class="flip-card-back bg-orange p-6 rounded-2xl shadow-md w-96 h-fit">
                <h2 class="text-xl font-bold mb-4">Edit Profile</h2>
                <form>
                    <div class="flex justify-between">
                        <div class="p-3">
                            <Input label="Full name" name="name" />
                            <Input label="Username" name="username" />
                            <Input label="Date of Birth" type="date" name="date_of_birth" />
                            <Input label="Email" type="email" name="email" />
                            <label for="gender" class="m-3">Gender:</label>
                            <select name="gender" class="bg-primary">
                                <option value="2">Prefer not to say</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div class="p-2">
                            <img :src="profile_pic" alt="profile" class="h-64 w-48 rounded-2xl object-cover mr-6" />
                            <Input label="Profile picture" type="file" name="email" class="w-fit" />
                        </div>
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
