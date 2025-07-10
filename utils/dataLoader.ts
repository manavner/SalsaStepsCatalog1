import { SalsaStep } from '@/types/SalsaStep';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/1lHXna6z1NX3UNEQ-ujRVr3BF8MFY05_z1H7TUKPVuhM/export?format=csv';

export async function loadStepsData(): Promise<SalsaStep[]> {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error loading steps data:', error);
    throw error;
  }
}

function parseCSV(csvText: string): SalsaStep[] {
  const lines = csvText.trim().split('\n');
  
  // Skip header row
  const dataLines = lines.slice(1);
  
  return dataLines.map(line => {
    // Simple CSV parsing - handles basic cases
    const values = parseCSVLine(line);
    
    return {
      level: values[0]?.trim() || '',
      stepName: values[1]?.trim() || '',
      originalCount: values[2]?.trim() || '',
      type: values[3]?.trim() || '',
      link: values[4]?.trim() || '',
    };
  }).filter(step => step.stepName); // Filter out empty rows
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  return values;
}