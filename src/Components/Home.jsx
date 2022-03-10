import React from 'react'
function Home(props) {    
        
  return (
    
    <>
    {props.album.map(data1 => {
              var i =0;
              return(
                <div key={data1.id} style={{textAlign:'center'}}>
                    <h2>{data1.title}</h2>                      
                    {props.photo.map(data2 => {                        
                      if(i>10) return ''
                      if(data1.id === data2.albumId)
                      {
                        i++;
                        return (
                          <table key={data2.id}>
                            <tbody>
                            <tr>
                              <td><img src={data2.thumbnailUrl} alt={data2.id} width="40" /></td>
                              <td><a href={data2.url} target="_blank" rel="noopener noreferrer">{data2.title}</a></td>
                            </tr>
                            </tbody>
                          </table>
                        )
                      } 
                    })}
                </div>
              ) 
          })
        }
    </>
    
  );
     
  }
export default Home