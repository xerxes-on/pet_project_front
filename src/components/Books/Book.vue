<script setup>
import { onMounted, ref } from 'vue'
import Author from '@/components/Books/Author.vue'
import bookApi from '@/api/book.js'
import { useBookStore } from '@/stores/book.js'
import ErrorPopup from '@/components/common/ErrorPopup.vue'


const bookStore = useBookStore()
const errorMessage = ref()
onMounted(async ()=>{
    try {
        const bookResponse = await bookApi.getBookDetails(1)
        console.log(bookResponse.data)
        if(bookResponse.status ===200){
            bookStore.book = bookResponse.data
        }else{
            errorMessage.value = bookResponse.data.message
        }
    }catch(e){
        console.log(e)
    }
})
</script>
<template>
    <ErrorPopup v-if="!!errorMessage" v-model="errorMessage" :message="errorMessage" />
    <div class="min-h-screen p-6 bg-primary text-gray-900">
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-4">
                <div class=" p-4 rounded-2xl shadow-md">
                    <img
                        :src="bookStore.book.image"
                        alt="Book Cover"
                        class="rounded-lg w-full h-auto"
                    />
                    <div class="mt-4">
                        <button class="w-full bg-dark_blue text-white py-2 rounded-xl mb-2 hover:bg-blue-700">
                            Currently Reading
                        </button>
                        <button class="w-full bg-gray-300 text-gray-700 py-2 rounded-xl mb-2 hover:bg-gray-400">
                            Want to Read
                        </button>
                        <button class="w-full bg-gray-100 text-gray-700 py-2 rounded-xl hover:bg-gray-200">
                            <i class="fas fa-book"></i> Book Statics
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right Column (Book Details) -->
            <div class="col-span-8  p-8 rounded-2xl shadow-md">
                <h1 class="text-3xl font-bold mb-2">{{ bookStore.book.title }}</h1>
                <h2 class="text-xl  mb-4">{{bookStore.book.author.name}}</h2>

                <!-- Ratings and Reviews -->
                <div class="flex items-center mb-4">
                    <span class="text-yellow text-xl"><i class="fa-solid fa-star"></i></span>
                    <span class="ml-2 text-lg">{{ bookStore.book.rating}}</span>
                    <span class="ml-4 text-gray-500 opacity-50">({{ bookStore.book.ratings_count }} Ratings • {{bookStore.book.reviews.length }} Reviews)</span>
                </div>

                <!-- Book Description -->
                <p class="text-gray-700 mb-6">
                    {{ bookStore.book.}}
                    <br>
                    <br>


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
                    venenatis turpis in non. Vivamus quis magna vel leo dignissim luctus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
                    venenatis turpis in non. Vivamus quis magna vel leo dignissim luctus.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
                    venenatis turpis in non. Vivamus quis magna vel leo dignissim luctus.
                </p>

                <!-- Genres -->
                <div class="flex flex-wrap mb-4">
          <span v-for="genre in genres" :key="genre"
                class="bg-light_blue text-gray-800 py-1 px-2 rounded-full mr-2 mb-2">
            {{ genre }}
          </span>
                </div>

                <!-- Book Information -->
                <div class="mt-8 grid grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-lg font-semibold">Publication Details</h3>
                        <ul class="text-gray-600">
                            <li>Published: MM/DD/YYYY</li>
                            <li>Publisher: Book Publisher Name</li>
                        </ul>
                    </div>
                </div>
                <!-- User Engagement -->
                <div class="mt-8">
                    <p><i class="fas fa-user"></i> 481 people are currently reading</p>
                    <p class="mt-2"><i class="fas fa-user"></i> 189k people want to read</p>
                </div>
            </div>
        </div>
        <Author />
    </div>

</template>



<style scoped>
</style>
