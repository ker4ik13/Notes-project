let button = document.querySelector('.button'),
    container = document.querySelector('.container'),
    note = document.createElement('div'),
    notePlusBtn = document.querySelector('.note__plus__btn'),
    noteContent = document.querySelector('.div'),
    noteTitle = document.querySelector('.div'),
    noteText = document.querySelector('.div'),
    noteUnder = document.querySelector('.div'),
    noteDate = document.querySelector('.div'),
    noteSettings = document.querySelector('.div');

/* Доделать */

function createNote(){
    note.className = 'note__item';
    container.append(note)
    noteContent.className = 'note__content'
    container.prepend(noteContent)

}

notePlusBtn.addEventListener('click', () => {
    createNote()
})


button.addEventListener('click', () => {
    button.classList.toggle('dark-btn'),
    document.querySelector('.title').classList.toggle('dark-text'),
    document.body.classList.toggle('dark-mode');
});


let user = {
    userName: 'Кирилл',
    userAge: 18,
    userCountry: 'Россия',
    userCity: 'Саранск',
    userFamily: 'Не женат',
    userLog: function(){
        console.group(`Информация пользователя ${this.userName}`)
        console.log(`Пользователю ${this.userName} ${this.userAge} лет.`)
        console.log(`${this.userName} живет в стране "${this.userCountry}" в городе ${this.userCity}.`)
        console.log(`${this.userName} ${this.userFamily}`)
    }
}

user.userLog()

let maria = Object.create(user)

maria.userName = 'Мария'
maria.userAge = 23
maria.userCountry = 'USA'
maria.userCity = 'New-York'
maria.userFamily = 'Замужем'

maria.userLog()


