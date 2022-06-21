import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { NameForm } from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'John' , salary: 800, increase: false, id: 1},
                {name: 'Artem', salary: 2000, increase: false, id: 2},
                {name: 'Mike' , salary: 5000, increase: true, id: 3}
            ]
        }
        this.maxId=4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id == id);
            console.log(index);
            
            //COPY OBJECT var.1
            // const before = data.slice(0, index);
            // const after = data.slice(index+1);
            // const newArr = [...before, ...after];

            //COPY OBJECT var.2

            return {
                data: data.filter(item => item.id !==id)
            }

        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary, 
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log({data:newArr});
            return {data: newArr}
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                    <EmployersList data={this.state.data} onDelete={this.deleteItem}/>
                    <EmployersAddForm onAdd={this.addItem}/>
                    <NameForm/>
            </div>
        )
    }
}

export default App;