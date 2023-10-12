
function App() {
  const sound = document.getElementById('sound');
  const btn=document.getElementById('btn');
  const getvalue= ()=>{
    let inputstr=document.getElementById('inputtext').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputstr}`)
    .then((response)=>{ return response.json()})
    .then((data)=>{
      console.log(data[0].phonetics[0]);
      result.innerHTML=`
        <h3 class="m-8 mb-0 font-bold text-3xl text-yellow-200">${inputstr}</h3>
        <h6 class="mx-8 my-0   text-yellow-200">${data[0].meanings[0].partOfSpeech}/${data[0].phonetic}</h6>
        <h2 class="mx-8 my-9 mb-4 font-semibold  text-yellow-200">${data[0].meanings[0].definitions[0].definition}</h2 >s
        <h2 class="mx-8 my-8  font-bold  text-yellow-200">eg: ${data[0].meanings[0].definitions[1].example}</h2>
      <audio id="sound" controls class="flex-shrink-0 rounded-full border-4 border-yellow-400 mx-8">
      <source src="${data[0].phonetics[0].audio}">
      </audio>`
    })
    .catch(()=>{
       result.innerHTML = `<h3 class="m-8 mb-0 font-bold text-3xl text-yellow-200">Couldn't Find The Word</h3>`;
     })
  }
  return (
    <div className=" flex flex-col justify-center items-center bg-slate-900 h-screen  w-full ">
      <h1 className='m-8 mb-0 font-bold text-5xl text-white hover:-translate-y-1 hover:scale-110  duration-300 ...'>Dictionary.com By HD</h1>
      <div className="flex  flex-shrink-0 my-8 shadow-xl shadow-blue-500 bg-white border-blue-500 hover:border-red-600 hover:shadow-red-600 border-4 h-20 w-1/3 rounded-full
      hover:-translate-y-1 hover:scale-110  duration-300 ...">
      <input type="text" id="inputtext" placeholder='Start typing any word or phrase..' className='flex-auto text-black basis-2/3 rounded-full font-bold text-xl'></input>
        <button onClick={ getvalue} id='btn' className=' h-12 w-12 rounded-full my-2.5 '>
          <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/09_search-1024.png"  />
          </button>
      </div>
       <div id="result" className='flex flex-col m-4 bg-slate h-96 w-96 rounded-2xl border-4 shadow-xl shadow-yellow-300  border-blue-500 
      hover:-translate-y-1 hover:scale-110  duration-300 '>
       </div>
    </div>
  )
}

export default App
