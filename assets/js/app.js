let tasks = [{
    id: 1669730370858,
    name: 'Buscar Información Viaje',
    state: false
},
{
    id: 1669730370863,
    name: 'Pagar Cuentas',
    state: false
},
{
    id: 1669730369124,
    name: 'Compra Regalo',
    state: false
},
]
const inputTask = document.querySelector("#inputTask");
const btnAdd = document.querySelector("#btnAdd");
const total = document.querySelector("#total");
const made = document.querySelector("#made");
const list = document.querySelector("#taskList tbody");



const reset = (taskList) => {
    let html = ""

    taskList.forEach(task => {
        if (task.state) {
            html +=
                `
            <tr>
                <th scope="row">${task.id}</th>
                <td class="text-muted">${task.name} <span class="text-success">(Terminada)</span></td>
                <td>
                    <input type="checkbox" onclick="taskmade(${task.id})" checked/>
                    &nbsp;
                    <button class="btn btn-danger" onclick="deletetask(${task.id});">x</button>
                </td>
            </tr>
  `
        } else {
            html +=
                `
            <tr>
                <th scope="row">${task.id}</th>
                <td>${task.name}</td>
                <td>
                    <input type="checkbox" onclick="taskmade(${task.id})" />
                    &nbsp;
                    <button class="btn btn-danger" onclick="deletetask(${task.id});">x</button>
                </td>
            </tr>
    `
        }
    })

    list.innerHTML = html
    made.innerHTML = tasks.filter(task => task.state === true).length
    total.innerHTML = tasks.length
}

const taskmade = id => {
    tasks.forEach((task) => {
        if (task.id === id) {
            task.state = !task.state
        }
    })
    reset(tasks)
    
}
const deletetask = id => {
    tasks.forEach((task, index) => {
        if (task.id === id) {
            tasks.splice(index, 1)
        }
    })
    reset(tasks)
}

reset(tasks)
btnAdd.addEventListener("click", () => {
    if (!inputTask.value.trim()) {
        alert("Debes ingresar una descripcion de tarea")
    } else {
        tasks.unshift({
            id: Date.now(),
            name: inputTask.value,
            state: false
        })
        reset(tasks)
    }
    inputTask.value = ""
})
