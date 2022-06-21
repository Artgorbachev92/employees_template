import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import {Component} from 'react'

import './employers-add-form.css'

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: ''
    })
    }


    render() {

        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.handleSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
    }
}

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    textArea:  'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
                    fruit: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({
        [e.target.name] : e.target.value
      });
    }
  
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value + '. Сочинение отправлено: ' + this.state.textArea + 'выбранный фрукт - ' + this.state.fruit);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" name='value' value={this.state.value} onChange={this.handleChange} />
            <textarea  name='textArea' value={this.state.textArea} onChange={this.handleChange} />
            Выберите ваш любимый вкус:
          <select  name='fruit' value={this.state.fruit} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }

export default EmployersAddForm;
export {NameForm};