// import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function CHECKAPPINSTALLED() {
  try {
    // PowerShell command to search for app in AppsFolder
    const command = 'powershell.exe Get-AppxPackage *xefromirror* | Select-Object -ExpandProperty PackageFamilyName';
    const { stdout } = await execAsync(command);
    
    // Clean up the output and get package ID
    const packageId = stdout.trim();
    
    if (packageId) {
      return packageId;
    }
    
    return packageId;
  } catch (error) {
    console.error('Error checking app:', error);
    return null;
  }
} 