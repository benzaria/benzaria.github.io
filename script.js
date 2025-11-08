
const echo = console.log
const Doc = document

async function loadPages() {
    const user = 'benzaria'
    const container = Doc.querySelector('.links')

    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const repos = await res.json()

    repos.forEach(repo => {
        const name = repo.name.toLowerCase()

        if (name === 'campus') return // temporary change
        if (name === location.hostname) return
        if (repo.has_pages === false) return

        echo(`adding: ${repo.name}`)

        const card = Doc.createElement('a')
        card.target = '_blank'
        card.className = 'link-card'
        card.href = `https://${user}.github.io/${name}`
        card.innerHTML = `
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
             ${name} 
            <i class="fa-solid fa-angle-right arrow-icon"></i>
        `
        container.appendChild(card)
    })
}

loadPages()
