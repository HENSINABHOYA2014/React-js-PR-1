import React from 'react';
import './Props.css';

const Props = ({ record = [], button, number, mians }) => {
    return (
        <center>
              <br />
            <h2>Student data using Function component</h2>
            <br />
            <table cellPadding={15}>
                <thead>
                    <tr className='text'>
                        <td class="text-center text-white">Grid</td>
                        <td class="text-center text-white">Name</td>
                        <td class="text-center text-white">Email</td>
                        <td class="text-center text-white">Password</td>
                        <td class="text-center text-white">Course</td>
                        <td class="text-center text-white">City</td>
                        <td className='count-btn'>{number}</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val) => {
                            return (
                                <tr key={val.grid}>
                                    <td className='background'>{val.grid}</td>
                                    <td className='border'>{val.name}</td>
                                    <td className='background'>{val.email}</td>
                                    <td className='border'>{val.password}</td>
                                    <td className='background'>{val.course}</td>
                                    <td  className='border'>{val.city}</td>
                                    <td>
                                        <button onClick={() => button()} className='border three'>+</button>
                                        <button onClick={() => mians()} className='border three'>-</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
    )
}
export default Props;