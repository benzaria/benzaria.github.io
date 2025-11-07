
const echo = console.log

async function loadPages() {
    const user = 'benzaria'
    const container = document.querySelector('.links')

    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const repos = await res.json()

    repos.forEach(async (repo) => {
        if (repo.name.toLowerCase() === location.hostname) return
        if (repo.has_pages === false) return

        echo(`adding: ${repo.name}`)

        const a = document.createElement('a')
        a.target = '_blank'
        a.className = 'link-card'
        a.href = `https://${user}.github.io/${repo.name}`
        a.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${repo.name} →`
        container.appendChild(a)
    })
}

loadPages()
