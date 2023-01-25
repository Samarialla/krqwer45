import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  render() {
    const handleSubmit = event => {
      event.preventDefault();
      if (this.state.newTask !== '') {
        let r = this.state.tasks;
        let long = this.state.newTask.length;
        let newA = r.concat({ id: long + 1, name: this.state.newTask, done: false });
        this.setState({ tasks: newA, newTask: null })
      }

    };

    const handleClick = (task) => {
      const array = this.state.tasks.filter(x => x.id === task.id)[0];
      const arrayNew = this.state.tasks.filter(x => x.id !== task.id);
      array['done'] = !array['done'];
      const data = [...arrayNew, array]
      this.setState({ task: data })

    }
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li onClick={(e) => handleClick(task)} className={task.done ? 'done' : ''} id={task.id} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={handleSubmit}>
            <input className={this.state.newTask === '' && !this.state.newTask ? 'error' : ''} onChange={(e) => this.setState({ newTask: e.target.value })} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask || ''} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
