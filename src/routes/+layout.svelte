<script>
	import '../app.css';
	let workoutlink= `/workout/[id]`;
</script>

<svelte:head>
	<title>Appointments</title>
</svelte:head>
<nav class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
	<a href="/" class="text-xl font-bold">Home</a>
	<a href={workoutlink} class="text-xl font-bold">Workout Section</a>
</nav>

<slot />
