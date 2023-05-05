<script>
	import { images } from "../data";
</script>

<ul class="grid mt-11 gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
	{#each images as { image, name }, index (index)}
		<li class="overflow-hidden relative group">
			<img
				class="object-cover object-center group-hover:scale-105 transition duration-500 w-full h-full"
				src={image}
				alt={`image-${index + 1}`}
			/>
			<div
				class="flex absolute inset-0 flex-col justify-end items-start m-4 md:m-8 overflow-hidden"
			>
				<div
					class="flex flex-col gap-1 xl:translate-x-[-105%] xl:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500 text-left"
				>
					<h2
						class="bg-secondary-400 self-start text-white text-base md:text-lg xl:text-2xl font-bold font-jakarta px-5 py-2 xl:py-2.5"
					>
						{name}
					</h2>
					<span
						class="bg-secondary-400 self-start text-white text-xs xl:text-xl px-3 xl:px-5 py-2"
						>Creative</span
					>
				</div>
			</div>
		</li>
	{/each}
</ul>
