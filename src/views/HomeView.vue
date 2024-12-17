<template>
  <div>
    <section class="w-full h-full rounded-xl bg-[url('./src/assets/home/desktop/image-hero-coffeepress.jpg')] bg-cover">
      <section class="w-2/5 px-20 py-40 space-y-14">
        <p class="font-bold text-6xl text-white text-left">Great coffee made simple.</p>
        <p class="text-white text-left text-lg">Start your mornings with the world’s best coffees.
          Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
        <button class="bg-dark-green text-white font-fraunces font-bold px-10 py-3 rounded">
          <router-link to="/createplan">Create your plan</router-link>
        </button>
      </section>
    </section>
    <section class="my-40">
      <section class="py-40 px-20 grid grid-cols-4 gap-3">
        <section class="flex flex-col items-center">
          <img src="../assets/home/desktop/image-gran-espresso.png" class="w-3/4">
          <p class="font-bold font-fraunces text-2xl mt-20 mb-8">Gran Espresso</p>
          <p class="text-center font-barlow text-lg ">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
        </section>
        <section class="flex flex-col items-center">
          <img src="../assets/home/desktop/image-planalto.png" class="w-3/4">
          <p class="font-bold font-fraunces text-2xl mt-20 mb-8">Planalto</p>
          <p class="text-center font-barlow text-lg ">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
        </section>
        <section class="flex flex-col items-center">
          <img src="../assets/home/desktop/image-piccollo.png" class="w-3/4">
          <p class="font-bold font-fraunces text-2xl mt-20 mb-8">Piccollo</p>
          <p class="text-center font-barlow text-lg ">Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
        </section>
        <section class="flex flex-col items-center">
          <img src="../assets/home/desktop/image-danche.png" class="w-3/4">
          <p class="font-bold font-fraunces text-2xl mt-20 mb-8">Danche</p>
          <p class="text-center font-barlow text-lg ">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
        </section>
      </section>
    </section>
    <section class="h-[810px] flex flex-col items-center">
      <section class="flex flex-col items-center h-4/5 w-full bg-light-black rounded-xl">
        <p class="text-5xl text-white font-fraunces font-bold p-20">Why choose us?</p>
        <p class="w-2/5 text-gray-300 font-barlow text-lg pb-20">A large part of our role is choosing which particular coffees will be featured in our range.
          This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
        <section class="grid grid-cols-3 gap-8 place-items-center w-3/4">
          <section class="relative p-10 bg-teal rounded-xl space-y-8">
            <section class="">
              <svg xmlns="http://www.w3.org/2000/svg" class="">
                <path d="M71.806 39.226c-.968-9.481-5.498-18.76-12.758-26.122C43.93-2.22 21.512-4.428 9.078 8.194-3.365 20.812-1.19 43.537 13.924 58.864c7.26 7.362 16.41 11.957 25.76 12.938 1.246.13 2.475.198 3.687.198 8.04 0 15.229-2.858 20.523-8.226 6.088-6.17 8.901-14.89 7.912-24.548zm-22.125 7.78c-4.953-3.833-10.322-5.35-16.153-6.97C18.85 35.955 11.558 23.535 9.855 8.977c4.135 5.058 7.188 10.836 12.265 15.07 5.409 4.51 11.364 6.152 17.905 8.074 14.36 4.225 21.464 16.538 23.097 30.87-4.482-5.463-7.77-11.592-13.441-15.984z" fill="#FDD6BA"/>
              </svg>
            </section>
            <p class="font-fraunces text-3xl font-bold text-white">Best quality</p>
            <p class="font-barlow text-lg"> Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
          </section>
          <section class="flex flex-col items-center p-10 bg-teal rounded-xl space-y-8">
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M34 44v28H11.297C8.391 72 6 69.672 6 66.842V44h28zm32 0v22.842C66 69.672 63.609 72 60.703 72H38V44h28zM55.73 0C64.05.003 67 4.347 67 8.067c0 4.26-3.952 9.643-12.424 12.934L66.711 21C69.612 21 72 23.37 72 26.25v7.5c0 2.88-2.388 5.25-5.289 5.25H38l.001-15.02a70.21 70.21 0 01-1.7.02c-.1 0-.201-.006-.3-.02-.1.013-.2.02-.303.02-.574 0-1.14-.007-1.698-.02V39H5.289C2.388 39 0 36.63 0 33.75v-7.5C0 23.37 2.388 21 5.289 21h12.135C8.952 17.71 5 12.327 5 8.066 5 4.345 7.953 0 16.272 0 27.008 0 33.088 7.615 36 14.592 38.911 7.615 44.992 0 55.73 0zM16.273 4.451c-3.223 0-6.667.95-6.667 3.614 0 3.79 6.855 10.695 23.217 11.422-1.381-4.932-5.556-15.036-16.55-15.036zm39.459.002c-10.997 0-15.172 10.103-16.556 15.031 8.675-.391 14.146-2.513 17.295-4.32 4.369-2.507 5.925-5.31 5.925-7.1 0-2.664-3.441-3.61-6.664-3.61z" fill="#FDD6BA"/>
            </svg>
            <p class="font-fraunces text-3xl font-bold text-white">Exclusive benefits</p>
            <p class="font-barlow text-lg">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
          </section>
          <section class="flex flex-col items-center p-10 bg-teal rounded-xl space-y-8">
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M55.385 37.5c3.435 0 6.23 2.804 6.23 6.25S58.82 50 55.385 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm-38.77 0c3.436 0 6.231 2.804 6.231 6.25S20.051 50 16.616 50c-3.436 0-6.231-2.804-6.231-6.25s2.795-6.25 6.23-6.25zm40.87 4.143h-4.2v4.214h4.2v-4.214zm-38.77 0h-4.2v4.214h4.2v-4.214zM48.463 0v35.397a10.497 10.497 0 00-3.652 7.659H27.05c-.165-5.647-4.787-10.19-10.448-10.19-5.662 0-10.283 4.543-10.449 10.19H0V29.12h11.77a2.736 2.736 0 002.726-2.739 2.736 2.736 0 00-2.727-2.738H8.345v-4.23h17.92a2.736 2.736 0 002.728-2.738 2.736 2.736 0 00-2.727-2.74H0V9.708h16.602a2.736 2.736 0 002.726-2.739c0-1.459-1.352-2.739-2.894-2.739h-3.307V0h35.335zM72 23.611v19.445h-6.216c-.167-5.656-4.836-10.207-10.556-10.207-.901 0-1.777.114-2.613.326v-9.564H72zM4.154 19.444v4.167H0v-4.167h4.154zM61.062 4.861l9.553 14.583h-18V4.861h8.447zM9 0v4.167H4.846V0H9z" fill="#FDD6BA"/>
            </svg>
            <p class="font-fraunces text-3xl font-bold text-white">Free shipping</p>
            <p class="font-barlow text-lg">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
          </section>
        </section>
      </section>
    </section>
    <section class="flex flex-col px-48 mt-52">
      <p class="text-left font-fraunces font-bold text-gray-500 text-3xl">How it works</p>
      <section>

      </section>
      <section class="grid grid-cols-3 gap-5 mt-20">
        <section class="space-y-10">
          <p class="font-fraunces font-black text-7xl text-cream">01</p>
          <p class="text-light-black text-4xl font-fraunces font-bold">Pick your coffee</p>
          <p class="text-light-black font-barlow text-lg">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them.
             There are new coffees in all profiles every month for you to try out.</p>
        </section>
        <section class="space-y-10">
          <p class="font-fraunces font-black text-7xl text-cream">02</p>
          <p class="text-light-black text-4xl font-fraunces font-bold">Choose the frequency</p>
          <p class="text-light-black font-barlow text-lg">Customize your order frequency, quantity, even your roast style and grind type.
            Pause, skip or cancel your subscription with no commitment through our online portal.</p>
        </section>
        <section class="space-y-10">
          <p class="font-fraunces font-black text-7xl text-cream">03</p>
          <p class="text-light-black text-4xl font-fraunces font-bold">Receive and enjoy!</p>
          <p class="text-light-black font-barlow text-lg">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
        </section>
      </section>
      <button class="bg-dark-green text-white font-fraunces font-bold px-5 py-3 mt-14 w-1/6 rounded">
        <router-link to="/createplan">Create your plan</router-link>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

