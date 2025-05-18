Write-Host "Checking for processes using port 9010..."

$Processes = Get-NetTCPConnection -LocalPort 9010 -State Listen -ErrorAction SilentlyContinue | ForEach-Object {
    Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
}

if ($Processes) {
    Write-Host "Processes found using port 9010. Terminating them..."
    foreach ($Process in $Processes) {
        Write-Host "Terminating process: $($Process.ProcessName) (ID: $($Process.Id))"
        Stop-Process -Id $Process.Id -Force -ErrorAction SilentlyContinue
    }
    Write-Host "Port 9010 is now free."
}
else {
    Write-Host "No processes found using port 9010. The port is already free."
}