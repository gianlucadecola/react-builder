import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            isFriendly: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]:checked}) : this.setState({[name]:value})
    }

    render() {
        return(
            <form>
                <input 
                    type='text' 
                    name='firstName' 
                    value={this.state.firstName}
                    placeholder='First Name' 
                    onChange={this.handleChange}/>
                
                <p>{this.state.firstName}</p>
                
                <textarea 
                    value='Default text'
                />

                <br/>
                <label>
                  <input
                      name='isFriendly'
                      type='checkbox'
                      checked={this.state.isFriendly}
                      onChange={this.handleChange}
                  /> Is friendly?
                </label>
            </form>
        )
    }
}

export default App