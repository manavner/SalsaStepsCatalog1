import { SalsaStep } from '@/types/SalsaStep';

const SHEET_ID = '1lHXna6z1NX3UNEQ-ujRVr3BF8MFY05_z1H7TUKPVuhM';

export async function loadStepsData(): Promise<SalsaStep[]> {
  try {
    // Multiple cache busting strategies
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0&cachebust=${timestamp}&rand=${random}&_=${timestamp}`;
    
    console.log('Fetching from URL:', csvUrl);
    
    const response = await fetch(csvUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'If-Modified-Since': 'Thu, 01 Jan 1970 00:00:00 GMT'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    console.log('Raw CSV length:', csvText.length);
    console.log('First 300 chars:', csvText.substring(0, 300));
    
    // Look for the specific step in raw data
    const hasEnchufala = csvText.toLowerCase().includes('enchufala con chufala');
    console.log('Raw CSV contains "enchufala con chufala":', hasEnchufala);
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
  
  console.log('Total data lines to parse:', dataLines.length);
  
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
  }).filter(step => {
    const hasName = !!step.stepName;
    if (step.stepName.toLowerCase().includes('enchufala con chufala')) {
      console.log('Parsed Enchufala step:', step);
    }
    return hasName;
  }); // Filter out empty rows
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