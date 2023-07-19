<script>
import { computed } from "vue";
export default {
  data() {
    return {
      city: "kigali",
      weather: null,
      key: "8f813e4915d400edf5709b745e66deca",
      search: "",
      dates: "<p>"+ this.currentDate() +"</p>",
      error: false
    };
  },
  async mounted() {
    await this.getWeather();
  },
  methods: {
    async getWeather() {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`
        );
      try {
        const data = await response.json();
        this.weather = data;
        return true
      } catch (error) {
        this.error = true
        console.log(this.error)
        return false
      }


    },

    async searchCity() {
      if (this.search.trim() !== "") {
        this.city = this.search.trim();
        await this.getWeather();
        this.search = "";
      }
    },

    currentDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
      const d = new Date();
      return `${days[d.getDay() - 1]}, ${d.getDate()} ${months[d.getMonth()]}`;
    },
  },
};
</script>

<template>
  <div class="bg-[#101010] backg w-full h-full bg-cover bg-no-repeat">
    <div class="text-2xl pt-4 w-full text-center text-white font-bold mb-4">
      Weather APP
    </div>
    <div class="items-center w-[40%] m-auto relative h-[auto]">
      <div class="flex w-full">
        <input
        v-model.trim="search"
        class="flex-1 rounded-md border-gray-300 shadow-sm p-2 mr-2"
        type="text"
        placeholder="Entrez le nom d'une ville"
      />
      <button
        @click="searchCity"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <img src="../assets/images/search.png" alt="">
      </button>
      </div>
      <div v-if="this.error" class="top-[100%] mt-2 left-0 w-full bg-red-500 rounded-lg text-white text-center leading-[50px]">
        Enter a valid city
      </div>
    </div>

    <div v-if="weather" class="rounded-md p-4 mt-2">
      <div class="md:grid md:grid-cols-5 md:gap-4">
        <div
          class="col-span-3 h-[500px] bg-cover bg-opacity-100 inset-0 rounded-lg relative bg-no-repeate"
          :style="{
            backgroundImage:
              'url(../src/assets/images/' + weather.weather[0].main + '.jpg)',
          }"
        >
          <div class="absolute top-0 left-0 w-full">
            <div
              class="relative z-10 text-white w-full text-[30px] text-center"
            >
              <span class="font-bold">{{ weather.name }}</span
              >, <span>{{ weather.sys.country }}</span>
            </div>
            <div
              class="mt-4 mb-4 text-white text-center font-semibold text-[30px]"
            >
              TODAY
            </div>
            <div
              class="mt-4 mb-4 text-white text-center font-semibold text-[30px]"
              v-html="dates"
            >
            </div>
            <p class="text-[80px] text-white text-center font-bold">
              {{ weather.main.temp.toFixed(1) }}°C
            </p>
            <div class="flex justify-center">
              <img
                :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                alt=""
              />
            </div>
            <div class="text-white text-center text-[28px] font-semibold">
              {{ weather.weather[0].description }}
            </div>
          </div>
        </div>
        
        <div class="col-span-2 h-[auto] mt-2 md:mt-0">
          <div class="">
            <div
            class="px-2 py-[15px] bg-[#545454] rounded-lg text-white text-center"
          >
            <p>WIND</p>
            <p>{{ weather.wind.speed }}m/s</p>
          </div>
          <div
            class="px-2 mt-[10px] py-[15px] bg-[#545454] rounded-lg text-white text-center"
          >
            <p>HUMIDITY</p>
            <p>{{ weather.main.humidity }}%</p>
          </div>
          <div
            class="px-2 py-[15px] mt-[10px] bg-[#545454] rounded-lg text-white text-center"
          >
            <p>lon</p>
            <p>{{ weather.coord.lon }}</p>
          </div>
          <div
            class="px-2 py-[15px] mt-[10px] bg-[#545454] rounded-lg text-white text-center"
          >
            <p>lat</p>
            <p>{{ weather.coord.lat }}</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-[50px] w-full leading-[50px] bg-[#545454] text-center text-white"
    >
    &copy; copyright by Jospin Ndagano 2023
    </div>
  </div>
</template>