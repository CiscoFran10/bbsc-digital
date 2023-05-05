<script>
	export let title;
	export let image;
	export let date;
</script>

<li class="md:last:mt-20">
	<img src={image} alt={title} />

	<div class="mt-7 flex items-center gap-3">
		<span class="text-sm font-medium font-jakarta">TOP RATED </span>
		<span class="inline-block h-1 w-1 rounded-full bg-secondary-200" />
		<span class="text-sm text-secondary-200">{date}</span>
	</div>

	<h2 class="font-bold text-xl sm:text-2xl md:text-3xl mt-3">{title}</h2>
</li>
