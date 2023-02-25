<script lang="ts">
	import { onMount } from 'svelte';
    import type { Appointment } from '../../store/appointments';
    
    export let appointment: Appointment;
	let container: HTMLDivElement;

onMount(() => {
	container.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const halfWidth = container.offsetWidth / 2;
  const scrollPosition = container.scrollLeft + container.offsetWidth;
  if (scrollPosition > halfWidth) {
    window.location.href = `/workout/${appointment.id}`;
    container.removeEventListener('scroll', handleScroll);
  }
};

</script>

	<div class="bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-4 
	mb-0 overflow-x-scroll ... w-32 h-fit mr-24 "  bind:this={container}>
	  <h2 class="text-lg font-bold mb-4 ">{appointment.title}</h2>
	  <p class="text-gray-500">{appointment.date} at {appointment.time}</p>
	  <div class="mt-4 flex justify-end">
		<button class="bg-blue-500 hover:bg-red-600 text-white rounded-lg px-4 py-2" >
		  scroll for more details
		</button>
	  </div>
	
  </div>
  




