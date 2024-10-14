import { forwardRef } from 'react';

const CustomInput = forwardRef(function CustomInput({children, textarea, ...props}, ref) {
    const classes = "border-b-2 border-gray-600 bg-gray-300 py-1 px-3";
    return(
        <div className="form-group flex flex-col">
            <label className="uppercase font-semibold">{children}</label>
            {
                textarea ?
                <textarea className={classes} ref={ref} {...props}></textarea> :
                <input className={classes} ref={ref} {...props} />
            }
        </div>
    )
});

export default CustomInput;