
import { useState } from "react"


export const Qrcode = () => {
    const [img,setImg]=useState("");
    const [loading,setLoading]= useState(false);
    const [qrData,setQrData] = useState("");
    const [size,setSize] = useState()
    
     async function generateQr(){
        setLoading(true);
        console.log("true")
        try{
            const url=`http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${size}x${size}`;
             setImg(url);

        }catch(error){
            console.error("error generating Qr code", error);
        }finally{
            setLoading(false);
        }
    
 }
 function downloadqr(){
    fetch(img)
    .then((response) =>response.blob())
    .then((blob) => {
        const link=document.createElement("a")
        link.href=URL.createObjectURL(blob);
        link.download="qr.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    })
    .catch((error) =>{
        console.error("error downloading qrcode",error)
    });

}
  return (
    <div className="app-container">
        <h1> QR CODE GENERATOR</h1>
        {loading && <p>please wait...</p>}
       {img &&  <img src={img}  className="qr-code-image"></img>}
        <div>
            <label htmlFor="dataInput" className="input-label">Datafor Qrcode</label>
            <input type="text" id="dataInput" placeholder="enter data Qrcode " value={qrData} onChange={(e) => setQrData(e.target.value)}/>
            
            <label htmlFor="sizeInput" className="input-label">image size(e.g..,150) </label>
                <input type="text" id="sizeInput" placeholder="enter the size" value={size} onChange={(e) => setSize(e.target.value)}/>
                <button className="generate-button" onClick={generateQr} disabled={loading}> generate Qr code</button>
                <button className="download-button" onClick={downloadqr}>download Qr coode</button>
        </div>
        <p>Designed by vishu</p>
 </div>
  )
}
