const l = []
function adduser() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    console.log(name, profession, age);


    if (name === '' || profession === '' || age === '') {
        const q = document.getElementById('q')
        q.style.color = 'red';

        q.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        
       
    } else {
        q.innerHTML = 'Success : Employee Added!'
        q.style.color = 'green';
       

       const E = document.getElementById('E')
        E.style.display = 'none';

        l.push({
            name: name,
            profession: profession,
            age: age,
        })
    }

    let tb = document.getElementById('tb')
    tb.innerHTML = '';

    l.map((el, i) => {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i + 1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.profession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
        `
    })
}

function d(el) {
    delete l[el]
    tb.innerHTML = ''
    l.map((el, i) => {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i + 1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.profession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
      `
    })

}
console.log(tb)


