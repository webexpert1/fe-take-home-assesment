import { ref, computed } from 'vue';
import type { BatteryReading } from '../types';
import batteryData from '../data/battery.json';

export function useBatteryData() {
  const allReadings = ref<BatteryReading[]>([]);
  const searchTerm = ref<string>('');

  // Simulate fetching data (in a real app, this would be an API call)
  const fetchData = () => {
    allReadings.value = batteryData as BatteryReading[];
    console.log('Battery data loaded:', allReadings.value.length, 'records');
  };

  const filteredReadings = computed(() => {
    if (!searchTerm.value) {
      return allReadings.value;
    }
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
    return allReadings.value.filter(reading =>
      reading.employeeId.toLowerCase().includes(lowerCaseSearchTerm) ||
      reading.serialNumber.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return {
    allReadings,
    searchTerm,
    fetchData,
    filteredReadings,
  };
}