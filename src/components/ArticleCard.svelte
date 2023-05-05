<script>
	export let title;
	export let image;
	export let date;
</script>

<li class="md:last:mt-20 group">
	<div class="overflow-hidden">
		<img
			class="group-hover:scale-105 transition duration-500"
			src={image}
			alt={title}
		/>
	</div>

	<div class="mt-7 flex items-center gap-3">
		<span class="text-sm font-medium font-jakarta">TOP RATED </span>
		<span class="inline-block h-1 w-1 rounded-full bg-secondary-200" />
		<span class="text-sm text-secondary-200">{date}</span>
	</div>

	<h2 class="font-bold text-xl sm:text-2xl md:text-3xl mt-3">{title}</h2>
</li>
