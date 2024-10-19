<script setup>
import { reactive, ref } from 'vue'
import { useMainStore } from '@/stores/main.js'
import { useToast } from 'vue-toastification'
import FollowAuthorButton from '@/components/Books/FollowAuthorButton.vue'
import bookApi from '@/api/book.js'
import { vConfetti } from '@neoconfetti/vue'
import 'animate.css'
import { useBookStore } from '@/stores/book.js'

const rates = [
    { star: 5, width: '80%', percent: '80%' },
    { star: 4, width: '60%', percent: '60%' },
    { star: 3, width: '40%', percent: '40%' },
    { star: 2, width: '20%', percent: '20%' },
    { star: 1, width: '10%', percent: '10%' },
]

const props = defineProps({
    author: {
        required: true,
        type: Object,
    },
    book: {
        type: Object,
        required: true,
    },
})
const localAuthor = ref(props.author)
const isFlipped = ref(false)
const toast = useToast()
const mainStore = useMainStore()

const currentRating = ref(0);
const data = reactive({
    rating: currentRating.value,
    comment: null,
    book_id: props.book.id,
})
const visible = ref(false)
const submitReview = (async () => {
    try {
        mainStore.loading = true
        const response = await bookApi.rateBook(data)
        if (response.status === 200) {
            visible.value = !visible.value
            const bookReviews = await bookApi.getBookReviews(data.book_id)
            useBookStore().reviews = bookReviews.data
        }
    } catch (err) {
        toast.warning('Oops!' + err)
    } finally {
        mainStore.loading = false
    }
})
const hoverRating = ref(0); // Stores the hover rating
const setRating = (rating) => {
    currentRating.value = rating;
}
const setHoverRating = (rating) => {
    hoverRating.value = rating;
};
const resetHoverRating = () => {
    hoverRating.value = 0;
};

</script>

<template>
    <section v-if="author" class="mt-12 flex relative p-6 bg-primary">
        <div class="absolute right-64 w-3/5 h-0.5 bg-dark_blue"></div>
        <span class="w-1/2"></span>
        <div class="w-2/3 relative py-14">
            <div class="flex flex-col justify-between">
                <div class="w-full h-16">
                    <img :src="author.data.author_picture" alt="Author Image"
                         class="w-40 h-40 absolute top-10 -left-1/3 rounded-full object-cover" />
                </div>
                <div class="">
                    <div>
                        <h3 class="text-4xl font-bold mb-10">{{ author.data.name }}</h3>
                        <div>
                            <FollowAuthorButton v-model="localAuthor.isFollowed" :author="author" />
                        </div>
                    </div>
                    <p class="text-gray-600">
                        No.of Books: <span
                        class="font-bold text-dark_blue text-xl">{{ author.books_count ? author.books_count : '0'
                        }}</span>
                        &nbsp;|&nbsp; Followers:
                        <strong>{{ author.data.followers_count ? author.data.followers_count : '0'
                            }}</strong>
                    </p>
                    <p class="text-gray-700 mt-2">
                        {{ author.data.about_author }}
                    </p>
                </div>
                <button class="ml-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Follow
                </button>
            </div>
        </div>
        <div class="absolute -bottom-2 right-64 b-0 w-3/5 h-0.5 bg-dark_blue"></div>
    </section>
    <section class="mb-6 h-[32rem]">
        <div :class="['flip-card-inner', { flipped: isFlipped }]">
            <!-- Front Side (Profile Header) -->
            <div class="flip-card-front bg-orange p-6 rounded-2xl shadow-md w-96 h-full">
                <div class="flex justify-between">
                    <section class="p-4 flex justify-between w-full m-15 relative">
                        <div class="mt-12 ml-5 w-1/3 p-6 rounded-2xl flex flex-col justify-around items-center">
                            <h2 class="text-6xl font-tangerine font-bold mb-4">Rating & Reviews</h2>
                            <img alt="User Avatar" class="w-24 h-24 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/44.jpg" />
                            <h1 class="text-2xl">What Do You Think?</h1>
                            <div class="flex justify-between">
                                <div class="text-center">
                                    <div class="flex items-center text-xl space-x-2">
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <i class="fas fa-star text-gray-300"></i>
                                        <i class="fas fa-star text-gray-300"></i>
                                    </div>
                                    <h1 class="pt-4 text-lg">Rate this Book</h1>
                                </div>

                                <button class="ml-10 mt-5 bg-dark_blue text-white h-fit p-2 px-4 rounded-2xl hover:bg-light_blue"
                                        @click="isFlipped = !isFlipped">
                                    Write a Review
                                </button>
                            </div>
                        </div>
                        <div class="absolute -bottom-2 right-64 b-0 w-3/5 h-0.5 bg-dark_blue"></div>

                        <div class="mt-12 p-6">
                            <h2 class="text-6xl font-tangerine mb-4 text-center">Community Reviews</h2>
                            <div class="flex items-center mb-4">
                                <div class="text-lg text-center">
                    <span v-for="n in 5" :key="n">
                        <i :class="['text-yellow m-2', n <= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                    </span>
                                </div>
                                <span class="ml-2 text-xl">4.5</span>
                                <span class="ml-4 text-gray-500">(654 Ratings • 756 Reviews)</span>
                            </div>
                            <div class="w-full space-y-5">
                                <div v-for="(rate, index) in rates" :key="index" class="flex items-center">
                                    <div class="text-sm">
                                        <span class="mr-1">{{ rate.star }}</span>stars
                                    </div>
                                    <div class="w-full bg-gray h-2 rounded-full mx-2">
                                        <div
                                            :class="[rate.star === 1 ? 'bg-red' : 'bg-green', rate.star === 2 ? 'bg-orange_dark' : 'bg-green']"
                                            :style="{ width: rate.width }"
                                            class="bg-green h-2 rounded-full"
                                        ></div>
                                    </div>
                                    <span class="text-sm">{{ rate.percent }}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <!-- Back Side (Edit Form) -->
            <div class="flip-card-back bg-primary p-6 rounded-2xl w-96 h-fit flex items-center justify-center">
                <section v-if="book" class="p-4 bg-orange w-2/3 rounded-2xl shadow-2xl ">
                    <div v-if="visible" v-confetti="{ particleCount: 1000,}" class="absolute celebrate left-1/2" />
                    <h2 class="text-2xl font-bold text-center text-gray-700 mb-4">Write a Review</h2>
                    <div class="flex justify-center mb-4">
                        <img :src="book.image" alt="Book cover" class="w-32 h-32 object-cover rounded" />
                    </div>
                    <h3 class="text-xl font-bold text-center text-gray-700 mb-2">{{ book.title }}</h3>
                    <p class="text-center text-gray-600 mb-4">{{ book.author.data.name }}</p>
                    <div class="flex space-x-2 justify-center items-center">
                        <span
                            v-for="star in 5"
                            :key="star"
                            :class="[
                            'text-4xl cursor-pointer transition-transform duration-300',
                            star <= hoverRating || star <= currentRating ? 'text-yellow' : 'text-gray-300',
                            star <= hoverRating ? 'scale-125' : ''
                          ]"
                            @mouseover="setHoverRating(star)"
                            @mouseleave="resetHoverRating"
                            @click="setRating(star)"
                        >
                          &#9733;
                        </span>
                    </div>
                    <textarea
                        v-model="data.comment"
                        class="w-1/2 px-4 py-2 block  rounded-2xl"
                        placeholder="Write your review about this book"
                        rows="4"
                    ></textarea>
                    <div class="w-full flex items-center justify-end">
                        <button class="border-2 m-2 border-dark_blue rounded-2xl p-3 font-semibold"
                                @click="isFlipped = !isFlipped">Cancel
                        </button>
                        <button class="bg-dark_blue rounded-2xl p-3 text-white font-semibold" type="submit"
                                @click.prevent="submitReview">Submit
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<style scoped>
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-in-out;
    transform-style: preserve-3d;
}

.flipped {
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
