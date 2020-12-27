import React from 'react';
import FDCls from './FormData.module.css';

function FormData(props) {
    return (
        <div className={FDCls.formData}>
            <h4>Details entered by you : </h4>

                <div>
                    <span className={FDCls.label} >Full Name :</span>  
                    <span className={FDCls.value}>{props.firstName +" "+props.lastName}</span>
                </div>

                <div>
                    <span className={FDCls.label} >Age : </span> 
                    <span className={FDCls.value}>{props.age}</span>
                </div>

                <div>
                    <span className={FDCls.label} >Gender: </span> 
                    <span className={FDCls.value}>{props.gender.toUpperCase()}</span>
                </div>

                <div>
                    <span className={FDCls.label} >Location: </span> 
                    <span className={FDCls.value}>{props.location}</span>
                </div>

                <div>
                    <span className={FDCls.label} >Restrictions :</span>  
                    <span className={FDCls.value}>{props.preference.vegeterian ? "Vegeterian ":""}</span>
                    <span className={FDCls.value}>{props.preference.kosher ? "Kosher ":""}</span>
                    <span className={FDCls.value}>{props.preference.lactosefree ? "Lactosefree":""}</span>
                </div>

            
        </div>
    )
}

export default FormData
