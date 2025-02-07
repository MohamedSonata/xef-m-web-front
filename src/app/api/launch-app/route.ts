// import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function LUNCHAPP(packageId: string) {
  try {
    
    
    // Launch app using shell:AppsFolder
    const command = `powershell.exe start-Process "shell:AppsFolder\\${packageId}"`;
    await execAsync(command);
    
    return  true;
  } catch (error) {
    console.error('Error launching app:', error);
    return false;
  }
} 