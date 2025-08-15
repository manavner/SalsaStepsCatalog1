import { SalsaStep } from '@/types/SalsaStep';

// Published Google Sheets CSV URL (export specific sheet by gid)
const PUBLISHED_CSV_URL = 'https://docs.google.com/spreadsheets/d/1lHXna6z1NX3UNEQ-ujRVr3BF8MFY05_z1H7TUKPVuhM/export?format=csv&gid=205106662';

// Fallback data in case Google Sheets is not accessible
const FALLBACK_DATA: SalsaStep[] = [
  {
      level: 'Beginner',
    stepName: 'Siete',
    originalCount: '1',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=XKtt8CB7J3M'
  },
  {
    level: 'Intermediate',
    stepName: 'Three way stop',
    originalCount: '3',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=j6Di28x1RjI'
  },
  {
    level: 'Intermediate',
    stepName: 'Siete Moderno',
    originalCount: '2',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=YFVtFvu7GTk'
  },
  {
    level: 'Intermediate',
    stepName: 'Siete doble',
    originalCount: '2',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=DWgF777lX4Y'
  },
  {
    level: 'Intermediate',
    stepName: 'Siete Coca Cola',
    originalCount: '2',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=73STWQdEE7M'
  },
  {
    level: 'Intermediate',
    stepName: 'Setenta y Cinco',
    originalCount: '3',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=X2DyBUaCZ8g'
  },
  {
    level: 'Intermediate',
    stepName: 'Setenta Complicado',
    originalCount: '4',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=iBhFE1XJu2Q'
  },
  {
    level: 'Intermediate',
    stepName: 'Setenta',
    originalCount: '4',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=fxcXu6gmyu8'
  },
  {
    level: 'Intermediate',
    stepName: 'Rueda de Tiempo España (Taro)',
    originalCount: '1',
    type: 'Tiempo espania',
    link: 'http://www.youtube.com/watch?v=tCnZZHEfbQI'
  },
  {
    level: 'Intermediate',
    stepName: 'Prima con la Hermana',
    originalCount: '3',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=iWJDuhiVs-E'
  },
  {
    level: 'Intermediate',
    stepName: 'Ocho',
    originalCount: '2',
    type: 'Hombres el centro',
    link: 'https://www.youtube.com/watch?v=Vk3XDh4k_Q8'
  },
  {
    level: 'Intermediate',
    stepName: 'Ochenta',
    originalCount: '3',
    type: 'Hombres el centro',
    link: 'https://www.youtube.com/watch?v=PuB34PS0-5w'
  },
  {
    level: 'Intermediate',
    stepName: 'Montana',
    originalCount: '4',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=eWHH4JYQe_o'
  },
  {
    level: 'Intermediate',
    stepName: 'La pelota',
    originalCount: '1',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=7MFz-fyMhPs'
  },
  {
    level: 'Intermediate',
    stepName: 'Hombres el centro',
    originalCount: '1',
    type: 'Hombres el centro',
    link: 'https://www.youtube.com/watch?v=joxuPhdcw6Q'
  },
  {
    level: 'Intermediate',
    stepName: 'Havana',
    originalCount: '6',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=QsezvdEgPkE'
  },
  {
    level: 'Intermediate',
    stepName: 'Flamenco',
    originalCount: '3',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=geb756OHGFA'
  },
  {
    level: 'Intermediate',
    stepName: 'Festival Prima',
    originalCount: '11',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=fcLxYzdqjrc'
  },
  {
    level: 'Intermediate',
    stepName: 'Festival Bueno Malo',
    originalCount: '6',
    type: 'Rueda',
    link: 'https://www.youtube.com/watch?v=yZ8bT8zAMJ0'
  },
  {
    level: 'Intermediate',
    stepName: 'Festival Balagan',
    originalCount: '9',
    type: 'Rueda',
    link: 'https://www.youtube.com/watch?v=MY_YF-V7usg'
  },
  {
    level: 'Intermediate',
    stepName: 'Evelin',
    originalCount: '2',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=6m0EuDJu_As'
  },
  {
    level: 'Intermediate',
    stepName: 'Enchufala con chufala',
    originalCount: '3',
    type: 'Rueda',
    link: 'https://www.youtube.com/watch?v=0tuCW9oxx_Y'
  },
  {
    level: 'Intermediate',
    stepName: 'Dile que no',
    originalCount: '3',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=4EtKcVnmOVM'
  },
  {
    level: 'Advanced',
    stepName: 'Thalia',
    originalCount: '6',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=cThYwpFWbyQ'
  },
  {
    level: 'Intermediate',
    stepName: 'Sombrero y laso',
    originalCount: '3',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=EMMMdJqtmpM'
  },
  {
    level: 'Advanced',
    stepName: 'Sombrero por debajo complicado',
    originalCount: '8',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=zik0vGLEkmE'
  },
  {
    level: 'Advanced',
    stepName: 'Sombrero por Debajo',
    originalCount: '4',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=KWRm1gTj1Xg'
  },
  {
    level: 'Advanced',
    stepName: 'Sombrero Doble',
    originalCount: '4',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=WSYNp3iu1ks'
  },
  {
    level: 'Advanced',
    stepName: 'Sombrero de Regnier',
    originalCount: '7',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=lfm2QGgO9VQ'
  },
  {
    level: 'Advanced',
    stepName: 'Sombrero de Manny',
    originalCount: '5',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=-Tp4eI0kWrY'
  },
  {
    level: 'Advanced',
    stepName: 'Sombra',
    originalCount: '2',
    type: 'Rueda',
    link: 'https://www.youtube.com/watch?v=tglU8IswgeM'
  },
  {
    level: 'Advanced',
    stepName: 'Siete Setenta',
    originalCount: '5',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=GK03gkoTeGw'
  },
  {
    level: 'Advanced',
    stepName: 'Siete Loco',
    originalCount: '5',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=2ac45ElWQfY'
  },
  {
    level: 'Advanced',
    stepName: 'Setenta Nuevo',
    originalCount: '4',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=ccpDxJsrOns'
  },
  {
    level: 'Advanced',
    stepName: 'Setenta con setenta',
    originalCount: '6',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=eQJ7XesUNFQ'
  },
  {
    level: 'Advanced',
    stepName: 'Rubenada',
    originalCount: '6',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=WYMG6S7lofY&list=PLD9CA9B81A0346EB3&index=14'
  },
  {
    level: 'Advanced',
    stepName: 'Puente pitria',
    originalCount: '6',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=qJAV6NhI42M'
  },
  {
    level: 'Advanced',
    stepName: 'Puente',
    originalCount: '4',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=QLj6hTsQ4Og'
  },
  {
    level: 'Advanced',
    stepName: 'Prima con Paulito',
    originalCount: '3',
    type: 'Free',
    link: 'http://www.youtube.com/watch?v=6uvgc3zm9pM'
  },
  {
    level: 'Advanced',
    stepName: 'Ponle sabor',
    originalCount: '7',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=uFQehTqZfPg'
  },
  {
    level: 'Advanced',
    stepName: 'Paseala por el Parque',
    originalCount: '8',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=THycmrMHE24'
  },
  {
    level: 'Advanced',
    stepName: 'Noventa',
    originalCount: '8',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=HcnWjZryHGI'
  },
  {
    level: 'Advanced',
    stepName: 'Mona lisa',
    originalCount: '5',
    type: 'Free',
    link: 'https://www.youtube.com/watch?v=f243iSKiFFk'
  },
  {
    level: 'Intermediate',
    stepName: 'Lento aquesta la',
    originalCount: '1',
    type: 'Free',
    link: ''
  }
];

export async function loadStepsData(): Promise<SalsaStep[]> {
  console.log('🔄 Starting data load process...');
  
  try {
    console.log('📥 Attempting to fetch CSV from published URL:', PUBLISHED_CSV_URL);
    
    const response = await fetch(PUBLISHED_CSV_URL, {
      method: 'GET',
      headers: {
        'Accept': 'text/csv,text/plain,*/*',
        'User-Agent': 'Mozilla/5.0 (compatible; SalsaApp/1.0)'
      }
    });
    
    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      console.error('❌ HTTP Error:', response.status, response.statusText);
      
      // Try to get the response text to see the error
      const errorText = await response.text();
      console.log('❌ Error response body:', errorText.substring(0, 500));
      
      console.log('🔄 Falling back to sample data');
      return FALLBACK_DATA;
    }
    
    const csvText = await response.text();
    console.log('✅ Successfully fetched CSV data');
    console.log('📏 CSV length:', csvText.length);
    
    if (csvText.length < 50) {
      console.log('⚠️ CSV seems too short, content:', csvText);
      return FALLBACK_DATA;
    }
    
    // Show first few lines for debugging
    const lines = csvText.split('\n');
    console.log('📝 Total lines:', lines.length);
    console.log('📝 First 3 lines:');
    lines.slice(0, 3).forEach((line, i) => {
      console.log(`  ${i}: ${line}`);
    });
    
    const parsedData = parseCSV(csvText);
    
    if (parsedData.length === 0) {
      console.log('⚠️ No data parsed, using fallback');
      return FALLBACK_DATA;
    }
    
    console.log('✅ Successfully parsed', parsedData.length, 'steps');
    
    // Show sample of parsed data
    console.log('📋 Sample parsed steps:');
    parsedData.slice(0, 2).forEach((step, i) => {
      console.log(`  ${i + 1}. "${step.stepName}" (${step.level}) - ${step.link}`);
    });
    
    return parsedData;
    
  } catch (error) {
    console.error('💥 Error loading data:', error);
    console.log('🔄 Using fallback data due to error');
    return FALLBACK_DATA;
  }
}

function parseCSV(csvText: string): SalsaStep[] {
  const lines = csvText.trim().split('\n');
  
  if (lines.length <= 1) {
    console.log('⚠️ CSV has no data rows');
    return [];
  }
  
  // Skip header row and parse data
  const dataLines = lines.slice(1);
  console.log('🔍 Parsing', dataLines.length, 'data lines');
  
  const steps: SalsaStep[] = [];
  
  dataLines.forEach((line, index) => {
    if (!line.trim()) {
      console.log(`⏭️ Skipping empty line ${index + 2}`);
      return;
    }
    
    try {
      const columns = parseCSVLine(line);
      
      if (columns.length < 4) {
        console.log(`⚠️ Line ${index + 2} has only ${columns.length} columns:`, columns);
        return;
      }
      
      // Normalize level names coming from the sheet
      const rawLevel = (columns[0]?.trim() || 'Unknown');
      const normalizedLevel = rawLevel.toLowerCase().startsWith('begin') ? 'Beginner'
        : rawLevel.toLowerCase().startsWith('inter') ? 'Intermediate'
        : rawLevel.toLowerCase().startsWith('adv') ? 'Advanced'
        : rawLevel;

      const step: SalsaStep = {
        level: normalizedLevel,
        stepName: columns[1]?.trim() || 'Unnamed Step',
        originalCount: columns[2]?.trim() || '8',
        type: columns[3]?.trim() || 'Unknown',
        link: columns[4]?.trim() || ''
      };
      
      // Only include steps with valid names
      if (step.stepName && step.stepName !== 'Unnamed Step') {
        steps.push(step);
        
        if (index < 3) { // Log first few for debugging
          console.log(`✅ Parsed step ${index + 1}:`, {
            name: step.stepName,
            level: step.level,
            link: step.link ? 'Has link' : 'No link'
          });
        }
      }
      
    } catch (parseError) {
      console.log(`❌ Error parsing line ${index + 2}:`, parseError);
    }
  });
  
  console.log(`✅ Successfully parsed ${steps.length} valid steps`);
  return steps;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Handle escaped quotes
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  
  // Clean up quoted values
  return result.map(value => {
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1);
    }
    return value;
  });
}