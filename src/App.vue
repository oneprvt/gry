<script>
export default {
  methods: {
    setLocale(locale) {
      localStorage.setItem('Region', locale);
      this.$i18n.locale = locale;
    },
  },
};
</script>
<template>
  <header class="bg-neutral-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Top">
      <div class="w-full py-4 sm:py-6 flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/">
            <svg
              class="w-auto h-8"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  cx="25%"
                  cy="75%"
                  fx="25%"
                  fy="75%"
                  r="75%"
                  id="header-logo"
                >
                  <stop
                    stop-color="#aa9feb"
                    stop-opacity=".8"
                    offset="0%"
                  ></stop>
                  <stop
                    stop-color="#eabfda"
                    stop-opacity="1"
                    offset="100%"
                  ></stop>
                </radialGradient>
              </defs>
              <rect
                width="32"
                height="32"
                rx="16"
                fill="url(#header-logo)"
              ></rect>
            </svg>
          </router-link>
          <div class="hidden ml-20 space-x-12 md:block">
            <router-link
              to="/"
              class="
                transition
                duration-200
                text-base
                font-medium
                text-neutral-900
                hover:text-opacity-50
                cursor-pointer
              "
              >{{ $t('features') }}</router-link
            >
            <router-link
              to="/price"
              class="
                transition
                duration-200
                text-base
                font-medium
                text-neutral-900
                hover:text-opacity-50
                cursor-pointer
              "
              >{{ $t('pricing') }}</router-link
            >
            <router-link
              to="/price"
              class="
                transition
                duration-200
                text-base
                font-medium
                text-neutral-900
                hover:text-opacity-50
                cursor-pointer
              "
              >{{ $t('support') }}</router-link
            >
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <button
            @click="setLocale($t('nextlanguage').toLowerCase())"
            class="
              inline-block
              py-2.5
              px-4
              text-base
              font-medium
              text-black
              hover:bg-opacity-50
            "
          >
            {{ $t('nextlanguage') }}
          </button>
          <a
            href="#"
            class="
              transition
              duration-200
              inline-block
              bg-white
              py-2.5
              px-6
              border border-transparent
              rounded-full
              text-base
              font-medium
              text-neutral-50
              bg-neutral-900
              hover:bg-neutral-700
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
            "
            >{{ $t('join_community') }}</a
          >
        </div>
      </div>
    </nav>
  </header>
  <router-view></router-view>
  <footer class="mt-12">
    <div class="container max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
        <div class="hidden sm:block sm:col-span-12 lg:col-span-3">
          <div class="mb-1">
            <a class="inline-block" aria-label="Cruip" href="/">
              <svg
                class="w-auto h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="25%"
                    cy="75%"
                    fx="25%"
                    fy="75%"
                    r="75%"
                    id="header-logo"
                  >
                    <stop
                      stop-color="#aa9feb"
                      stop-opacity=".8"
                      offset="0%"
                    ></stop>
                    <stop
                      stop-color="#eabfda"
                      stop-opacity="1"
                      offset="100%"
                    ></stop>
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                ></rect>
              </svg>
            </a>
          </div>
          <div class="text-sm text-neutral-600">
            <a
              class="
                text-neutral-600
                hover:text-neutral-900 hover:underline
                transition
                duration-150
                ease-in-out
              "
              href="/"
              >{{ $t('terms_of_use') }}</a
            >
            <br />
            <a
              class="
                text-neutral-600
                hover:text-neutral-900 hover:underline
                transition
                duration-150
                ease-in-out
              "
              href="/"
              >{{ $t('privacy_policy') }}</a
            >
          </div>
        </div>
        <div class="hidden sm:block sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-neutral-800 font-medium mb-2">
            {{ $t('features') }}
          </h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('integrations') }}</a
              >
            </li>
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('documentation') }}</a
              >
            </li>
          </ul>
        </div>
        <div class="hidden sm:block sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-neutral-800 font-medium mb-2">
            {{ $t('service') }}
          </h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('support_center') }}</a
              >
            </li>
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('partners_investment') }}</a
              >
            </li>
          </ul>
        </div>
        <div class="hidden sm:block sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-neutral-800 font-medium mb-2">
            {{ $t('resources') }}
          </h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('connection_status') }}</a
              >
            </li>
            <li class="mb-2">
              <a
                class="
                  text-neutral-600
                  hover:text-neutral-900
                  transition
                  duration-150
                  ease-in-out
                "
                href="/"
                >{{ $t('check_availability') }}</a
              >
            </li>
          </ul>
        </div>
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 class="text-neutral-800 font-medium mb-2">
            {{ $t('payment') }}
          </h6>
          <p class="text-sm text-neutral-600 mb-4">
            Методы оплаты добавим скоро
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
