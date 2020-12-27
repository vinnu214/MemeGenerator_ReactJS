import React, { Component } from 'react'
import RegCls from './Registration.module.css';
import FormData from './FormData/FormData';

export class Registration extends Component {
    state={
        firstName:"",
        lastName:"",
        age:"",
        gender:"",
        location:"",
        preference:{
            "vegeterian":false,
            "kosher":false,
            "lactosefree":false
        }
    }
    inputHandler = (e) =>{
        const {type,value,name,checked} = e.target;
       
        type ==="checkbox"
        ?this.setState( prevState =>{ return prevState.preference[name]=checked; })
        :this.setState({[name]:value})

    }
    formHandler = (e) =>{
        alert("Form Submitted"+JSON.stringify(this.state));
        e.preventDefault()
        
    }
    render() {
        return (
            <div className={RegCls.formDivBg}>
     
                <form className={RegCls.formBg} onSubmit={this.formHandler}>
                <h3>Airlines Passenger details Form</h3>
                <div className={RegCls.row}>
                        <label htmlFor="firstName">First Name</label>
                        <input className={RegCls.inp+" "+ RegCls.fontCls} 
                        type="text" 
                        value={this.state.firstName}
                        onChange={this.inputHandler}
                        placeholder="First Name"
                        name="firstName" />     
                    </div>
                    <div className={RegCls.row}>
                        <label htmlFor="lastName">Last Name</label>
                        <input className={RegCls.inp+" "+ RegCls.fontCls} 
                        type="text" 
                        value={this.state.lastName}
                        onChange={this.inputHandler}
                        placeholder="Last Name"
                        name="lastName" />     
                    </div>
                    <div className={RegCls.row}>
                        <label htmlFor="age">Age   </label>
                        <input className={RegCls.inp+" "+ RegCls.fontCls} 
                        type="number" 
                        value={this.state.age}
                        onChange={this.inputHandler}
                        placeholder="Age"
                        name="age" />     
                    </div>
                    <div className={RegCls.row}>
                        <label htmlFor="Gender">Gender   </label>
                        <div className={RegCls.cbinp +" "+ RegCls.fontCls}>
                            <input type="radio" name="gender" value="male" onChange={this.inputHandler}/>Male 
                            <input type="radio" name="gender" value="female" onChange={this.inputHandler}/>Female
                        </div>   
                    </div>
                    <div className={RegCls.row}>
                        <label htmlFor="Gender">Location   </label>
                        <div className={RegCls.cbinp +" "+ RegCls.fontCls}>
                            <select name="location" value={this.state.location} onChange={this.inputHandler}>
                                <option value="">Select your travel location</option>
                                <option value="singapore">Singapore</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                            </select>
                        </div>   
                    </div>  
                    <div className={RegCls.row}>
                        <label htmlFor="Gender">Any Preference ?   </label>
                        <div className={RegCls.cbinp +" "+ RegCls.fontCls}>
                            <input type="checkbox" name="vegeterian"
                             checked={this.state.preference.vegeterian}  onChange={this.inputHandler}/>vegeterian 

                            <input type="checkbox" name="kosher"
                             checked={this.state.preference.kosher}  onChange={this.inputHandler}/>Kosher <br />

                            <input type="checkbox" name="lactosefree"
                             checked={this.state.preference.lactosefree} onChange={this.inputHandler}/>Lactose free

                        </div>   
                    </div>                  
                    <button className={RegCls.formBtn}>Submit</button>
                </form>
                <FormData className={RegCls.formData} {...this.state} />
            </div>
        )
    }
}

export default Registration;