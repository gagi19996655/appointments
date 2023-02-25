<script lang="ts">
	import type { Appointment } from '../../store/appointments';
	
	export let appointment: Appointment;

</script>

<div class="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
	<h2 class="text-lg font-bold mb-4">{appointment.title}</h2>
	<p class="text-gray-500">{appointment.date} at {appointment.time}</p>
	<!-- <p class="mt-4">{appointment.description}</p> -->
	<div class="mt-4 flex justify-end">
		<button
			class="bg-blue-500 hover:bg-red-600 text-white rounded-lg px-4 py-2"
			data-testid="cancel-button">more details</button
		>
	</div>
</div>



