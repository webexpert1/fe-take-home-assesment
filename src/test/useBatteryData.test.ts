import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useBatteryData } from '@/composables/useBatteryData';
import type { BatteryReading } from '@/types';

// Mock the imported batteryData
const mockBatteryData: BatteryReading[] = [
  {
    academyId: 1,
    batteryLevel: 0.8,
    employeeId: 'EMP001',
    serialNumber: 'SN001',
    timestamp: '2023-01-01T10:00:00Z',
  },
  {
    academyId: 2,
    batteryLevel: 0.5,
    employeeId: 'EMP002',
    serialNumber: 'SN002',
    timestamp: '2023-01-02T11:00:00Z',
  },
  {
    academyId: 1,
    batteryLevel: 0.9,
    employeeId: 'EMP001',
    serialNumber: 'SN003',
    timestamp: '2023-01-03T12:00:00Z',
  },
  {
    academyId: 3,
    batteryLevel: 0.7,
    employeeId: 'EMP003',
    serialNumber: 'SN004',
    timestamp: '2023-01-04T13:00:00Z',
  },
];

// Mock the direct import of battery.json
import batteryJsonModule from '../data/battery.json';

// ✅ Define your mock inside the factory
vi.mock('@/data/battery.json', () => {
    const mockBatteryData: BatteryReading[] = [
      {
        academyId: 1,
        batteryLevel: 0.8,
        employeeId: 'EMP001',
        serialNumber: 'SN001',
        timestamp: '2023-01-01T10:00:00Z',
      },
      {
        academyId: 2,
        batteryLevel: 0.5,
        employeeId: 'EMP002',
        serialNumber: 'SN002',
        timestamp: '2023-01-02T11:00:00Z',
      },
      {
        academyId: 1,
        batteryLevel: 0.9,
        employeeId: 'EMP001',
        serialNumber: 'SN003',
        timestamp: '2023-01-03T12:00:00Z',
      },
      {
        academyId: 3,
        batteryLevel: 0.7,
        employeeId: 'EMP003',
        serialNumber: 'SN004',
        timestamp: '2023-01-04T13:00:00Z',
      },
    ];
  
    return {
      default: mockBatteryData,
    };
  });

const originalBatteryJson = batteryJsonModule;

describe('useBatteryData', () => {
  let useBatteryDataComposable: ReturnType<typeof useBatteryData>;

  // Before each test, re-initialize the composable and mock data
  beforeEach(() => {
    // Reset the actual import before each test to our mock
    Object.defineProperty(batteryJsonModule, 'default', {
      value: mockBatteryData,
      writable: true,
    });
    useBatteryDataComposable = useBatteryData();
    useBatteryDataComposable.fetchData(); // Manually call fetchData
  });

  it('should load all battery readings correctly', () => {
    expect(useBatteryDataComposable.allReadings.value).toEqual(mockBatteryData);
    expect(useBatteryDataComposable.allReadings.value.length).toBe(4);
  });

  it('should filter readings by employeeId', () => {
    useBatteryDataComposable.searchTerm.value = 'emp001';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(2);
    expect(useBatteryDataComposable.filteredReadings.value[0].employeeId).toBe('EMP001');
    expect(useBatteryDataComposable.filteredReadings.value[1].employeeId).toBe('EMP001');
  });

  it('should filter readings by serialNumber', () => {
    useBatteryDataComposable.searchTerm.value = 'sn002';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(1);
    expect(useBatteryDataComposable.filteredReadings.value[0].serialNumber).toBe('SN002');
  });

  it('should return all readings if searchTerm is empty', () => {
    useBatteryDataComposable.searchTerm.value = '';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(4);
    expect(useBatteryDataComposable.filteredReadings.value).toEqual(mockBatteryData);
  });

  it('should handle no matching results', () => {
    useBatteryDataComposable.searchTerm.value = 'nonexistent';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(0);
  });

  it('should be case-insensitive for search', () => {
    useBatteryDataComposable.searchTerm.value = 'eMp001';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(2);
    useBatteryDataComposable.searchTerm.value = 'Sn003';
    expect(useBatteryDataComposable.filteredReadings.value.length).toBe(1);
  });
});