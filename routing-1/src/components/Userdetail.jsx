
import { useParams } from "react-router-dom";

export const Userdetail = () => {



    const { id } = useParams();


    return (
        <div>
          
             
             <p style={{color:"green"}}>   User ID : { id } </p>



        </div>
    )


};