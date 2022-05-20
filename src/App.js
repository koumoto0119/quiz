// import logo from './logo.svg';
import './App.css';
import * as React from'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function App() {
  const mondai=[
    ['田村研は楽であるか',0],
    ['エヴァンゲリオン2号機は紫色であるか',1]
  ]
  const[index, setindex] = React.useState(0)
  const[kekka, setkekka] = React.useState("")
  const test = (arg) => {
    //ここに実行したい命令を書く
    if (arg==mondai[index][1]){
      setkekka('正解');

    }
    else{
      setkekka('不正解');
    }
    
    if(index==mondai.length-1){
        setindex(0)
    }else{
      setindex(index+1)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       
      <p>
      　{mondai[index][0]}  
        </p>  
        
        <Stack spacing={2} direction="row">
          <Button variant="contained"　onClick={()=>test(0)}>はい</Button>
          <Button variant="contained" onClick={()=>test(1)}>いいえ</Button>

          </Stack>
          <Typography display="block">
            {kekka}
          </Typography>


      </header>
    </div>
  );
}

export default App;
