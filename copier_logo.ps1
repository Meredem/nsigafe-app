# Script pour copier le logo vers le site
# Remplacez CHEMIN_VERS_VOTRE_LOGO par le chemin réel de votre fichier logo

# Exemple d'utilisation :
# Copy-Item "C:\Users\aboub\Desktop\mon_logo.jpg" ".\logo_club.jpg"

Write-Host "Script de copie du logo" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green
Write-Host ""
Write-Host "Pour utiliser ce script :" -ForegroundColor Yellow
Write-Host "1. Modifiez la ligne Copy-Item ci-dessous avec le chemin de votre logo" -ForegroundColor Yellow
Write-Host "2. Exécutez le script" -ForegroundColor Yellow
Write-Host ""
Write-Host "Exemple :" -ForegroundColor Green
Write-Host "Copy-Item 'C:\Users\aboub\Pictures\logo_bouba_mane.jpg' '.\logo_club.jpg'" -ForegroundColor Cyan
Write-Host ""

# Ligne à modifier - remplacez le chemin par votre fichier logo
# Copy-Item "CHEMIN_VERS_VOTRE_LOGO_ICI" ".\logo_club.jpg"

Write-Host "Logo copié avec succès !" -ForegroundColor Green