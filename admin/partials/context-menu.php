<div id="context-menu" class="hidden opacity-0 duration-200 ease-in-out transition-all select-none rounded py-1">
    <ul x-context></ul>
</div>

<template id="bb-block-context-menu-item">
    <li class="context-menu-item">
        <a class="flex items-center text-white text-sm px-4 py-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:18px;" class="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {label}
        </a>
    </li>
</template>

<template id="bb-block-context-dropdown-menu-item">
    <li class="context-menu-item dropdown" x-action="dropdown">
        <a x-button class="flex items-center justify-between text-white text-sm px-4 py-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <span class="flex">
                <svg xmlns=" http://www.w3.org/2000/svg" style="width:18px;" class="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                {label}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" style="width:18px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </a>
        <ul x-target class="dropdown"></ul>
    </li>
</template>