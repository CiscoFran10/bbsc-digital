<script>
	import Header from "../components/Header.svelte";
	import Nature from "../assets/images/nature.jpg";
	import Arrow from "../assets/icons/arrow.svg";
	import WinnersGrid from "../components/WinnersGrid.svelte";
	import AwardsTable from "../components/AwardsTable.svelte";
	import Marquee from "../components/Marquee.svelte";
	import About from "../components/About.svelte";
	import ArticleCard from "../components/ArticleCard.svelte";
	import { articles } from "../data";
</script>

<main>
	<section class="container-wrapper bg-primary">
		<div class="flex relative h-[400px] md:h-[640px]">
			<div class="relative w-full h-full">
				<img
					class="object-cover object-center w-full h-full"
					src={Nature}
					alt="Passaro azul"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-b from-secondary-400/0 to-secondary-400/40"
				/>
			</div>
			<div
				class="absolute inset-0 flex flex-col items-end justify-end w-full gap-1 p-5 md:p-10 md:gap-3"
			>
				<span
					class="text-xs font-normal leading-none text-white/50 md:text-base"
					>November 1, 2022</span
				>
				<h2
					class="text-base font-bold text-white sm:text-xl md:text-3xl font-jakarta"
				>
					Nature Cover
				</h2>
				<ul class="flex items-center gap-2 mt-2">
					<li
						class="bg-secondary-400 text-white rounded-lg py-1.5 px-2 md:py-3 md:px-4 text-xs md:text-sm font-medium font-jakarta"
					>
						Brand
					</li>
					<li
						class="bg-secondary-400 text-white rounded-lg py-1.5 px-2 md:py-3 md:px-4 text-xs md:text-sm font-medium font-jakarta"
					>
						Covers
					</li>
					<li
						class="bg-secondary-400 text-white rounded-lg py-1.5 px-2 md:py-3 md:px-4 text-xs md:text-sm font-medium font-jakarta"
					>
						Ideas
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col items-start justify-between gap-5 mt-4 md:mt-8 lg:flex-row"
		>
			<div>
				<h1 class="text-4xl font-bold sm:text-5xl md:text-7xl font-jakarta">
					Element of the Day
				</h1>
				<p class="mt-2 text-sm sm:text-base md:text-xl text-secondary-300">
					Pgnissimos ducimus qui blanditiis praesentium.
				</p>
			</div>

			<button
				class="font-jakarta font-semibold py-3 md:py-4 px-8 md:px-10 text-white bg-accent rounded-[10px] hover:bg-accent/70 transition duration-300"
				>View More</button
			>
		</div>

		<div class="flex justify-center w-full mt-8 translate-y-10 md:mt-14">
			<div
				class="bg-white animate-[bounce_1.2s_ease_infinite] p-5 rounded-full h-16 w-16 flex items-center justify-center shadow-md"
			>
				<img class="rotate-90" src={Arrow} alt="" />
			</div>
		</div>
	</section>

	<section class="mt-20 container-wrapper md:mt-40">
		<div class="flex flex-col items-center justify-center gap-4 max-5wl">
			<h1 class="text-sm font-medium font-jakarta">WINNERS</h1>
			<p
				class="max-w-4xl text-2xl font-bold text-center font-jakarta sm:text-4xl md:text-6xl"
			>
				See our latest winners and get inspired!
			</p>
		</div>
		<WinnersGrid />
	</section>

	<section class="py-16 mt-20 bg-primary md:mt-40">
		<Marquee />
		<AwardsTable />
	</section>

	<section class="mt-20 md:mt-28">
		<div class="flex flex-col items-center justify-center gap-4 max-5wl">
			<h1 class="text-sm font-medium font-jakarta">WHO WE ARE</h1>
			<p
				class="font-jakarta font-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl max-w-[25ch] text-center"
			>
				Explore the power of AI tools, developed with ingenuity, brilliance,
				quality and style_
			</p>

			<div class="mt-3 text-center">
				<h2 class="text-lg font-bold font-jakarta">Peter Bowman</h2>
				<p class="text-base text-secondary-200">Creative Director</p>
			</div>
		</div>

		<About />
	</section>

	<section class="my-16 md:my-[160px] max-w-[1296px] mx-auto px-4">
		<h1 class="text-sm font-medium font-jakarta">BLOG</h1>

		<div
			class="flex flex-col justify-between mt-2 lg:flex-row gap-y-4 lg:items-center"
		>
			<p
				class="font-jakarta font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl min-w-[15ch]"
			>
				Check Our Recent Articles
			</p>
			<div class="flex flex-col gap-4 text-secondary-300 max-w-[50ch]">
				<p>
					Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitacion
					ullamco.
				</p>
				<p>
					Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam.
				</p>
			</div>
		</div>

		<ul class="flex flex-col mt-10 md:flex-row gap-7 gap-y-12 md:mt-20">
			{#each articles as article (article.title)}
				<ArticleCard {...article} />
			{/each}
		</ul>
	</section>
</main>
