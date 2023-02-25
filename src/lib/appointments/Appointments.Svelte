<script lang="ts">
	import { appointments } from '../../store/appointments';
	import AppointmentPreview from './AppointmentPreview.svelte';
</script>

<div class="border border-gray-300 rounded-lg p-4">
	<h2 class="text-lg font-bold mb-4">My Appointments</h2>
	<div class="flex sm:flex-col h-full ">
	  {#each $appointments as appointment (appointment.id)}
	 
		<AppointmentPreview {appointment} />
	 
		
	  {/each}
	</div>
  </div>
  
  
