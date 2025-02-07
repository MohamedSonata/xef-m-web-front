import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function checkAppInstalled() {
  try {
    const command = 'powershell.exe Get-AppxPackage *xefromirror* | Select-Object -ExpandProperty PackageFamilyName';
    const { stdout } = await execAsync(command);
    
    const packageId = stdout.trim();
    return packageId || null;
  } catch (error) {
    console.error('Error checking app:', error);
    return null;
  }
}

export async function launchApp(packageId: string) {
  try {
    const command = `powershell.exe start-Process "shell:AppsFolder\\${packageId}"`;
    await execAsync(command);
    return true;
  } catch (error) {
    console.error('Error launching app:', error);
    return false;
  }
} 