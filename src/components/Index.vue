<template>
  <section class="pt-6 bg-neutral-50 sm:pt-12">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h1
          class="
            text-xs
            sm:text-sm
            text-neutral-700
            font-semibold
            leading-tight
          "
        >
          {{ $t('badge') }}
        </h1>
        <p
          class="
            p-3
            sm:p-6
            text-3xl
            font-bold
            leading-tight
            text-neutral-900
            sm:leading-tight sm:text-4xl
            lg:leading-tight lg:text-5xl
          "
        >
          <span> {{ $t('title') }} </span>
          <span class="relative inline-flex sm:inline">
            <span
              class="
                bg-gradient-to-r
                from-[#44BCFF]
                via-[#FF44EC]
                to-[#FF675E]
                blur-lg
                filter
                opacity-30
                w-full
                h-full
                absolute
                inset-0
              "
            ></span>
            <span class="relative"> {{ $t('business') }}</span>
          </span>
        </p>
        <div
          class="
            p-6
            items-center
            justify-center
            px-0
            space-x-4
            sm:space-x-6
            flex
          "
        >
          <a
            href="#"
            title=""
            class="
              inline-flex
              items-center
              justify-center
              px-5
              sm:px-9
              py-3
              text-xs
              sm:text-base
              font-medium
              sm:font-bold
              text-white
              transition
              duration-200
              bg-gray-900
              border-2 border-transparent
              w-auto
              rounded-xl
              hover:bg-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-gray-900
            "
            role="button"
            >{{ $t('get_started_now') }}</a
          >
          <a
            href="#"
            title=""
            class="
              inline-flex
              items-center
              justify-center
              px-5
              sm:px-9
              py-3
              text-xs
              sm:text-base
              font-medium
              sm:font-bold
              text-gray-900
              transition
              duration-200
              border-2 border-gray-400
              w-auto
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-gray-900
              hover:bg-gray-900
              focus:bg-gray-900
              hover:text-white
              focus:text-white
              hover:border-gray-900
              focus:border-gray-900
            "
            role="button"
          >
            <svg
              class="w-4 h-4 mr-1.5 sm:w-5 sm:h-5 sm:mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
              ></path>
            </svg>
            <span>{{ $t('ask_a_question') }}</span>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center p-6 space-x-6 sm:space-x-8">
        <div class="flex items-center">
          <p class="text-2xl font-medium text-neutral-900 sm:text-4xl">361K</p>
          <p class="ml-3 text-xs sm:text-sm text-neutral-900 text-center">
            {{ $t('total') }} <br />{{ $t('proxies') }}
          </p>
        </div>
        <svg
          class="text-neutral-400"
          width="16"
          height="39"
          viewBox="0 0 16 39"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
          <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
          <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
          <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
          <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
        </svg>
        <div class="flex items-center">
          <p class="text-2xl font-medium text-neutral-900 sm:text-4xl">8427</p>
          <p class="ml-3 text-xs sm:text-sm text-neutral-900 text-center">
            {{ $t('now') }} <br />{{ $t('available') }}
          </p>
        </div>
      </div>
      <div
        class="max-w-5xl mx-auto p-2 sm:mt-6 drop-shadow-xl sm:drop-shadow-2xl"
      >
        <img
          class="w-full"
          src="https://proxyseks.pages.dev/assets/img/illustration.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
