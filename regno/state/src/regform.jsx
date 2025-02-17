import { useState } from 'react';
import "./reg.css";

export const RegForm = () => {
    const [user, setUser] = useState({
        name: "Vishnu",
        age: 21,
        gender: "female",
        isMarried: false,
        country:"India",
        bio:"write  somethng about myself"

    });
function change(e){
    const name=e.target.name;
    const value=e.target.type ==="checkbox" ? e.target.checked: e.target.value;
    setUser({...user,[name]:value})

}
    return (
        <>
        <table>
            <tbody>
                <tr>
                   <td>Name</td>
                   <td>{user.name}</td>
                </tr>
                <tr>
                   <td>Age</td>
                   <td>{user.age}</td>
                </tr>
                <tr>
                   <td>Gender</td>
                   <td>{user.gender}</td>
                </tr>
                <tr>
                   <td>Marital Status</td>
                   <td>{user.isMarried ? "Married" : "Not Married"}</td>
                </tr>
                <tr>
                   <td>country</td>
                   <td>{user.country}</td>
                </tr>
                <tr>
                   <td>Bio</td>
                   <td>{user.bio}</td>
                </tr>
            </tbody>
        </table>
        <from>
            <input  type='text' placeholder='full name' value={user.name} onChange={change} name='name' />
            <input type='number' placeholder='age' value={user.age}onChange={change}name='age'/>
            <div className='gender'>
               <label htmlFor='male'>
               <input type='radio' name='gender' id='male' checked={user.gender=="Male"} value="Male"onChange={change} />
               Male
               </label>
               <label htmlFor='female'>
               <input type='radio' name='gender' id='female' checked={user.gender=="female"} value="female"onChange={change}/>
                female
               </label>
            </div>
            <label htmlFor='ismarried'>
                <input type="checkbox" id='ismarried' checked={user.isMarried}onChange={change} name='isMarried' />
                Is married
            </label>
            <div className='select-div'>
                <label htmlFor='country'>Select country</label>
                <select name='country' id='country' value={user.country} onChange={change}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <textarea name='bio' id='bio' cols="30" rows="5" placeholder='write about you'onChange={change} value={user.bio}></textarea>
        </from>
        </>
    );
};
