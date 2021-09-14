<template>
    <div class="fixed top-0 animated z-40 w-full">
        <div class="bg-gray-100 antialiased">
            <div class="w-full flex justify-between items-center px-8 md:px-12 py-3 shadow-sm hover:shadow-md transition ease-in-out duration-500">
                <div>
                    <p class="text-xl text-gray-700 font-semibold">
                        <span class="text-purple-800">Simple</span> Tasks</p>
                </div>
                <div>
                    <router-link to="/">
                        <button class="px-8 py-3 focus:outline-none rounded-md bg-gray-200 mx-2 hover:text-purple-600 transition ease-in-out duration-500 hover:shadow">Home
                    </button>
                    </router-link>
                    <router-link to="/tasks">
                        <button class="px-8 py-3 focus:outline-none rounded-md bg-gray-200 mx-2 hover:text-purple-600 transition ease-in-out duration-500 hover:shadow">Tasks
                    </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>