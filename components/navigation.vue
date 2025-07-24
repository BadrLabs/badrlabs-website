<template>
  <nav
    class="relative py-4 px-[30px] flex items-center z-10 border-[1px] border-b-gray-300"
  >
    <NuxtLink to="/" class="font-bold text-2xl tracking-wider"
      >Badrlabs.</NuxtLink
    >
    <div class="flex flex-row justify-center w-full gap-14">
      <div>
        <NuxtLink
          to="/about"
          class="block uppercase font-bold text-xs tracking-widest hover:translate-y-4 transition-all origin-[50%_50%_0]"
        >
          Services
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="/about"
          class="block uppercase font-bold text-xs tracking-widest"
        >
          Method
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="/about"
          class="block uppercase font-bold text-xs tracking-widest"
        >
          Works
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
