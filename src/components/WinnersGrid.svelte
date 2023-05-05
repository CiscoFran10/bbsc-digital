<script>
	import images from "../assets/images/winners";
</script>

<section class="container-wrapper mt-20 md:mt-40">
	<div class="max-5wl justify-center items-center flex flex-col gap-4">
		<h1 class="font-jakarta text-sm font-medium">WINNERS</h1>
		<p
			class="font-jakarta font-bold text-2xl sm:text-4xl md:text-6xl max-w-4xl text-center"
		>
			See our latest winners and get inspired!
		</p>
	</div>

	<ul class="grid mt-11 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		{#each images as image, index (index)}
			<li>
				<img
					class="object-cover object-center"
					src={image}
					alt={`image-${index + 1}`}
				/>
			</li>
		{/each}
	</ul>
</section>
