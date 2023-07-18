<script>
import { computed } from 'vue'
export default {
  data() {
    return {
      city: 'kigali',
      weather: null,
      key: '8f813e4915d400edf5709b745e66deca',
      search: "",
    };
  },
  async mounted() {
      await this.getWeather();

    },
  methods: {
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`);
      const data = await response.json();
      this.weather = data;



    },

    async searchCity() {
        if (this.search.trim() !== '') {
          this.city = this.search.trim();
          await this.getWeather();
          this.search = '';
          
        }
      },

  },

 

};
</script>

<template>
    <div class="bg-[#101010] backg w-full h-screen bg-cover bg-no-repeat">
        <div class="text-2xl font-bold mb-4">La Météo</div>
            <div class="flex items-center w-[40%] m-auto">
                <input v-model.trim="search" class="flex-1 rounded-md border-gray-300 shadow-sm p-2 mr-2" type="text" placeholder="Entrez le nom d'une ville">
                <button @click="searchCity" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rechercher</button>
            </div>



            <div v-if="weather" class="rounded-md p-4 mt-4">
                <div class="grid grid-cols-5">
                    <div class="col-span-3 h-[400px] bg-cover bg-no-repeate" :style="{backgroundImage: 'url(../src/assets/images/'+ weather.weather[0].main +'.jpg)'}"></div>
                    <div class="col-span-2 h-[400px] bg-green-500">
                        <h2 class="text-xl font-bold">{{ weather.name }}</h2>
                    <p class="text-lg">{{ weather.main.temp }}°C</p>
                    <p>{{ weather.weather[0].description }}</p>
                    <p>{{ weather.wind.speed }}</p>
                    <p>{{ weather.weather[0].main }}</p>
                    </div>
                </div>
            </div>
    </div>
</template>