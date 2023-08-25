function mystery(answer) {
    if (answer == '5' || answer == 'пять')
        alert('Ответ верный')
    else {
        alert('Ответ неверный')
    }
}

answer_person = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?')
mystery(answer_person)