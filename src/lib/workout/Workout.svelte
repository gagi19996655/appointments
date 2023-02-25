<script lang="ts">
	import { page } from '$app/stores';
	import { appointments, type Appointment } from '../../store/appointments';
	let id: string = $page.params.id;
  let workoutId = parseInt(id);

	let appointmentTitle = '';
	let appointmentBody = '';
	let appointmentDate = '';
	let appointmentTime = '';
	let appointmentId: number | null = null;
	let isCreatingAppointment = true;

	const resetForm = () => {
		appointmentTitle = '';
		appointmentBody = '';
		appointmentDate = '';
		appointmentTime = '';
		appointmentId = null;
		isCreatingAppointment = true;
	};

	const createAppointment = () => {
		const newAppointment: Appointment = {
			id: Date.now(),
			title: appointmentTitle,
			body: appointmentBody,
			date: appointmentDate,
			time: appointmentTime
		};
		appointments.update((allAppointments: any) => [...allAppointments, newAppointment]);
		resetForm();
	};

	const updateAppointment = () => {
		const updatedAppointment: Appointment = {
			id: appointmentId!,
			title: appointmentTitle,
			body: appointmentBody,
			date: appointmentDate,
			time: appointmentTime
		};
		appointments.update((allAppointments: any[]) =>
			allAppointments.map((appointment) => {
				if (appointment.id === appointmentId) {
					return updatedAppointment;
				} else {
					return appointment;
				}
			})
		);
		resetForm();
	};

	const deleteAppointment = (id: number) => {
		appointments.update((allAppointments: any[]) =>
			allAppointments.filter((appointment) => appointment.id !== id)
		);
	};
</script>

<section class="flex flex-col">
	<h2 class="text-xl font-bold mb-4">Appointments</h2>

	<div class="flex flex-col sm:flex-row items-center mb-4">
		<input
			type="text"
			placeholder="Appointment Title"
			class="px-2 py-1 rounded w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
			bind:value={appointmentTitle}
		/>

		<textarea
			class="px-2 py-1 rounded w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 border-black border-2"
			placeholder="Appointment Description"
			bind:value={appointmentBody}
		/>
        <label for="dateInput" class="hidden">yyyy-mm-dd</label>
		<input
		id="dateInput" 
			type="date"
			placeholder="yyyy-mm-dd"
			class="px-2 py-1 rounded w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
			bind:value={appointmentDate}
		/>
		<label for="timeInput" class="hidden">hh:mm</label>
		<input
		id="timeInput"
			type="time"
			placeholder="hh:mm"
			class="px-2 py-1 rounded w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
			bind:value={appointmentTime}
		/>

		{#if isCreatingAppointment}
			<button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={createAppointment}>
				Create
			</button>
		{:else}
			<button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={updateAppointment}>
				Update
			</button>
			<button
				class="px-4 py-2 bg-red-500 text-white rounded ml-2"
				on:click={() => {
					if (appointmentId) {
						deleteAppointment(appointmentId);
					}
					resetForm();
				}}
			>
				Delete
			</button>
		{/if}
	</div>

	<ul class="list-none">
		{#each $appointments as appointment}
		{#if appointment.id === workoutId}
			<li class="border rounded-md px-4 py-2 flex justify-between items-center mb-2">
				<div>
					
					
					<p class="font-bold">{appointment.title}</p>
					<p>{appointment.body}</p>
					<p>
						{appointment.date}
						{appointment.time}
					</p>
				</div>
				<button
					class="px-4 py-2 bg-blue-500 text-white rounded"
					on:click={() => {
						appointmentTitle = appointment.title;
						appointmentBody = appointment.body;
						appointmentDate = appointment.date;
						appointmentTime = appointment.time;
						appointmentId = appointment.id;
						isCreatingAppointment = false;
					}}
				>
					Edit
				</button>
			</li>
			{/if}
		{/each}
	</ul>
</section>
