// background change every 1 hour
backgroundSelection = ['https://images.unsplash.com/photo-1529928750697-1d9646312221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
'https://images.unsplash.com/photo-1548439935-5f5f0a4fb02e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
'https://images.unsplash.com/photo-1548439935-9e1390d83250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
'https://images.unsplash.com/photo-1545768076-c58b243b8f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
'https://images.unsplash.com/photo-1561084195-ee7372303a19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80',
'https://images.unsplash.com/photo-1563985336376-568060942b80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80',
'https://images.unsplash.com/photo-1515248101569-f6e91c070aa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80']
let random = Math.floor(Math.random() * backgroundSelection.length)
document.querySelector('.background').style.backgroundImage = `url('${backgroundSelection[random]}')`

setInterval( () => { 
    let random = Math.floor(Math.random() * backgroundSelection.length)
    document.querySelector('.background').style.backgroundImage = `url('${backgroundSelection[random]}')` 
    }, 3600000
);

// current time 
function realtimeClock() {
    document.querySelector('#time').innerHTML = dayjs().format('h:mm')
    setTimeout(realtimeClock, 500)
}

// function realtimeClock() {
//     var rtClock = new Date();
//     var hours = rtClock.getHours();
//     var minutes = rtClock.getMinutes();

//     // add am and pm
//     var amPm = (hours < 12) ? 'am' : 'pm';

//     // convert hours to 12 hour format
//     hours = (hours > 12) ? hours - 12 : hours;

//     // pad hours, mins, and secs w leading zeroes
//     hours = ("0" + hours).slice(-2);
//     minutes = ("0" + minutes).slice(-2);

//     document.querySelector('#time').innerHTML = `${hours}:${minutes}${amPm}`
//     var t = setTimeout(realtimeClock, 500);
// }

//input name and main focus for today

//gets name from local storage if any
if (localStorage.getItem('name')) {
    let paragraph = document.createElement('p')
    paragraph.innerHTML = `Greetings, ${localStorage.getItem('name')}.`
    document.querySelector('.nameContainer').appendChild(paragraph)

    document.querySelector('.nameContainer').style.display = 'flex'
    document.querySelector('#greeting').style.display = 'none'
    document.querySelector('#nameInput').style.display = 'none'
    document.querySelector('#nameInput').value = ''

    document.querySelector('.focusContainer').style.visibility = 'visible'
    document.querySelector('#focusGreeting').style.visibility = 'visible'
    document.querySelector('#focusInput').style.visibility = 'visible'

    paragraph.addEventListener('dblclick', () => {
        document.querySelector('.nameContainer').removeChild(paragraph)
        document.querySelector('.nameContainer').style.display = 'none'
        document.querySelector('#greeting').style.display = 'block'
        document.querySelector('#nameInput').style.display = 'block'

        document.querySelector('.focusContainer').style.visibility = 'hidden'
        document.querySelector('#focusGreeting').style.visibility = 'hidden'
        document.querySelector('#focusInput').style.visibility = 'hidden'

        localStorage.removeItem('name')
    })
}

//allows user to input name if local storage is empty and change name on local storage
document.querySelector('#nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        localStorage.setItem('name', `${document.querySelector('#nameInput').value}`)

        let paragraph = document.createElement('p')
        paragraph.innerHTML = `Greetings, ${localStorage.getItem('name')}.`
        document.querySelector('.nameContainer').appendChild(paragraph)

        document.querySelector('.nameContainer').style.display = 'flex'
        document.querySelector('#greeting').style.display = 'none'
        document.querySelector('#nameInput').style.display = 'none'
        document.querySelector('#nameInput').value = ''

        document.querySelector('.focusContainer').style.visibility = 'visible'
        document.querySelector('#focusGreeting').style.visibility = 'visible'
        document.querySelector('#focusInput').style.visibility = 'visible'

        paragraph.addEventListener('dblclick', () => {
            document.querySelector('.nameContainer').removeChild(paragraph)
            document.querySelector('.nameContainer').style.display = 'none'
            document.querySelector('#greeting').style.display = 'block'
            document.querySelector('#nameInput').style.display = 'block'

            document.querySelector('.focusContainer').style.visibility = 'hidden'
            document.querySelector('#focusGreeting').style.visibility = 'hidden'
            document.querySelector('#focusInput').style.visibility = 'hidden'
        })
    }
})

//focus for today
if (localStorage.getItem('focustoday')) {
    let paragraph = document.createElement('p')
    paragraph.innerHTML = localStorage.getItem('focustoday')

    document.querySelector('.focusContainer').appendChild(paragraph)

    document.querySelector('.focusContainer').style.display = 'block'
    document.querySelector('#focusGreeting').style.display = 'none'
    document.querySelector('#focusInput').style.display = 'none'
    document.querySelector('#focusInput').value = ''

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through"
        localStorage.removeItem('focustoday')
    })
    paragraph.addEventListener('dblclick', () => {
        document.querySelector('.focusContainer').removeChild(paragraph)
        document.querySelector('.focusContainer').style.display = 'none'
        document.querySelector('#focusGreeting').style.display = 'block'
        document.querySelector('#focusInput').style.display = 'block'
    })
}

document.querySelector('#focusInput').addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        localStorage.setItem('focustoday', `${document.querySelector('#focusInput').value}`)

        let paragraph = document.createElement('p')
        paragraph.innerHTML = `${localStorage.getItem('focustoday')}`

        document.querySelector('.focusContainer').appendChild(paragraph)

        document.querySelector('.focusContainer').style.display = 'block'
        document.querySelector('#focusGreeting').style.display = 'none'
        document.querySelector('#focusInput').style.display = 'none'
        document.querySelector('#focusInput').value = ''

        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = "line-through"
            localStorage.removeItem('focustoday')
        })
        paragraph.addEventListener('dblclick', () => {
            document.querySelector('.focusContainer').removeChild(paragraph)
            document.querySelector('.focusContainer').style.display = 'none'
            document.querySelector('#focusGreeting').style.display = 'block'
            document.querySelector('#focusInput').style.display = 'block'
        })
    }
})

//TO DO LIST
document.querySelector('#toDoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        //localStorage.setItem('todo', `${document.querySelector('#toDoInput').value}`)

        let paragraph = document.createElement('p')
        paragraph.innerText = document.querySelector('#toDoInput').value
        document.querySelector('#toDoContainer').appendChild(paragraph)
        document.querySelector('#toDoInput').value = ''

        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = "line-through"
        })
        paragraph.addEventListener('dblclick', () => {
            document.querySelector('#toDoContainer').removeChild(paragraph)
        })
    }
});

document.querySelector('#toDoToggleBtn').addEventListener('click', ()=> {
    document.querySelector('.toDoSectionToggle').classList.toggle('show')
})


//quotes
inspirationalQuotes = [`"Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus." -Alexander Graham Bell`,
`“Either you run the day or the day runs you.” -Jim Rohn`,
`“I’m a greater believer in luck, and I find the harder I work the more I have of it.” -Thomas Jefferson`,
`“When we strive to become better than we are, everything around us becomes better too.” -Paulo Coelho`
]

let randomTwo = Math.floor(Math.random() * inspirationalQuotes.length)
document.querySelector('#quote').innerHTML = inspirationalQuotes[randomTwo]

setInterval( () => { 
    let randomTwo = Math.floor(Math.random() * inspirationalQuotes.length)
    document.querySelector('#quote').innerHTML = inspirationalQuotes[randomTwo]
    }, 3600000
)

document.querySelector('#quote').addEventListener('dblclick', () => {
    document.querySelector('#quote').style.display = 'none'
    document.querySelector('#addQuote').style.display = 'flex'
})

document.querySelector('#addQuote').addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        newQuote = document.querySelector('#addQuote').value
        inspirationalQuotes.push(newQuote)
        document.querySelector('#addQuote').value = ''
        document.querySelector('#addQuote').style.display = 'none'
        document.querySelector('#quote').innerHTML = newQuote
        document.querySelector('#quote').style.display = 'flex'
    }
})

document.querySelector('#addQuote').addEventListener('dblclick', () => {
    let randomTwo = Math.floor(Math.random() * inspirationalQuotes.length)
    document.querySelector('#quote').innerHTML = inspirationalQuotes[randomTwo]
    document.querySelector('#addQuote').style.display = 'none'
    document.querySelector('#quote').style.display = 'flex'
})
