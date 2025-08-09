import Mynavbar from "../../components/navbar/navbar";
import '../addArticle/addarticle.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from "react";

function Addarticle() {
  const [Titelstate , setTitelstate] = useState()

  const addArticleHandler = () =>{

    axios.post("http://localhost:5000/articles" , {
      desc :"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
       image :"https://dl.next1code.ir/images/react/article2.webp",
      readingTime :"18",
      "category":" وب ",
      "wrriter":"هستی   "
    }) 
  }

  const titelHandler = (e) =>{
    setTitelstate(e.target.value)
  }
  return(
<>
<Mynavbar/>
<div className="formcontainer yekan">
 <Form.Label htmlFor="inputPassword5">عنوان مقاله</Form.Label>
      <Form.Control
      onChange={titelHandler} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عنوان مقاله را وارد کنید"
      />
 <Form.Label htmlFor="inputPassword5">توضیح کوتاه </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="  یک توضیح کوتاه درمورد مقاله بنویسید  "
      />
 <Form.Label htmlFor="inputPassword5"> نویسنده مقاله</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder=" نام نویسنده مقاله   "
      />
 <Form.Label htmlFor="inputPassword5">عکس مقاله</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عکس مقاله را وارد کنید"
      />

 <Form.Label htmlFor="inputPassword5"> مدت زمان خواندن</Form.Label>
     
    <Form.Control type="number" min={1} max={120} step={1} />
          <Button onClick={addArticleHandler} style={{marginTop:"20px"}} variant="primary" type="button">
        ساخت مقاله
      </Button>
      </div>

</>
  )
};

export default Addarticle;