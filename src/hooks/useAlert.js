import { useState } from "react";
const useAlert =()=>{
    const [alert, setAlert] = useState({show:false,type:'danger',text:""})

    const showAlert=({text,type="succes"})=>setAlert({
        show:true,
        text,
        type
    })
    const hideAlert=()=>setAlert({show:false,type:'danger',text:""
    })

    return {alert,showAlert,hideAlert}
}
export default useAlert