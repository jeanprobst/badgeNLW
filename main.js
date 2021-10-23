const socialMediaUserId = {
  github: 'jeanprobst',
  youtube: 'channel/UCMGP1Kl297xAKye83y7YMxA',
  facebook: '100055956492008',
  instagram: 'jeanprobst',
  twitter: 'jeanprobst'
}

function changingSocialMediaUserId() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaUserId[social]}`
  }
}

changingSocialMediaUserId()

function getGitUserName() {
  const url = `https://api.github.com/users/${socialMediaUserId.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioDescrition.textContent = data.bio
      gitLinkUserName.href = data.html_url
      photoProfile.src = data.avatar_url
      gitUserName.textContent = data.login
    })
}

getGitUserName()
