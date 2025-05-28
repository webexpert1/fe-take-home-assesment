<script setup lang="ts">
import { useBatteryData } from '../composables/useBatteryData';
import { onMounted } from 'vue';

const { searchTerm, filteredReadings, fetchData } = useBatteryData();

onMounted(() => {
  fetchData(); // Load data when the component mounts
});
</script>

<template>
  <div class="font-sans p-6 md:p-8 max-w-6xl mx-auto bg-gray-50"> 
    <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
      Battery Readings Dashboard
    </h1>

    <div class="bg-white p-6 rounded-lg shadow-sm mb-8 text-center border border-gray-200">
      <label for="search" class="block text-lg font-semibold text-gray-700 mb-2">
        Search by Employee ID or Serial Number:
      </label>
      <input
        type="text"
        id="search"
        v-model="searchTerm"
        placeholder="e.g., T1007384 or 1805C67HD02259"
        class="p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full md:w-96 mx-auto transition-all duration-200 text-white"
      />
    </div>

    <div v-if="filteredReadings.length === 0 && searchTerm" class="text-center text-gray-600 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <p class="text-lg font-medium">No matching records found for "{{ searchTerm }}".</p>
    </div>
    <div v-else-if="filteredReadings.length === 0" class="text-center text-gray-600 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <p class="text-lg font-medium">No battery data available.</p>
    </div>
    <div v-else
      class="bg-white rounded-lg shadow-md border border-gray-200
             overflow-x-auto overflow-y-auto custom-scrollbar"
      style="max-height: calc(100vh - 20rem);" >
      <table class="w-full border-collapse">
        <thead class="bg-gray-100 sticky top-0 z-10"> <tr>
            <th class="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Academy ID</th>
            <th class="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Employee ID</th>
            <th class="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Serial Number</th>
            <th class="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Battery Level</th>
            <th class="p-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(reading, index) in filteredReadings" 
            :key="reading.serialNumber + reading.timestamp + index" 
            class="even:bg-gray-50 hover:bg-gray-200 transition-colors duration-150"
          >
            <td class="p-4 text-left text-gray-800 border-b border-gray-200">{{ reading.academyId }}</td>
            <td class="p-4 text-left text-gray-800 border-b border-gray-200">{{ reading.employeeId }}</td>
            <td class="p-4 text-left text-gray-800 border-b border-gray-200">{{ reading.serialNumber }}</td>
            <td class="p-4 text-left text-gray-800 border-b border-gray-200">{{ (reading.batteryLevel * 100).toFixed(0) }}%</td>
            <td class="p-4 text-left text-gray-800 border-b border-gray-200 whitespace-nowrap">{{ new Date(reading.timestamp).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>