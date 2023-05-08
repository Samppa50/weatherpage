fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/limit/50")
    .then(response => response.json())
    .then(function(products){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products){
            out += `
                <tr>
                    <td>
                    ${product.id}
                    </td>
                    <td>
                    ${product.device_id}
                    </td>
                    <td>
                    ${product.date_time}
                    </td>
                    <td>
                    ${product.data.wind_speed}
                    </td>
                    <td>
                    ${product.data.wind_direction}
                    </td>
                    <td>
                    ${product.data.humidity_in}
                    </td>
                    <td>
                    ${product.data.humidity_out}
                    </td>
                    <td>
                    ${product.data.light}
                    </td>
                    <td>
                    ${product.data.rain}
                    </td>
                    <td>
                    ${product.data.temperature}
                    </td>

                </tr>
            

            `;
        }
        placeholder.innerHTML=out;
    })


    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction")
    .then(res => res.json())
    .then(function(wds){
        let placeholder = document.querySelector("#wd-output");
        let out = "";
        for (let wd of wds){
            out += `
                <tr>
                    <td>
                    ${wd.wind_direction}
                    </td>
                </tr>
                
    
            `;
        }
        placeholder.innerHTML=out;
    })
    

    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed")
    .then(ress => ress.json())
    .then(function(wss){
        let placeholder = document.querySelector("#ws-output");
        let out = "";
        for (let ws of wss){
            out += `
                <tr>
                    <td>
                    ${ws.wind_speed}
                    </td>
                </tr>
                
    
            `;
        }
        placeholder.innerHTML=out;
    })
    
