<script setup>
import DropDown from '@/components/common/DropDown.vue'
import { ref } from 'vue'

// Active menu state
const activeMenu = ref(null)

const showMenu = (menu) => {
    activeMenu.value = menu
}

const hideMenu = () => {
    activeMenu.value = null
}
</script>

<template>
    <!--Header here-->

    <header class="bg-primary p-8 flex items-center justify-between">
        <!-- Logo Section -->
        <RouterLink :to="{ name: 'home' }">
            <div class="flex items-center space-x-2">
                <img src="@/assets/images/logo.png" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
                <span class="text-xl font-bold">Logo Name</span>
            </div>
        </RouterLink>
        <!-- Navigation Section -->
        <nav class="flex space-x-8">
            <a href="#" class="relative group">
                <RouterLink :to="{ name: 'home' }" class="hover:text-orange-500 font-semibold">Home</RouterLink>
                <span class="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <!-- Dropdown for My Books -->
            <div class="relative group" @mouseenter="showMenu('books')" @mouseleave="hideMenu">
                <a href="#" class="hover:text-orange-500 font-semibold">My Books</a>
                <DropDown v-if="activeMenu === 'books'" :items="['My Books 1', 'My Books 2']" />
            </div>

            <!-- Dropdown for Reviews -->
            <div class="relative group" @mouseenter="showMenu('reviews')" @mouseleave="hideMenu">
                <a href="#" class="hover:text-orange-500 font-semibold">Reviews</a>
                <DropDown v-if="activeMenu === 'reviews'" :items="['Review 1', 'Review 2']" />
            </div>

            <!-- Dropdown for Community -->
            <div class="relative group" @mouseenter="showMenu('community')" @mouseleave="hideMenu">
                <a href="#" class="hover:text-orange-500 font-semibold">Community</a>
                <DropDown v-if="activeMenu === 'community'" :items="['Community 1', 'Community 2']" />
            </div>

            <RouterLink :to="{ name: 'profile' }">
                <img src="@/assets/images/logo.png" alt="Profile" class="w-10 h-10 rounded-full object-cover" />
            </RouterLink>
        </nav>
    </header>

    <slot></slot>

    <!--    Footer-->
    <footer class="bg-primary_dark py-10 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left">
            <!-- Company Column -->
            <div>
                <h3 class="text-lg font-bold mb-4">COMPANY</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">About us</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Careers</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Terms</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Privacy</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Interest Based Ads</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Ads Preferences</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Help</a></li>
                </ul>
            </div>

            <!-- Work With Us Column -->
            <div>
                <h3 class="text-lg font-bold mb-4">WORK WITH US</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Authors</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Advertise</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">Author & Ads blog</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-gray-900">API</a></li>
                </ul>
            </div>

            <!-- Contact Column -->
            <div>
                <h3 class="text-lg font-bold mb-4">CONTACT</h3>
                <div class="flex justify-center md:justify-start space-x-4">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                        <i class="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>

                <!-- Support Column -->
                <h3 class="text-lg font-bold my-4">SUPPORT</h3>

                <div>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-700 hover:text-gray-900">FAQ</a></li>
                        <li><a href="#" class="text-gray-700 hover:text-gray-900">Search Guide</a></li>
                    </ul>
                </div>
            </div>
            <!-- Bottom row: App Store Buttons -->
            <div class="mt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <!-- App Store Icons -->
                <div class="flex space-x-4 mb-4 md:mb-0">
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg" alt="App Store" class="h-12" />
                    </a>
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Icon.svg" alt="Google Play" class="h-12" />
                    </a>
                </div>

                <!-- Logo Placeholder -->
                <div>
                    <h2 class="text-2xl font-bold">Logo Name</h2>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500">
            <p>Copyright © YYYY - YYYY Company name. All rights reserved</p>
        </div>
    </footer>
</template>
