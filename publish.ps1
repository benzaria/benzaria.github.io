param(
    [switch]$force
)

$_force = $force ? '--force' : $null
$date = Get-Date -Format 'dddd d/M/yy - h:mm tt'

git add .
git commit -S -m "push benzaria.github.io $date"
git remote add origin "https://benzaria@github.com/benzaria/benzaria.github.io"
git pull origin main $_force
git push origin main $_force
