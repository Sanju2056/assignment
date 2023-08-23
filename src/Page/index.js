import React, { useState } from 'react'
import './index.css'

const Form = () => {
    const options = ['Option1', 'Option2', 'Option3'];
    const numbers = [1, 2, 3, 4, 5];
    const columns = ['Column 1', 'Column 2', 'Column 3'];
    const rows = ['Row 1', 'Row 2', 'Row 3']
    const [showOptions, setShowOptions] = useState(true);
    const[shortAns,setShortAns] = useState('');
    const[paragraph,setParagraph] = useState('')
    const [selectedDropDown,setSelectedDropDown] = useState('')
    const changeShowOptions = () =>{
        setShowOptions(!showOptions)
        
    }
    const submit = () =>{
        localStorage.setItem("short-answer" , shortAns);
        localStorage.setItem("paragraph" , paragraph);
    }
  

    return (
        <div className='main-container'>
            <form className='form-container' onSubmit={submit}>
                <div className='box-1'>
                    <p className='box1-heading'>MCQ *</p>
                    {
                        options.map((items, id) => {
                            return <div className='box1-options'><input type='radio' name='mcq' className='box1-checkBox' />{items}</div>
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
                    <input className='s-a-d-input' required onChange={(e) =>{setShortAns(e.target.value)}} />
                </div>
                <div className='paragraph'>
                    <p className='p-title'>Paragraph *</p>
                    <input className='p-input' required onChange={(e)=>{setParagraph(e.target.value)}}/>
                </div>
                <div className='paragraph'>
                    <p>Drop down *</p>
                    <div className='select-css'>
                        {
                            showOptions ? <div onClick={changeShowOptions} className='ss-css'> {selectedDropDown ? selectedDropDown: "Select Option" }</div> : <div className='options-css'>
                                {
                                    options.map((items, id) => {
                                        return <option className='option-css' onClick={() =>{
                                            changeShowOptions()
                                            setSelectedDropDown(items)
                                        }} value={items}>{items}</option> 
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='file'>
                    <p>File Upload *</p>  
                    <div className='file-upload-div'>
                        <div style={{cursor:'pointer'}}>Upload File</div>
                        <input type='file' className='hel' required />
                    </div>
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
                                        <input type='radio'className='middle-checkBox' name='linear-scale' />
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
                                    <input type='radio' className='box1-checkBox' name={items}/>
                                    <input type='radio' className='box1-checkBox' name={items} />
                                    <input type='radio' className='box1-checkBox' name={items} />
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
                    <button className='button-1' onSubmit={submit} >Submit</button>
                    <button className='button-2'>Clear form</button>
                </div>
                <div className='hi'></div>
            </form>
        </div>
    )
}

export default Form