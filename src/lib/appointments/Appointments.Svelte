<script lang="ts">
	import { appointments } from '../../store/appointments';
	import Appointment from './Appointment.svelte';


</script>

<div class="border border-gray-300 rounded-lg p-4">
	<h2 class="text-lg font-bold mb-4">My Appointments</h2>
	<ul>
		{#each $appointments as appointment (appointment.id)}
			<Appointment {appointment} />
		{/each}
	</ul>
</div>
