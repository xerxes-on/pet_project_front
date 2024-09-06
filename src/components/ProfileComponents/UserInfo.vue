<script setup></script>

<template>

    <!-- Profile Header -->
    <section class="bg-orange p-6 rounded-lg shadow-md mb-6">
        <div class="flex justify-between">
            <!-- User Info -->
            <div class="flex">
                <img
                    src="@/assets/images/cat.jpg"
                    alt="User Avatar"
                    class="w-32 h-32 rounded-full object-cover mr-6"
                />
                <div>
                    <h1 class="text-2xl font-bold">User Name</h1>
                    <p class="text-gray-600">Male, City, Country</p>
                    <p class="text-gray-600">Joined in Month DD, YEAR</p>
                    <p class="mt-2 text-gray-600">Favorite Genres: Romance, Fantasy, Science Fiction, +5 more</p>
                </div>
            </div>

            <!-- Favorite Book -->
            <div>
                <img
                    src="@/assets/svgs/home7.svg"
                    alt="Favorite Book"
                    class="w-32 h-48 rounded-lg object-cover"
                />
            </div>
        </div>
        <!-- Edit Profile Button -->
        <div class="flex justify-end mt-4">
            <button class="bg-dark_blue text-white px-4 py-2 rounded-lg">Edit Profile</button>
        </div>
    </section>

</template>

<style scoped>

</style>