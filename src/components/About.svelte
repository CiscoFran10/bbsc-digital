<script>
	import { about, numbers } from "../data";
</script>

<div class="w-full mt-14 md:mt-24">
	<ul
		class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr] grid-rows-2 md:max-h-[960px]"
	>
		{#each about as { image, name }, index (image)}
			<li
				class={`h-full relative w-full overflow-hidden group ${
					index === 0 ? "sm:row-span-2" : ""
				}`}
			>
				<img
					class="object-cover object-center group-hover:scale-105 transition duration-500 w-full h-full"
					src={image}
					alt={`image-${index + 1}`}
				/>
				<div
					class="flex absolute inset-0 flex-col justify-end items-start m-4 md:m-8 overflow-hidden"
				>
					<div
						class="flex flex-col gap-1 xl:translate-x-[-105%] xl:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500"
					>
						<h2
							class="bg-secondary-400 self-start text-white text-base md:text-lg xl:text-2xl font-bold font-jakarta px-5 py-2 xl:py-2.5"
						>
							{name}
						</h2>
						<span
							class="bg-secondary-400 self-start text-white text-xs xl:text-xl px-3 xl:px-5 py-2"
							>Design</span
						>
					</div>
				</div>
			</li>
		{/each}
	</ul>

	<ul
		class="grid grid-cols-2 md:flex items-center justify-center max-w-7xl mx-auto py-14 md:py-[100px] gap-y-7 border-b border-secondary-400/10"
	>
		{#each numbers as { name, value } (name)}
			<li
				class="relative flex items-center justify-center border-r last:border-0 flex-1"
			>
				<span class="text-primary font-bold text-7xl sm:text-8xl md:text-9xl"
					>{value}</span
				>
				<h2
					class="absolute inset-0 flex items-center justify-center font-bold font-jakarta text-base sm:text-xl md:text-2xl"
				>
					{name}
				</h2>
			</li>
		{/each}
	</ul>
</div>
