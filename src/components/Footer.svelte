<script>
	import Facebook from "../assets/icons/social/facebook.svg";
	import Twitter from "../assets/icons/social/twitter.svg";
	import Behance from "../assets/icons/social/dribbble.svg";
	import Instagram from "../assets/icons/social/instagram.svg";
	import Newsletter from "../assets/icons/newsletter.svg";
	import Send from "../assets/icons/send.svg";

	const social = [Facebook, Twitter, Behance, Instagram];
</script>

<footer class="bg-secondary-400 text-white px-4 h-full">
	<div class="max-w-7xl mx-auto">
		<div
			class="flex flex-col justify-center items-center gap-6 h-full pt-28 max-w-4xl mx-auto"
		>
			<img src={Newsletter} alt="Enviar" />

			<p class="text-2xl md:text-4xl max-w-[18ch] text-center font-bold">
				Get the best blog stories into your inbox!
			</p>

			<div class="relative w-full">
				<label>
					<span class="sr-only">Sign newsletter</span>
					<input
						type="text"
						class="bg-[#171A24] w-full rounded-lg h-14 px-5 text-white placeholder:text-secondary-200"
						placeholder="Enter Your Email Address"
					/>
				</label>
				<button
					class="text-white absolute right-0 inset-y-0 px-4 flex items-center gap-3 border-l bg-[#171a24] border-secondary-300/40"
				>
					<img aria-hidden="true" src={Send} alt="" />
					Subscribe</button
				>
			</div>
		</div>

		<div
			class="flex flex-col md:flex-row md:items-center gap-20 gap-y-7 justify-between py-[60px] mt-10 border-t border-secondary-100"
		>
			<p class="text-xs text-secondary-100">
				AxiomThemes © 2023. All Rights Reserved.
			</p>

			<ul class="flex items-center gap-4">
				<li>Home</li>
				<li>Pricing</li>
				<li>Shop</li>
				<li>Shop</li>
			</ul>

			<ul class="flex items-center gap-4">
				{#each social as icon, index (index)}
					<li
						class="p-2 flex items-center justify-center flex-1 rounded-lg bg-[#171A24]"
					>
						<img src={icon} alt="" />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
