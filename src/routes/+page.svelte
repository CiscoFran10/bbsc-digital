<script>
	import Header from "../components/Header.svelte";
	import Nature from "../assets/images/nature.jpg";
	import Arrow from "../assets/icons/arrow.svg";
	import WinnersGrid from "../components/WinnersGrid.svelte";
</script>

<div class="bg-primary">
	<Header />

	<section class="container-wrapper">
		<div class="flex relative h-[400px] md:h-[640px]">
			<div class="relative h-full w-full">
				<img
					class="h-full w-full object-cover object-center"
					src={Nature}
					alt="Passaro azul"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-b from-secondary-400/0 to-secondary-400/40"
				/>
			</div>
			<div
				class="absolute inset-0 flex flex-col w-full justify-end items-end p-5 md:p-10 gap-1 md:gap-3"
			>
				<span
					class="text-white/50 text-xs md:text-base font-normal leading-none"
					>November 1, 2022</span
				>
				<h2
					class="text-base sm:text-xl md:text-3xl font-bold font-jakarta text-white"
				>
					Nature Cover
				</h2>
				<ul class="flex gap-2 items-center mt-2">
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
			class=" mt-4 md:mt-8 flex flex-col lg:flex-row items-start gap-5 justify-between"
		>
			<div>
				<h1 class="text-4xl sm:text-5xl md:text-7xl font-bold font-jakarta">
					Element of the Day
				</h1>
				<p class="text-sm sm:text-base md:text-xl text-secondary-300 mt-2">
					Pgnissimos ducimus qui blanditiis praesentium.
				</p>
			</div>

			<button
				class="font-jakarta font-semibold py-3 md:py-4 px-8 md:px-10 text-white bg-accent rounded-[10px] hover:bg-accent/70 transition duration-300"
				>View More</button
			>
		</div>

		<div class="flex justify-center w-full mt-8 md:mt-14 translate-y-10">
			<div
				class="bg-white animate-[bounce_1.2s_ease_infinite] p-5 rounded-full h-16 w-16 flex items-center justify-center shadow-md"
			>
				<img class="rotate-90" src={Arrow} alt="" />
			</div>
		</div>
	</section>
</div>

<WinnersGrid />
