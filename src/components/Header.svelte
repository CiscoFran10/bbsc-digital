<script>
	let Logo = "/logo.png";
	import Search from "../assets/icons/search.svg";
	import Shopping from "../assets/icons/shopping-bag.svg";
	import Menu from "../assets/icons/menu.svg";
</script>

<header class="bg-primary">
	<div class="container-wrapper py-10 flex items-center justify-between">
		<img src={Logo} alt="" />

		<nav>
			<ul class="flex items-center gap-5 md:gap-7">
				<li>
					<button
						><img src={Search} alt="" /><span class="sr-only"
							>Pesquisar<span /></span
						></button
					>
				</li>
				<li>
					<button
						><img src={Shopping} alt="" /><span class="sr-only">Carrinho</span
						></button
					>
				</li>
				<li>
					<button
						><img src={Menu} alt="" /><span class="sr-only">Menu</span></button
					>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="postcss">
</style>
