import React from 'react'
import './index.css'

const Form = () => {
    const options = ['Option1', 'Option2', 'Option3'];
    const numbers = [1, 2, 3, 4, 5];
    const columns = ['Column 1', 'Column 2', 'Column 3'];
    const rows = ['Row 1', 'Row 2', 'Row 3']
    const hello = ({ items }) => {
        console.log(items)
    }

    return (
        <div className='main-container'>
        <form className='form-container'>
        <div className='box-1'>
                <p className='box1-heading'>MCQ *</p>
                {
                    options.map((items, id) => {
                        return <div className='box1-options'><input type='radio' className='box1-checkBox' />{items}</div>
                    })
                }
            </div>
            <div className='box-1'>
                <p className='box1-heading'>Checkbox *</p>
                {
                    options.map((items, id) => {
                        return <div className='box1-options'><input type='checkbox' className='box1-checkBox' />{items}</div>
                    })
                }
            </div>
            <div className='short-ans-div'>
                <p className='s-a-d-title'>Short Answer *</p>
                <input className='s-a-d-input' required />
            </div>
            <div className='paragraph'>
                <p className='p-title'>Paragraph *</p>
                <input className='p-input' />
            </div>
            <div className='paragraph'>
                <p>Drop down *</p>
                <select className='select-css'>
                    {
                        options.map((items, id) => {
                            return <option className='option-css'>{items}</option>
                        })
                    }
                </select>
            </div>
            <div className='paragraph'>
                <p>File Upload *</p>
                <input type='file' />
            </div>
            <div className='ls-div'>
                <p className='p-title'>Linear Scale *</p>
                <div className='wb-div'>
                    <div className='worst'>Worst</div>
                    <div className='num'>
                        {
                            numbers.map((items, id) => {
                                return <div className='middle'>
                                    <div>
                                        {items}
                                    </div>
                                    <input type='radio' value={items} className='middle-checkBox' onClick={(items) => { hello(items) }} />
                                </div>

                            })
                        }
                    </div>
                    <div className='worst'>Best</div>
                </div>
            </div>
            <div className='mcg-div'>
                <p className='p-title'>Multi Choice Grid *</p>
                <div className='mcg-title'>
                    {
                        columns.map((items, id) => {
                            return <p>{items}</p>
                        })
                    }
                </div>
                {
                    rows.map((items, id) => {
                        return <div className='mcg-body'>
                            <div className='mcg-box1'>
                                <p>{items}</p>
                            </div>
                            <div className=' mcg-box2'>
                                <input type='radio' className='box1-checkBox' />
                                <input type='radio' className='box1-checkBox' />
                                <input type='radio' className='box1-checkBox' />
                            </div>
                        </div>
                    })
                }

            </div>
            <div className='mcg-div'>
                <p className='p-title'>Tick Box Grid *</p>
                <div className='mcg-title'>
                    {
                        columns.map((items, id) => {
                            return <p>{items}</p>
                        })
                    }
                </div>
                {
                    rows.map((items, id) => {
                        return <div className='mcg-body'>
                            <div className='mcg-box1'>
                                <p>{items}</p>
                            </div>
                            <div className=' mcg-box2'>
                                <input type='checkbox' className='box1-checkBox' />
                                <input type='checkbox' className='box1-checkBox' />
                                <input type='checkbox' className='box1-checkBox' />
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='last-div'>
                <button className='button-1'>Submit</button>
                <button className='button-2'>Clear form</button>
            </div>
            <div className='hi'></div>
        </form>
        </div>
    )
}

export default Form