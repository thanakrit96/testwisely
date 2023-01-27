import * as React from "react";
import './Table.css'

export default function Table() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/").then(function (response){
        return response.json()        
    })
     /* console.log(res) */
     res.data.sort(compare) 
    /* console.log(res)  */
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
    <div className="tablecon">
        <div className="meetcon">
      <h2 className="tin">Meet our leadership</h2>
      <p >Libero fames augue nisi,quis. la ac elit odio vitae elementum enim vitae ullaacorpper suspensisse, Vivamus fringilla</p>
      </div>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className="infocon" key={user.id}>
                <img key={user.avatar} src={user.avatar} />
                <div><p>{user.first_name}</p>
                     <p>{user.email}</p>
                </div>                              
              </div>
            );
          })}          
      </div>
    </div>
    
  );
}
