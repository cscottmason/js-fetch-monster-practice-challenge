

const baseURL = 'http://localhost:3000/';
let curPage = 1;

getMonsters(curPage).then(displayMonsters);
createMonsterForm();
addNavListeners();



async function getMonsters(page) {
    const url = `${baseURL}monsters/?_limit=50_page${page}`;
    
    const response = await fetch(url);
    return await response.json();
    /*.then( json => {
        document.querySelector('#monster-container').innerHTML = '';
        for (let monster = 0; monster < json.length; monster++)
        return createMonsterCard(json[monster])
    })*/



    }

    function createMonsterCard(monster) {
        //const monsterForm = document.createElement('form')
       // monsterForm.setAttribute('id', 'monster-form')
        const div = document.createElement('div')
        const  monsterName = document.createElement('h2')
        const monsterAge = document.createElement('h4')
        const description = document.createElement('p');

        monsterName.textContent = "Name:" + monster.name
        monsterAge.textContent = "Age:" + monster.age,
        description.textContent ="Bio:" + monster.description
        div.appendChild(monsterName),
        div.appendChild(monsterAge),
        div.appendChild(description);
        //document.querySelector('#monster-container').appendChild(monsterDiv);
        return div;
    }

    const testMonsterObj = {
        "name": "Chronos",
        "age": 4005.302453418598,
        "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
        "id": 1
    }

    function displayMonsters(monsterArray) {
        clearMonsters();
        const monsterContainer = document.getElementById('monster-container');
        monsterArray.forEach(monster => {
            const monsterDiv = createMonsterCard(monster);
            monsterContainer.appendChild(monsterDiv);
        });
    }

    function clearMonsters() {
        document.querySelector('#monster-container').innerHTML = '';
    }

    const testMonsterArray = [
        {
            "name": "Chronos",
            "age": 4005.302453418598,
            "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
            "id": 1
          },
          {
            "name": "Tartarus",
            "age": 1874.4913565609456,
            "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
            "id": 2
          },
          {
            "name": "Hemera",
            "age": 4094.8375978925988,
            "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
            "id": 3
          },
          {
            "name": "Tartarus",
            "age": 2364.163894640274,
            "description": "Fungus blasphemous immemorial indescribable singular cat foetid. Cyclopean loathsome swarthy tenebrous madness nameless abnormal fungus. Daemoniac fungus fainted.",
            "id": 4
          }
    ];

    function createMonsterForm() {
        const form = document.createElement('form'),
        nameInput = document.createElement('input')
        ageInput = document.createElement('input'),
        descriptionInput = document.createElement('input'),
        submitButton = document.createElement('button');

        form.id = 'monster-form';
        nameInput.id = 'name';
        ageInput.id = 'age';
        descriptionInput.id = 'description';

        nameInput.placeholder = 'name';
        ageInput.placeholder = 'age';
        descriptionInput.placeholder = 'description';
        submitButton.textContent = ' Create';

            form.appendChild(nameInput);
            form.appendChild(ageInput);
            form.appendChild(descriptionInput);
            form.appendChild(submitButton);
        
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newMonster = getFormDate();
            postNewMonster(newMonster);
            clearForm();
        });
        //document.getElementById('create-monster').appendChild(form);
    
        document.getElementById('create-monster').appendChild(form);
    }


    function getFormData() {
        let a = document.querySelector('#name'),
        b = document.querySelector('#age')
        c = document.querySelector('#description');

        return {
            name: a.value,
            age: parseFloat(b.value),
            description: c.value
        }
    }

    function postNewMonster(monster) {
        let monsterUrl = `${baseURL}monsters`,
        config = {
            method: 'Post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(monster)
        };
        fetch(monsterUrl, config);
    }

    function clearForm() {
        document.querySelector('#monster-form').reset();
    }

    function addNavListeners() {
        let backButton = document.querySelector('#back'),
        forwardButton = document.querySelector('#forward');

        backButton.addEventListener('click', () => {
            prevPage();
        });
        forwardButton.addEventListener('click', () => {
            nextPage();
        });
    }

    function nextPage() {
        curPage++;
        getMonsters(curPage).then(displayMonsters)
    }

    function prevPage() {
        if(curPage < 1) {
            alert('You are on the first page');
        }
        else {
            curPage --;
            getMonsters(curPage).then(displayMonsters);
        }
        }
    

/*monsterInfo = () => {
    getMonsters(),
    createMonsterCard()
}

    document.addEventListener('DOMcontentLoaded', monsterInfo())*/
