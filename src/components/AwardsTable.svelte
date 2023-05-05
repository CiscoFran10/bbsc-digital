<script>
	import { awards } from "../data";
</script>

<div class="relative overflow-x-auto max-w-5xl mx-auto p-4 mt-20">
	<table
		class="w-full text-left font-jakarta font-bold text-secondary-400 text-lg"
	>
		<thead class=" border-b border-secondary-400 hidden md:table-header-group">
			<tr>
				<th scope="col" class="px-0 py-8"> # </th>
				<th scope="col" class="px-6 py-8"> Award </th>
				<th scope="col" class="px-6 py-8"> Type </th>
				<th scope="col" class="px-6 py-8"> Project </th>
				<th scope="col" class="px-6 py-8 opacity-0"> Year </th>
			</tr>
		</thead>
		<tbody>
			{#each awards as { name, type, project, year }, index (index)}
				<tr class="border-b border-secondary-400/10">
					<td class="table-cell md:hidden py-4">
						<h2>{name}</h2>
						<p>{type}</p>
						<p>{project}</p>
					</td>

					<td class="hidden md:table-cell px-0">0{index + 1}</td>
					<th
						scope="row"
						class="hidden md:table-cell px-6 py-8 whitespace-nowrap"
					>
						{name}
					</th>
					<td class="hidden md:table-cell px-6 py-4"> {type} </td>
					<td class="hidden md:table-cell px-6 py-4"> {project} </td>
					<td
						class="px-6 py-4 text-secondary-200 text-end align-bottom md:align-middle"
					>
						{year}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
