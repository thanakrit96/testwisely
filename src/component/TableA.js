import * as React from "react";
import './TableA.css'
import { SiTwitter,SiLinkedin } from "react-icons/si";

export default function Table() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/").then(function (response){
        return response.json()        
    })
      console.log(res) 
     res.data.sort(compare) 
     console.log(res) 
    setUsers(res.data)
  };
  const compare = ( a, b )=> {
    if ( a.first_name < b.first_name ){
      return -1;
    }
    if ( a.first_name > b.first_name ){
      return 1;
    }
    return 0;
  }
  

  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="tablecons">
        <div className="meetcons">
      <h2 className="tins">Meet our team</h2>
      <p >Onare sagittis,suspendisse in hendrerit quis.sed dui aliquet lectus sit pretium egetas vel mattis neque.</p>
      </div>
      <div className="flexs">
        {users.length &&
          users.map((user) => {
            return (
              <div className="infocons" key={user.id}>
                <img key={user.avatar} src={user.avatar} />
                <div className="twli"><p>{user.first_name}</p>
                     <div className="tw">
                      <div className="twii"><SiTwitter/></div>
                      <div className="liin"><SiLinkedin/></div>
                     </div>
                </div>                              
              </div>
            );
          })}          
      </div>
    </div>
    
  );
}
