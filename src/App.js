import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react'

function App() {

  const [mode,setMode]=useState("light");
  const [modeText,setModeText]=useState("Dark Mode")
  const [text,setText]=useState("Write Something..........");
  const [makeCapitalize,setCapitalize]=useState(text)
  const [noOfWord,setNoOfWord]=useState(0)
  const [noOfLetter,setNoOfLetter]=useState(0)
  const [inSmall,setInSmall]=useState(text);
  const [inCap,setInCap]=useState(text);
  const [inputBoxText,setInputBoxText]=useState("Box in Dark Mode")
  const [inputStyle,setInputStyle]=useState({
    color:"black",
    backgroundColor:"white"
})
const setInputStyleDark=()=>{
  if(inputStyle.color==="black"){
    setInputStyle({
      color:"white",
      backgroundColor:"black",
    })
    setInputBoxText("Box In Light Mode")
  }
  else{
   setInputStyle({
    color:"black",
    backgroundColor:"white",
   })
   setInputBoxText("Box in Dark Mode")
  }
} 
const handleOnChange=(event)=>{
    setText(event.target.value) 
}
  const toggle=()=>{
    if(mode==="dark"){
      setMode("light");
      setModeText("Dark Mode")
    }
    else{
      setMode("dark");
      setModeText("Light Mode");
    }
  }
  const capitalize=()=>{
   const capitalizedText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
   setCapitalize(capitalizedText); 
  }
 const countNoOfWord=()=>{
  const noOfWord=(text.match(/\b\w+\b/g) || []).length; 
  setNoOfWord(noOfWord)
 }
 const countNoOfLetter=()=>{
  let regex = /[a-zA-Z]/g;
  const noOfLetter=text.match(regex).length; 
  if(noOfLetter==null){
    setNoOfLetter(0)
  }
  else{
  setNoOfLetter(noOfLetter)
  }
 }
 const changeInSmallLetter=()=>{
  const textInSmall=text.toLowerCase(); 
  setInSmall(textInSmall)
 }
 const changeInUpperLetter=()=>{
  const textInUpper=text.toUpperCase(); 
  setInCap(textInUpper);
 }
  const textRes=[capitalize,handleOnChange,countNoOfWord,countNoOfLetter,inputStyle,text,changeInUpperLetter,changeInSmallLetter,inputBoxText]
  return (
  <>
  <div className={`bg-${mode==="dark"?"secondary":"light"}`}>
  <Navbar mode={mode} toggle={toggle} modeText={modeText} title="TextUtil" home="Home"/>
  <TextForm textRes={textRes} makeCapitalize={makeCapitalize} noOfWord={noOfWord} setInputStyleDark={setInputStyleDark} noOfLetter={noOfLetter} inSmall={inSmall} inCap={inCap} />
  </div>
  </>
  );
}

export default App;
