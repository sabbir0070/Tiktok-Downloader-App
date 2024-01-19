import { useEffect, useState } from "react";
import Translation from '../Data.json'
import tiktokVideoDownloader from "./Api";


const Home = () => {
const [url, setURL] = useState("");
const [data, setData] = useState("");
const [error, setError] = useState("");
console.log(data);
const [language, setLanguage] = useState("English");
const [content, setContent] = useState({});
// console.log(content.error);
useEffect(()=>{
if(language=="English"){
setContent(Translation.English)
}else if(language=="தமிழ்"){
setContent(Translation.Tamil)
}else if(language=="हिंदी"){
setContent(Translation.Hindi)
}
},[language,url,data,content]);


const handleSubmit =async (e) =>{
e.preventDefault();
try {
const response = await tiktokVideoDownloader (url);
setData(response);
}

catch(error){setError(content.err);
}

}

  return (
    <div className="bg-blue-800 pb-32">
      <div className="px-10 py-10 space-y-7 w-full lg:w-[50%] md:w-[50%] mx-auto">
<div className="w-full mx-auto">
<select value={language} onChange={(e)=>setLanguage(e.target.value)} className="w-full text-xl  font-bold pb-2 h-10 mx-auto text-center">
<option>English</option>
<option>தமிழ்</option>
<option>हिंदी</option>
</select>
</div>

<h2 className="text-center text-white font-bold text-3xl">{content.title}</h2>

<form onSubmit={handleSubmit} className="space-y-5">
<input type="text" value={url} onChange={(e)=> setURL(e.target.value)} 
className="w-full px-4 py-4 text-lg text-gray-500 rounded-lg " name="" id="" required placeholder={content.placeholder} />
<button type="submit" className="text-center text-xl font-bold font-sans rounded-lg text-white bg-blue-600 hover:bg-blue-700 px-4 py-3  border w-full">
{content.buttonText} </button>
</form>
{data?.data?.msg == "success" ? <>
<p className="text-center text-green-500 font-bold text-xl">{data?.data?.msg}</p>
</> :
 <><p className="text-center text-red-500 font-bold text-xl">{data?.data?.msg}</p>
</> }

{data &&
<div className="bg-orange-700">
<video  controls className="w-full h-96">
<source src={data?.data?.data?.play} type="video/mp4"/>
</video>
</div>
}

</div>
    </div>
  );
};

export default Home;